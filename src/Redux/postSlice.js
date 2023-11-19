import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:'post',
    initialState:{
        posts: [],
        postCount:0
    },
    reducers:{

        fetchPosts(state,action){
            state.posts = action.payload.posts
            state.postCount = action.payload.posts.length
        },
        addPost(state,action){
           state.postCount ++

           state.posts.push({
                ...action.payload
           })
        },
        editPost(state, action){
            const newPost = action.payload
            const existingPost = state.posts.find(post => post.id === newPost.id)

            if(existingPost){
                existingPost.image = newPost.image
                existingPost.desc = newPost.desc
                existingPost.title = newPost.title
                existingPost.category = newPost.category
            }   
        },
        viewPost(state,action){
            const id = action.payload.id
            const post = state.posts.find(post => post.id === id)

            return post
        },
        deletePost(state,action){
            const id = action.payload
            state.posts = state.posts.filter(post => post.id !== id)
        },
        likePost(state,action){
            const id = action.payload
            const post = state.posts.filter(post => post.id !== id)

            post.like ++
        },
        dislikePost(state,action){
            const id = action.payload
            const post = state.posts.filter(post => post.id !== id)

            post.like --
        },
    }
})

export const postActions = postSlice.actions

export default postSlice.reducer;