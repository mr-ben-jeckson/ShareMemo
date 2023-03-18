import Post from "../models/post.js";
import User from "../models/user.js";

/* CREATE POST */
export const createPost = async(req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        });
        
        await newPost.save();
        const posts = await Post.find();
        res.status(201).json(posts);

    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const getFeeds = async(req, res) => {
    try {
        const posts = await Post.find().sort({'createdAt': 'desc'});
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getPosts = async(req, res) => {
    try {
        const { userId } = req.params;
        const posts = await Post.find({ userId });
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const likePost = async(req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);
        if(isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes},
            { new: true }
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: err.message })
    }
}