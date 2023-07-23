const initialState = {
    products: [],
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      case 'ADD_TO_CART':
        const existingItem = state.cartItems.find((item) => item._id === action.payload._id);
        if (existingItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item._id !== action.payload),
        };
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;