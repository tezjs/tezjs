const seen = new Set();
export function preloadDependencies(baseModule, deps) {
    
    const base = '/'
    if (!deps || deps.length === 0) {
        return baseModule();
    }
    return Promise.all(deps.map((dep) => {
        dep = `${base}${dep}`;
        if (dep in seen)
            return;
        seen[dep] = true;
        const isCss = dep.endsWith('.css');
        const cssSelector = isCss ? '[rel="stylesheet"]' : '';
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
            return;
        }
        const link = document.createElement('link');
        link.rel = isCss ? 'stylesheet' : "modulepreload";
        if (!isCss) {
            link.as = 'script';
            link.crossOrigin = '';
        }
        link.href = dep;
        document.head.appendChild(link);
        if (isCss) {
            return new Promise((res, rej) => {
                link.addEventListener('load', res);
                link.addEventListener('error', rej);
            });
        }
    })).then(() => baseModule());
}