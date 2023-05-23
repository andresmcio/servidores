const Post = require('../database/models/post.model');   

module.exports = {
    getPosts: (req, res, next) => {
        Post.find({})
            .then(posts => {
                res.json(posts);
            })
            .catch(next);
    },
    createPost: (req, res, next) => {
        Post.create({
            title: req.body.title,
            text: req.body.text,
            author: req.body.author
        })
            .then(post => {
                res.status(201).json(post);
            })
            .catch(next);
    },
    getPost: (req, res, next) => {
        Post.findById(req.params.id)
            .then(post => {
                if (post) {
                    return res.json(post);
                } else {
                    return res.status(404).json({message: 'Post not found'});
                }
            })
            .catch(next);
    },
    updatePost: (req, res, next) => {
        Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then((post) => {
                if (post) {
                    return res.json(post);
                } else {
                    return res.status(404).json({message: 'Post not found'});
                }
            })
            .catch(next);
    },
    deletePost: (req, res, next) => {
        Post.findByIdAndDelete(req.params.id)
            .then((post) => {
                if (post) {
                    return res.status(204).json({message: 'Post deleted'});
                }
                else {
                    return res.status(404).json({message: 'Post not found'});
                }
            })
            .catch(next);
    }
}