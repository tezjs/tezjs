export interface BuildConfig{
    inLineJs?:boolean;
    inLineCss?:boolean;
    bundleCss?:boolean;
    minifyHtml?:boolean;
    inlineFontCss?:Array<string>;
}