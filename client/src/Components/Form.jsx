import {React, useState } from 'react';
import { useDispatch } from 'react-redux';
import {createPost} from '../actions/posts'
import axios from 'axios';
import FileBase from 'react-file-base64';
import Topbar from './Topbar';

const Form = () => {

  const [postData, setPostData] = useState({category:'', dishName: '', price: '', selectedFile:''});
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    window.location.href = 'http://localhost:3000';
  }
  

    return (
      <>
      <Topbar />
      <div className="w-full max-w-xs">
        <h1 className='text-center text-black font-bold text-lg'>Dish Form</h1>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label htmlFor="category" className="block font-bold mb-1">Category:</label>
      <select
        id="category"
        name="category"
        value={postData.category}
        onChange={(event) => setPostData({...postData, category: event.target.value})}
        required
        className="block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="">Select a category</option>
        <option value="Starters">Starters</option>
        <option value="Main Course">Main Course</option>
        <option value="Main Course">Breads</option>
        <option value="Beverages">Beverages</option>
        <option value="Sweets">Sweets</option>
      </select>
    </div>
    <div className="mb-4">
    <label htmlFor="dishName" className="block font-bold mb-1">Dish Name:</label>
        <input
          type="text"
          id="dishName"
          name="dishName"
          value={postData.dishName}
          onChange={(event) => setPostData({ ...postData, dishName: event.target.value})}
          required
          className="block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div>
        <label htmlFor="price" className="block font-bold mb-1">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={postData.price}
          onChange={(event)=> setPostData({ ...postData, price: event.target.value})}
          required
          className="block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="selectedFile" className="block font-bold mb-1" >Selected File:</label>
        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({...postData, selectedFile: base64}) }
        className="block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"/>
      </div>
      <button type="submit" className=" justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-md focus:outline-none focus:ring focus:border-blue-300" >Add Dish</button>
    </form>
    </div>
    </>
  )
};

export default Form