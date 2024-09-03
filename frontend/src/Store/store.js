import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./Slice/AllBlogsSlice";
export const store = configureStore({
  reducer: { blogs: blogsReducer },
});
