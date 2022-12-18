// const Post = require('./Post.js');
// const uuid = require('uuid');

// let Posts = [];

// const postList = (function () {
//     function addPost (req)  {
//         let newPost = new Post(uuid.v4(), req.body.header, req.body.img);
//         newPost.description = req.body.description;
//         Posts.push(newPost);
//         return newPost;
//     }

//     function updatePost (req) {
//         let postToUpdate = Posts.find(p => p.id === req.params.id);
//         if (!postToUpdate)
//             return false;

//         postToUpdate.header = req.body.header;
//         postToUpdate.description = req.body.description;
//         postToUpdate.img = req.body.img;
//         return postToUpdate;
//     }

//     function deletePost (req) {
//         const postToDelete = Posts.find(p => p.id === req.params.id);
//         if (!postToDelete)
//             return false;

//         const index = Posts.indexOf(postToDelete);
//         Posts.splice(index, 1);
//         return true;
//     }

//     function getPost(req) {
//         return Posts.find(p => p.id === req.params.id);
//     }

//     function getAllPost() {
//         return Posts;
//     }

//     return {
//         addPost,
//         updatePost,
//         deletePost,
//         getPost,
//         getAllPost,
//     }
// })();

// module.exports = postList;
