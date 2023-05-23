const { Router } = require('express');
const { getPosts, createPost, getPost, updatePost, deletePost } = require('../controllers/posts.controller');
const routes = Router();

routes.get('/api/posts', getPosts);
routes.post('/api/posts', createPost);
routes.get('/api/posts/:id', getPost);
routes.patch('/api/posts/:id', updatePost);
routes.delete('/api/posts/:id', deletePost);

module.exports = routes;