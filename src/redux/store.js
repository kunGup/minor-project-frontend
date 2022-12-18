import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import { foldersReducer } from './reducers/foldersReducer'
import { sumReducer } from './reducers/sumReducer'
import { notesReducer } from './reducers/notesReducer'

const runReducer = (state=false,action) => {
  switch(action.type){
    case "UPDATE_RUN":
      return !state
    default: return state
  }
}

const reducer = combineReducers({
  folders: foldersReducer,
  summary: sumReducer,
  notes: notesReducer,
  run: runReducer
});

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store