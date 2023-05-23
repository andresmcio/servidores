const { Router } = require('express');
const { getPosts, createPost, getPost, updatePost, deletePost } = require('../controllers/posts.controller');
const routes = Router();
const authenticateToken = require('../middlewares/login.middleware');

routes.get('/api/posts', authenticateToken, getPosts);
routes.post('/api/posts', authenticateToken, createPost);
routes.get('/api/posts/:id', authenticateToken, getPost);
routes.patch('/api/posts/:id', authenticateToken, updatePost);
routes.delete('/api/posts/:id', authenticateToken, deletePost);

module.exports = routes;