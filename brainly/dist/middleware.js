import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const userMiddleWare = (req, res, next) => {
    // console.log("Headers received:", req.headers);
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(403).json({ message: "No token provided" });
    }
    // Format: "Bearer token"
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(403).json({ message: "Invalid token format" });
    }
    // console.log(token);
    const decode = jwt.verify(token, process.env.SECRET ?? "");
    if (decode) {
        //@ts-ignore
        req.userId = decode.id;
        //@ts-ignore
        // console.log(decode.id ?? "");
        next();
    }
    else {
        return res.status(403).json({ message: "You're not logged in" });
    }
};
//# sourceMappingURL=middleware.js.map