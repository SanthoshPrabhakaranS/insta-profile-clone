import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    postUrl:
      "https://expertphotography.b-cdn.net/wp-content/uploads/2020/06/find-models-12.jpg",
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
