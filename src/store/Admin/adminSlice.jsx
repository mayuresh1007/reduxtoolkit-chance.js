import {createSlice ,nanoid} from"@reduxjs/toolkit";


const adminSlice = createSlice({
    name:'admin',
    initialState:[],
    reducers:{
        addAdmin(state,action){
            state.push(action.payload)
        },
        removeAdmin(state,action){
            state.splice(action.payload,1)
        },
    }
})

export const{addAdmin,removeAdmin} = adminSlice.actions;
export default adminSlice.reducer;