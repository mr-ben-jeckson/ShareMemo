import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriends
} from "../controllers/user.js";
import { verfiyToken } from "../middlewares/auth.js";

const router = express.Router();

/* READ */
router.get('/:id', verfiyToken, getUser);
router.get('/:id/friends', verfiyToken, getUserFriends);
/* UPDATE */
router.patch('/:id/:friendId', verfiyToken, addRemoveFriends);

export default router;
