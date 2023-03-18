import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    location: String,
    picturePath: String,
    userPicturePath: String,
    description: String,
    likes: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
export default Post;
