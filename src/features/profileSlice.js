import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "_the_.santhosh",
  name: "Santhsoh Prabhakaran",
  bio: "• Life is not a problem to be solved but a reality to be experienced 🌼🍂",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ--rJ7Xa-1PtEpg5FjvgqjKda1FF9lUKrvg&usqp=CAU",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editUser: (state, action) => {
      if (action.payload.image === null) {
        action.payload.image = state.image;
      }
      if (action.payload.userName === "") {
        action.payload.userName = state.userName;
      }
      if (action.payload.name === "") {
        action.payload.name = state.name;
      }
      if (action.payload.bio === "") {
        action.payload.bio = state.bio;
      }

      state.userName = action.payload.userName;
      state.name = action.payload.name;
      state.bio = action.payload.bio;
      state.image = action.payload.image;
    },
  },
});

export const { editUser } = profileSlice.actions;
export default profileSlice.reducer;
