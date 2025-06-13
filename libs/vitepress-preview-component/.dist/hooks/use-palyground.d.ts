export declare function utoa(data: string): string;
export type Link = {
    text: string;
    link: string;
    promotion?: string;
    activeMatch: string;
};
export declare const usePreview: () => boolean;
export declare const usePreviewPR: () => string;
export declare const usePlayground: (source: string) => {
    encoded: string;
    link: string;
};
export declare const usePlaygroundPreview: (props: Readonly<{
    item: Link;
}>) => import('vue').Ref<string, string>;
