import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      let userIndex = state.indexOf(action.payload);
      state.splice(userIndex, 1);
      // console.log(state);
    },
    deleteAllUser(state, action) {
      // state.splice(0,state.length) 
      return [];
    },
  },
});

// console.log(userSlice.actions)
export default userSlice.reducer;

export const { addUser, removeUser, deleteAllUser } = userSlice.actions;

//  Gpt enhanced code
// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "User",
//   initialState: [],
//   reducers: {
//     addUser: (state, action) => {
//       state.push(action.payload);
//     },
//     removeUser: (state, action) => {
//       const userIndex = state.findIndex((user) => user.id === action.payload.id);
//       if (userIndex !== -1) {
//         state.splice(userIndex, 1);
//       }
//     },
//     deleteAllUsers: (state) => {
//       state.splice(0, state.length);
//     },
//   },
// });

// export default userSlice.reducer;

// export const { addUser, removeUser, deleteAllUsers } = userSlice.actions;
