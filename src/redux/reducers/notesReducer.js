import * as actionTypes from '../actions/type'

export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SAVE_NOTE:
      return [...state, action.payload];
    case actionTypes.GETALL_NOTES:
      return action.payload;
    case actionTypes.DELETE_NOTE:
      return state.filter((note) => note._id !== action.payload);
    default:
      return [];
  }
};