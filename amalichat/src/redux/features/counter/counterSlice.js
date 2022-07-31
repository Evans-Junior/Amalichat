// import {createSlice} from '@reduxjs/toolkit'

import { Switch } from "@material-ui/core"

// const initialState ={
//     count:''
// }

// export const counterSlice = createSlice({
//     name:'counter',
//     initialState,
//     reducers:{
//         // increment:(state)=>{
//         //     state.count+=1;
//         // },
//         // decrement:(state)=>{
//         //     state.count -=1;
//         // },
//         // reset:(state)=>{
//         //     state.count=0;
//         // },
//         takeData:(state='',action)=>{
//             switch (action.type){
//                 case 'add':
//                     return state + action.payload
//                 // state.count= action.payload
//                 default: 
//                     return state
//             }
            
//         },
//     }
// })

// // export const {increment,decrement, reset, takeData}=counterSlice.actions;
// // export default counterSlice.reducer;

 const reducer=(state=[],action)=>{
    switch(action.type){
        case "add":
            return [action.payload]
        default:
            return state
    }
}
export default reducer;