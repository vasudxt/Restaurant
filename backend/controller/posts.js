import express from 'express';
import mongoose from 'mongoose';

import PostDish from '../models/dish.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postDishes = await PostDish.find();
                
        res.status(200).json(postDishes);
        console.log(postDishes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostDish.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {

    const { category, dishName, price, selectedFile } = req.body;

    const newPostDish = new PostDish({ category, dishName, price, selectedFile })

    try {
        await newPostDish.save();

        res.status(201).json(newPostDish );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { category, dishName, price, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { category, dishName, price, selectedFile, _id: id };

    await PostDish.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostDish.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const deleteAllPosts = async (req, res) => {
   
    PostDish.deleteMany().then(() => {
        console.log("Data deleted"); // Success
    }).catch((error) => {
        console.log(error); // Failure
    });
}

export default router;