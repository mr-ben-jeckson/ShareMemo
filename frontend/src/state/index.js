import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    lang: "en",
    user: null,
    token: null,
    posts: []
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLang: (state) => {
            state.lang = state.lang === "en" ? "mm" : "en";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if(state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("User does not have friends");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatePosts = state.posts.map((post) => {
                if(post._id === action.payload.post._id ) {
                    return action.payload.post;
                } else {
                    return post;
                }
            })
            state.posts = updatePosts;
        }
    }
})

export const { setMode, setLang, setLogin, setLogout, setFriends, setPost, setPosts} = authSlice.actions;
export default authSlice.reducer; 