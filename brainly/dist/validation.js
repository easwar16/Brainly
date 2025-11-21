import * as z from "zod";
export const allowedContentTypes = ["document", "tweet", "youtube", "link"];
export const UserValidationSchema = z.object({
    username: z.string().min(3).max(10),
    password: z
        .string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/, "Password must be 8–20 chars and include uppercase, lowercase, number, and special character."),
});
export const ContentValidationSchema = z.object({
    link: z.string(),
    title: z.string().min(1),
    type: z.enum(["document", "tweet", "youtube", "link"]),
    tags: z.array(z.string()).optional(),
});
//# sourceMappingURL=validation.js.map