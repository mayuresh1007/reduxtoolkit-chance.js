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
      //  wrong wway asigninhg the value =[]// return state =[];
      // state.splice(0,state.length) // both valid
      return [];
    },
  },
  // extrareducer kadhi use hotat tr same action vegveglya slice madhe same code ahe for eg clearallusers(state,action){return []}
  // tyaveli apan extraReducer use krun action perform kru shakto for all slices
  // hya file madhe dohni same ch ahe so te reducer run krel andi extraReducer ignore krel
  // atta deleteAllUser me admin chya component madhe kinva admin cha action mhanun vaparu shakto with use of despatch(deleteAllUser())
  //  userSlice.actions.deleteAllUser is for dependent on this userSlice idf method is not in slice then its wont work for that use can use createAtions() in rtk link:-https://www.youtube.com/watch?v=h6SgvxnizEE&list=PLwGdqUZWnOp2nz2T6SfWX9t6D6SYn3XlN&index=11
  extraReducers(builder){
    builder.addCase(userSlice.actions.deleteAllUser,(state,action)=>{
      return [];
    })
  }
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
