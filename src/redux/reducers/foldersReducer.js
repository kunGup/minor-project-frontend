import * as actionTypes from '../actions/type'

export const foldersReducer = (state=[],action)=>{
    switch(action.type){
        case actionTypes.GETALL_FOLDERS:
            return action.payload;
        case actionTypes.ADDNEW_FOLDER:
            return [...state,action.payload]
        case actionTypes.UPDATE_FOLDER:
            return [...state.filter(folder=>folder._id!==action.payload._id),action.payload]
        case actionTypes.DELETE_FOLDER:
            return state.filter(folder=>folder._id!==action.payload)
        default:
            return []
    }
}