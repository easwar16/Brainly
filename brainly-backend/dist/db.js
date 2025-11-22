import mongoose, { model, Model, mongo, Schema } from "mongoose";
import { required } from "zod/mini";
mongoose.connect("mongodb+srv://easwar:Easwar@cluster0.qctsom0.mongodb.net/brainly");
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
});
export const userModel = model("User", UserSchema);
const contentSchema = new Schema({
    link: String,
    title: String,
    type: {
        type: String,
        enum: ["document", "tweet", "youtube", "link"],
        required: true,
    },
    tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});
export const contentModel = model("Content", contentSchema);
const tagSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
});
export const tagModel = model("Tag", tagSchema);
const linksSchema = new Schema({
    hash: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
});
export const LinkModel = model("Link", linksSchema);
//# sourceMappingURL=db.js.map