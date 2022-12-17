import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import { foldersReducer } from './reducers/foldersReducer'
import { sumReducer } from './reducers/sumReducer'
import { notesReducer } from './reducers/notesReducer'

const reducer = combineReducers({
  folders: foldersReducer,
  summary: sumReducer,
  notes: notesReducer,
});

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store