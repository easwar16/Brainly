import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import { contentModel, LinkModel, tagModel, userModel } from "./db.js";
import { userMiddleWare } from "./middleware.js";
import { allowedContentTypes, ContentValidationSchema, UserValidationSchema, } from "./validation.js";
import { random } from "./utils.js";
dotenv.config();
const app = express();
app.use(express.json());
app.post("/api/v1/signup", async (req, res) => {
    console.log(req.body);
    const userValid = UserValidationSchema.safeParse(req.body);
    if (userValid.success) {
        const username = req.body.username;
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, Number(process.env.SALTROUNDS) || 10);
        const userByName = await userModel.findOne({ username: username });
        if (userByName?._id) {
            return res
                .status(403)
                .json({ err_msg: "User already exists with this username" });
        }
        const posteduser = await userModel.create({
            username: username,
            password: hashedPassword,
        });
        if (posteduser?._id) {
            return res.status(200).json({ msg: "Signed up" });
        }
    }
    else {
        return res.status(411).json({ res_msg: " Error in inputs" });
    }
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
});
app.post("/api/v1/signin", async (req, res) => {
    const userValid = UserValidationSchema.safeParse(req.body);
    if (userValid.success) {
        const username = req.body.username;
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, Number(process.env.SALTROUNDS) || 10);
        const userByName = await userModel.findOne({ username: username });
        console.log(userByName);
        if (userByName?._id) {
            // res
            //   .status(403)
            //   .json({ err_msg: "User already exists with this username" });
            const isMatch = await bcrypt.compare(password, userByName.password ?? "");
            console.log("IsMatch : " + isMatch);
            if (isMatch) {
                const generatedToken = jwt.sign({ id: userByName?._id }, process.env.SECRET ?? "IamNoob", {
                    expiresIn: "1h",
                });
                return res.status(200).json({
                    token: generatedToken,
                });
            }
            else {
                return res.status(403).json({ err_msg: "Wrong password" });
            }
        }
    }
    else {
        return res.status(403).json({ err_msg: "Wrong email password" });
    }
    throw new Error();
});
app.post("/api/v1/content", userMiddleWare, async (req, res) => {
    const validContent = ContentValidationSchema.safeParse(req.body);
    if (validContent) {
        const link = req.body.link;
        const title = req.body.title;
        const tags = req.body.tags;
        // if (!allowedContentTypes.includes(req.body.type)) {
        //   return res.status(403).json({ message: "The Type is not Valid" });
        // }
        // console.log("tagIds : " + tagsIds);
        let tagsIdsArray = [];
        for (let i = 0; i < tags.length; i++) {
            const tagsId = await tagModel.create({ name: tags[i] });
            console.log(tags[i]);
            //@ts-ignore
            tagsIdsArray.push(tagsId._id);
        }
        const type = req.body.type;
        const contentCreated = await contentModel.create({
            link: link,
            title: title,
            //@ts-ignore
            userId: req.userId,
            type: type,
            //@ts-ignore
            tags: tagsIdsArray,
        });
        return res.status(200).json({ message: "Content Created Successfully" });
    }
    else {
        return res.status(403).json({ message: "The Type is not Valid" });
    }
});
app.get("/api/v1/content", userMiddleWare, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    console.log(userId);
    const content = await contentModel
        .find({ userId: userId })
        .populate("userId", "username")
        .populate("tags", "name");
    // console.log(content);
    res.json({ content });
});
app.delete("/api/v1/content", async (req, res) => {
    const contentId = req.body.contentId;
    const deleted = await contentModel.deleteOne({
        contentId,
        //@ts-ignore
        userId: req.userId,
    });
    res.json({ message: "Deleted" });
});
app.post("/api/v1/brain/share", userMiddleWare, async (req, res) => {
    const { share } = req.body;
    if (share) {
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId: req.userId,
        });
        if (existingLink) {
            return res.status(200).json({ message: `/share/${existingLink.hash}` });
        }
        const hash = random(10);
        const shareCreated = await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash,
        });
        return res.status(200).json({ message: `/share/${hash}` });
    }
    else {
        const shareDeleted = await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId,
        });
        return res.status(200).json({ message: "Link Deactivated" });
    }
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const findHash = await LinkModel.findOne({ hash: hash });
    if (!findHash) {
        return res.status(403).json({ message: "Sorry Incorrect Input" });
    }
    else {
        const content = await contentModel.find({ userId: findHash.userId });
        const user = await userModel.findOne({ _id: findHash.userId });
        if (!user) {
            return res.status(403).json({ message: "User not Found" });
        }
        return res.status(200).json({ username: user.username, content: content });
    }
});
app.use((err, req, res, next) => {
    console.error("🔥 Server Error:", err);
    return res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});
app.listen(process.env.PORT ?? 3000, () => {
    console.log("Listening on " + process.env.PORT);
});
//# sourceMappingURL=index.js.map