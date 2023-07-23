import express from 'express';

// import { getPosts, getPost, createPost, updatePost,  deletePost } from '../controllers/posts.js';
import { getPosts, getPost, createPost, updatePost,deletePost, deleteAllPosts } from '../controller/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.delete('/all/deleteAll', deleteAllPosts);
export default router;