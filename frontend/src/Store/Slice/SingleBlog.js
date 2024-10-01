import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
  IDLE: "idle",
};

export const singleBlogSlice = createSlice({
  name: "fetchBlog",
  initialState: {
    status: STATUSES.IDLE,
    data: {},
  },
  extraReducers: (bundler) => {
    bundler
      .addCase(fetchBlog.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        if (action.payload.message) {
          state.status = STATUSES.ERROR;
        } else {
          state.status = STATUSES.SUCCESS;
        }
        state.data = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(deleteBlog.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        if (action.payload.message) {
          state.status = STATUSES.ERROR;
        } else {
          state.status = STATUSES.SUCCESS;
        }
        state.data = action.payload;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(editBlog.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(editBlog.fulfilled, (state, action) => {
        if (action.payload.message) {
          state.status = STATUSES.ERROR;
        } else {
          state.status = STATUSES.SUCCESS;
        }
        state.data = action.payload;
      })
      .addCase(editBlog.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const fetchBlog = createAsyncThunk("fetchBlog", async (id) => {
  console.log("runnig");
  const { data } = await axios.get(`/blog/${id}`);

  return data;
});
export const deleteBlog = createAsyncThunk("deleteBlog", async (id) => {
  const { data } = await axios.delete(`/blog/${id}`);

  return data;
});
export const editBlog = createAsyncThunk(
  "editBlog",
  async ({ id, formData }) => {
    const { data } = await axios.put(`/blog/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  }
);

export default singleBlogSlice.reducer;
