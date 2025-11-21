import * as z from "zod";
export declare const allowedContentTypes: string[];
export declare const UserValidationSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const ContentValidationSchema: z.ZodObject<{
    link: z.ZodString;
    title: z.ZodString;
    type: z.ZodEnum<{
        link: "link";
        document: "document";
        tweet: "tweet";
        youtube: "youtube";
    }>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
//# sourceMappingURL=validation.d.ts.map