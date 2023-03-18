import jwt from "jsonwebtoken";

export const verfiyToken = async(req, res, next) => {
    try {
        let token = req.header("Authorization");
        if(!token) return res.status(400).json({ msg: "Access Denied" });
        if(token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}