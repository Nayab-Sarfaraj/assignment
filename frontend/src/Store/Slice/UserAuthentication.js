import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
  IDLE: "idle",
};

export const userAuthentictionSlice = createSlice({
  name: "createBlog",
  initialState: {
    status: STATUSES.IDLE,
    data: {},
    isAuthenticated: false,
  },
  extraReducers: (bundler) => {
    bundler
      .addCase(registerUser.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload.message) {
          state.status = STATUSES.ERROR;
          state.isAuthenticated = false;
        } else {
          state.status = STATUSES.SUCCESS;
          state.isAuthenticated = true;
        }
        state.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.isAuthenticated = false;
        state.data = {};
      })
      .addCase(loginUser.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.message) {
          state.status = STATUSES.ERROR;
          state.isAuthenticated = false;
        } else {
          state.status = STATUSES.SUCCESS;
          state.isAuthenticated = true;
        }
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.isAuthenticated = false;
        state.data = {};
      })
      .addCase(fetchUserProfile.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        if (action.payload.message) {
          state.status = STATUSES.ERROR;
          state.isAuthenticated = false;
        } else {
          state.status = STATUSES.SUCCESS;
          state.isAuthenticated = true;
        }
        state.data = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.isAuthenticated = false;
        state.data = {};
      })
      .addCase(UpdateProfilePicture.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(UpdateProfilePicture.fulfilled, (state, action) => {
        if (action.payload.message) {
          state.status = STATUSES.ERROR;
          state.isAuthenticated = false;
        } else {
          state.status = STATUSES.SUCCESS;
          state.isAuthenticated = true;
        }
        state.data = action.payload;
      })
      .addCase(UpdateProfilePicture.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.isAuthenticated = false;
        state.data = action.payload;
      })
      .addCase(logout.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = STATUSES.SUCCESS;
        state.isAuthenticated = false;
        state.data = {};
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(updatePassword.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        if (action.payload.message) {
          state.status = STATUSES.ERROR;
          state.isAuthenticated = false;
        } else {
          state.status = STATUSES.SUCCESS;
          state.isAuthenticated = true;
        }
        state.data = action.payload;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.isAuthenticated = false;
        state.data = action.payload;
      })
      .addCase(forgotPassword.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = STATUSES.SUCCESS;
      })
      .addCase(addComment.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const registerUser = createAsyncThunk(
  "registerUser",
  async ({ name, email, password }) => {
    const { data } = await axios.post("/register", {
      name,
      email,
      password,
    });

    return data;
  }
);
export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ password, email }) => {
    const { data } = await axios.post("/login", { email, password });
    return data;
  }
);
export const fetchUserProfile = createAsyncThunk(
  "fetchUserProfile",
  async () => {
    const { data } = await axios.get("/me");
    return data;
  }
);
export const UpdateProfilePicture = createAsyncThunk(
  "UpdateProfilePicture",
  async (formData) => {
    formData.forEach((element) => {
      console.log(element);
    });
    const { data } = await axios.post("/upload/profilePic", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  }
);
export const completeProfile = createAsyncThunk(
  "completeProfile",
  async ({ bio, profession, name, contactInfo }) => {
    console.log(contactInfo);
    const { data } = await axios.put("/completeProfile", {
      bio,
      profession,
      name,
      contactInfo,
    });
    console.log(data);
    return data;
  }
);
export const logout = createAsyncThunk("logout", async () => {
  const data = await axios.get("logout");
  return data;
});

export const updatePassword = createAsyncThunk(
  "updatePassword",
  async ({ newPassword, oldPassword }) => {
    const { data } = await axios.patch("/updatePassword", {
      newPassword,
      oldPassword,
    });
    return data;
  }
);
export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (email) => {
    const { data } = await axios.post("/forgotPassword", { email });
    return data;
  }
);
export const resetPassword = createAsyncThunk(
  "resetPassword",
  async ({ token, password }) => {
    console.log(token, password);
    const { data } = await axios.put(`/resetPassword/${token}`, {
      password,
    });
    return data;
  }
);
export const increaseLike = createAsyncThunk("increaseLike", async (id) => {
  const { data } = await axios.post(`/like/${id}`);
  return data;
});
export const decreaseLike = createAsyncThunk("decreaseLike", async (id) => {
  const { data } = await axios.post(`/unlike/${id}`);
  console.log(data);
  return data;
});
export const addComment = createAsyncThunk(
  "addComment",
  async ({ comment, id }) => {
    const { data } = await axios.post(`/addcomment/${id}`, { comment });
    return data;
  }
);
export default userAuthentictionSlice.reducer;
