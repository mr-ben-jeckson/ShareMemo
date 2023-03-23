import express from "express";
import { getFeeds, getPosts, likePost } from "../controllers/post.js";
import { verfiyToken } from "../middlewares/auth.js";

const router = express.Router();

/* READ */
router.get('/', verfiyToken, getFeeds);
router.get('/:userId/posts', verfiyToken, getPosts);

/* UPDATE */
router.patch('/:id/like', verfiyToken, likePost);

export default router;
