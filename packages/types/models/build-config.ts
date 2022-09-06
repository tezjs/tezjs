export interface BuildConfig{
    inLineJs?:boolean;
    inLinCss?:boolean;
    bundleCss?:boolean;
    minifyHtml?:boolean;
    inlineFontCss?:Array<string>;
}