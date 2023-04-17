import { combineReducers } from '@reduxjs/toolkit';
// import { usersReducer } from './userReducer';
import { ProductReducer } from './ProductReducer';

const rootReducer = combineReducers({
  //   user: usersReducer,
  product: ProductReducer,
});
export default rootReducer;
