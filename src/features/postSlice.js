import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    postUrl:
      "https://i.pinimg.com/736x/80/0e/9a/800e9a0d7eb0336ca302b3e4c78ad6e9.jpg",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      const { id } = action.payload
      const postedItem = state.find((post) => post.id === id)
      if(postedItem){
        return state.filter((post) => post.id !== id)
      }
    }
  },
});

export default postSlice.reducer;
export const { setPost, deletePost } = postSlice.actions;
