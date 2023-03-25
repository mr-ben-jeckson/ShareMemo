import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import { verfiyToken } from "./middlewares/auth.js";
import { createPost } from "./controllers/post.js";
//import User from "./models/user.js";
//import Post from "./models/post.js";
//import { users, posts } from "./dummy/index.js"; // To seed once


/** Confirgulation */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/assets/', express.static(path.join(__dirname, 'storage/assets')));

/* File Storage */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "storage/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

/* Routes with image */
app.post('/auth/register', upload.single("picture"), register);
app.post('/post', verfiyToken, upload.single("picture"), createPost);


/* Routes */
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 9001;
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(PORT, ()=> console.log(`Server is running at the port ${PORT}`));
    //User.insertMany(users);
    //Post.insertMany(posts);
})
.catch((error) => console.log(`${error}. Did not connect mongo database`));
