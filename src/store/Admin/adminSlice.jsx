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
        deleteAll(state,action){
            return[];
        }
    }
})

export const{addAdmin,removeAdmin,deleteAll} = adminSlice.actions;
export default adminSlice.reducer;