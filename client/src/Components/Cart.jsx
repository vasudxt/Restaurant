import {React} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../actions/cart';

const Cart = () => {
 const cartItems = useSelector((state) => state.cartItems.cartItems);
  

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));

  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
    
  };

  const handleDecreaseQuantity = (productId) => {
   dispatch(decreaseQuantity(productId));
  const productInCart = cartItems.find((item) => item._id === productId);
  console.log(productInCart);

  if (productInCart.quantity < 1) {
    dispatch(removeFromCart(productId));
  }; 
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  };

  

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">Olive Green Restaurant</h2>
      <h3 className='text-sm font-semibold'>GST no - 132XXXXXXXXX</h3>
      <h3 className='text-sm font-semibold'>Address- 3/70 XXXX New Delhi</h3>
      {cartItems.map((item) => (
        <div key={item._id} className="border p-4 mb-4">
          <h3 className="text-lg font-semibold">{item.dishName}</h3>
          <p className="text-gray-600">Price: Rs {item.price}</p>
          <p className="text-gray-600">Quantity: {item.quantity} </p>
          <div className="flex space-x-2 mt-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded" onClick={() => handleDecreaseQuantity(item._id)}>-</button>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded" onClick={() => handleIncreaseQuantity(item._id)}>+</button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded" onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
          
          
          </div>
          <p className="text-gray-600 mt-2">Subtotal: Rs {item.price * item.quantity}</p>
        </div>
      ))}
      {cartItems && cartItems.length > 0 && (
       
  <h4 className="text-xl font-bold">Total: Rs {calculateTotal()}</h4>
  
    
)}
 
    </div>
  );
};
 

export default Cart;