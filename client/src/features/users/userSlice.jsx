import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, posts: [] },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      const { fullname, biography, profile_picture } = action.payload;
      const updatedUser = state.user;
      updatedUser.fullname = fullname;
      updatedUser.biography = biography;
      updatedUser.profile_picture = profile_picture;
    },
    setUserPosts: (state, action) => {
      state.posts = action.payload;
    },
    addUserPosts: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { setUser, updateUser, setUserPosts, addUserPosts } =
  userSlice.actions;
export default userSlice.reducer;
