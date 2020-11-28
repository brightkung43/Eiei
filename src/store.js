import { configureStore } from '@reduxjs/toolkit';
import emailReducer from './state/emailState';



export default configureStore({
  reducer: {
    email: emailReducer,
  },
});

