import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';

// Define any middlewares to be used
const MiddleWares: Middleware[] = [];

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(MiddleWares),
});

// Export the AppDispatch and RootState types for use throughout the app
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Create a custom hook for the useDispatch function from react-redux
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
