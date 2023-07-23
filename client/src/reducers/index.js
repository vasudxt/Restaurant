import { combineReducers } from 'redux';
import posts from './posts';
import cartReducer from './cartReducer';

export const reducers = combineReducers({
    posts: posts ,
    cartItems: cartReducer,
});
