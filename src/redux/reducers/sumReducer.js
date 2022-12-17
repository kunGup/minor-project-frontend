import * as actionTypes from '../actions/type'

export const sumReducer = (state={},action) => {
    switch(action.type){
        case actionTypes.SUMMARIZE_YT:
            return action.payload
        default:
            return {}
    }
}