import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, deletePost } from '../../actions/posts';
import { addToCart } from '../../actions/cart';



const MainCourse = () => {


  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log("item added "+ item.price);
  };

  const dishes = posts.sort((a, b) => a.dishName.localeCompare(b.dishName));


  const mainCourse = dishes.filter((item) => item.category === 'Main Course');
  const [showOptions, setShowOptions] = useState({});

  const toggleOptions = (itemId) => {
    setShowOptions((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleUpdateitem = (itemId,item) => {
    window.location.href = `http://localhost:3000/${itemId}`;
    
  };

  const handleDeleteitem = (itemId) => {
    dispatch(deletePost(itemId));
    
  };
    return (
      <div className="grid grid-cols-5 gap-5">
      {mainCourse.map((item) => (
        
        <div className='flex flex-col items-center justify-center p-4' key={item._id}>
  
        <img src={item.selectedFile} alt="pannerTikka" className="w-full h-40 object-cover" />
        <h3 className="mt-2 text-lg font-semibold"> {item.dishName}</h3>
        <p className="mt-1 text-gray-600">Rs {item.price}</p>
        
<button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleAddToCart(item)}>
  Add to Cart
</button>
            <button
              className="bg-white px-0.5 py-0.5"
              onClick={() => toggleOptions(item._id)}
            >
              ...
            </button>
            {showOptions[item._id] && (
              <div className="bg-white border rounded-md absolute self-center">
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => handleUpdateitem(item._id, item)}
                >
                  Update
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-red-600"
                  onClick={() => handleDeleteitem(item._id)}
                >
                  Delete
                </button>
              </div>
            )}
          


    </div>

      ))}
      
      </div>
  );
};

export default MainCourse