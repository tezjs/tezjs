import { isBot } from '@tezjs/js';

let ssrHtml: string = '';
let isSafeguardRegistered = false;

export function saveSsrHtml(): string {
    if (typeof document !== 'undefined' && !ssrHtml) {
        const el = document.getElementById('tez_app');
        if (el) {
            ssrHtml = el.innerHTML;
        }
    }
    return ssrHtml;
}

export function getSsrHtml(): string {
    return ssrHtml || saveSsrHtml();
}

export function restoreSsrHtml(): boolean {
    if (typeof document !== 'undefined') {
        const el = document.getElementById('tez_app');
        const html = getSsrHtml();
        if (el && html && el.innerHTML !== html) {
            el.innerHTML = html;
            return true;
        }
    }
    return false;
}

export function registerGlobalSafeguard() {
    if (typeof window !== 'undefined' && !isSafeguardRegistered) {
        isSafeguardRegistered = true;
        saveSsrHtml();

        window.addEventListener('unhandledrejection', (event) => {
            if (isBot()) {
                restoreSsrHtml();
            }
        });

        window.addEventListener('error', (event) => {
            if (isBot()) {
                restoreSsrHtml();
            }
        });
    }
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            saveSsrHtml();
        });
    } else {
        saveSsrHtml();
    }
}
