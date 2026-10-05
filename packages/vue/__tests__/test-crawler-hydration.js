const assert = require('assert');

// 1. Mock browser DOM environment
class MockElement {
    constructor(id) {
        this.id = id;
        this._innerHTML = '';
        this.childNodes = [];
    }
    get innerHTML() {
        return this._innerHTML;
    }
    set innerHTML(val) {
        this._innerHTML = val;
    }
}

const eventListeners = {};
global.history = { state: null };
global.window = {
    addEventListener: (event, handler) => {
        if (!eventListeners[event]) eventListeners[event] = [];
        eventListeners[event].push(handler);
    },
    dispatchEvent: (event, data) => {
        if (eventListeners[event]) {
            eventListeners[event].forEach(h => h(data));
        }
    },
    location: { hostname: 'localhost', pathname: '/' }
};

const tezAppElement = new MockElement('tez_app');
const SSR_HTML = '<h1>Heading 1</h1><h2>Heading 2</h2><p>Pre-rendered content ~131 KB</p>';
tezAppElement.innerHTML = SSR_HTML;

global.document = {
    readyState: 'complete',
    createElement: (tag) => new MockElement(tag),
    getElementById: (id) => {
        if (id === 'tez_app') return tezAppElement;
        return null;
    },
    addEventListener: () => {}
};

// Set crawler user agent (Googlebot)
Object.defineProperty(global.navigator, 'userAgent', {
    value: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    configurable: true
});

// Import built vue bundle
const { saveSsrHtml, restoreSsrHtml, registerGlobalSafeguard, createTezApp } = require('../dist/index.cjs');

console.log('--- Test 1: SSR HTML preservation & restore ---');
saveSsrHtml();
assert.strictEqual(tezAppElement.innerHTML, SSR_HTML, 'Initial SSR HTML should be intact');

// Simulate client script wiping out DOM (as Vue initial render did)
const COLLAPSED_HTML = '<div><div style="height: 2px;"></div></div>';
tezAppElement.innerHTML = COLLAPSED_HTML;
assert.strictEqual(tezAppElement.innerHTML, COLLAPSED_HTML, 'DOM wiped to 43 bytes');

// Call restoreSsrHtml
const restored = restoreSsrHtml();
assert.strictEqual(restored, true, 'restoreSsrHtml should return true when restoring');
assert.strictEqual(tezAppElement.innerHTML, SSR_HTML, 'DOM should be restored to full SSR HTML');
console.log('Test 1 Passed: SSR HTML preserved and restored successfully.');

console.log('--- Test 2: Global Unhandled Rejection Safeguard ---');
registerGlobalSafeguard();
console.log('Registered events:', Object.keys(eventListeners));
console.log('unhandledrejection handlers count:', (eventListeners['unhandledrejection'] || []).length);

// Wipe DOM again to simulate failure
tezAppElement.innerHTML = COLLAPSED_HTML;

// Fire unhandledrejection event
global.window.dispatchEvent('unhandledrejection', new Error('Failed to fetch dynamically imported module: post.js'));
console.log('DOM after dispatch:', tezAppElement.innerHTML);
assert.strictEqual(tezAppElement.innerHTML, SSR_HTML, 'DOM should be restored by unhandledrejection safeguard for Googlebot');
console.log('Test 2 Passed: Unhandled rejection safeguard restores SSR DOM.');

console.log('--- Test 3: Global Error Event Safeguard ---');
tezAppElement.innerHTML = COLLAPSED_HTML;
window.dispatchEvent('error', new Error('ChunkLoadError: Loading chunk failed'));
assert.strictEqual(tezAppElement.innerHTML, SSR_HTML, 'DOM should be restored by error safeguard for Googlebot');
console.log('Test 3 Passed: Global error safeguard restores SSR DOM.');

console.log('--- Test 4: createTezApp Defensive Hydration on postScript Failure ---');
(async () => {
    // Setup TEZ_DATA with a failing postScript (mimicking Googlebot dropping a component chunk)
    global.window.TEZ_DATA = (registerTezPage, preload) => {
        registerTezPage({
            payload: {
                url: '/',
                slots: { default: [{ id: '1', name: 'TabComponent' }] }
            },
            postScript: () => Promise.reject(new Error('Failed to fetch dynamically imported module: post.js'))
        });
    };

    // Ensure #tez_app starts with full SSR content
    tezAppElement.innerHTML = SSR_HTML;

    createTezApp({
        commandName: 'build',
        buildVersion: '1.0.0'
    });

    // Wait a tick for promises to settle
    await new Promise(r => setTimeout(r, 100));

    // Verify: #tez_app MUST remain the full SSR content, NOT collapsed to 2px box
    assert.strictEqual(tezAppElement.innerHTML, SSR_HTML, 'DOM should NOT be touched or collapsed when crawler postScript fails');
    console.log('Test 4 Passed: createTezApp left SSR HTML untouched when postScript dropped.');

    console.log('\nAll Crawler Hydration Defense Tests Passed Successfully!');
})();
