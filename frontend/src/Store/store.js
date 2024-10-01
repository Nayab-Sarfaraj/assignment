import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./Slice/AllBlogsSlice";
import themeReducer from "./Slice/ThemeSlice";
import authenticationReducer from "./Slice/UserAuthentication";
import singleBlogReducer from "./Slice/SingleBlog";
import AuthorReducer from "./Slice/FetchAuthorBlogsAndCredentials";
import createBlogReducer from "./Slice/CreateBlog";
import myBlogReducer from "./Slice/MyBlogs";
import searchReducer from "./Slice/searchSlice";
import carouselReducer from "./Slice/carouselSlice";
export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    theme: themeReducer,
    user: authenticationReducer,
    singleBlog: singleBlogReducer,
    author: AuthorReducer,
    createBlog: createBlogReducer,
    myBlogs: myBlogReducer,
    searchResult: searchReducer,
    carousel: carouselReducer,
  },
});
