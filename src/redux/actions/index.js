import * as actionTypes from './type'
import axios from 'axios'
const BASE_URL='http://localhost:8000'

export const getAllFolders = ()=>async(dispatch)=>{
    try{
        const res = await axios.get(`${BASE_URL}/api/folders`)
        dispatch({type:actionTypes.GETALL_FOLDERS,payload:res.data})
    }catch(err){
        console.log('err after calling getAllFolders: ',err);
    }
}

export const addNewFolder = (title)=>async(dispatch)=>{
    try{
        const res = await axios.post(`${BASE_URL}/api/folders`,{
            title
        })
        dispatch({type:actionTypes.ADDNEW_FOLDER,payload:res.data})
    }catch(err){
        console.log("err after calling addNewFolder: ", err);
    }
}

export const deleteFolder = (folder)=>async(dispatch)=>{
    try{
        const res = await axios.delete(`${BASE_URL}/api/folders`,{
            id:folder._id
        })
        dispatch({type:actionTypes.DELETE_FOLDER,payload:folder._id})
    }catch(err){
        console.log("err after calling deleteFolder: ", err);
    }
}

export const summarizeYt = (url)=>async(dispatch)=>{
    try{
        const res = await axios.post(`${BASE_URL}/api/ytsum`,{
            url
        })
        dispatch({type:actionTypes.SUMMARIZE_YT,payload:res.data})
    }catch(err){
        console.log("err after calling summarizeYt: ", err);
    }
}

export const saveNote = (data)=>async(dispatch)=>{
    try{
        const res = await axios.post(`${BASE_URL}/api/notes`,data)
        dispatch({type:actionTypes.SAVE_NOTE,payload:res.data})
    }catch(err){
        console.log("err after calling saveNote: ", err);
    }
}

export const getAllNotes = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/notes`);
    dispatch({ type: actionTypes.GETALL_NOTES, payload: res.data });
  } catch (err) {
    console.log("err after calling getAllNotes: ", err);
  }
};

export const addNoteToFolder = (folderId,noteId) => async (dispatch) => {
  try {
    const res = await axios.put(`${BASE_URL}/api/folders`,{
        folderId,noteId
    });
    dispatch({ type: actionTypes.UPDATE_FOLDER, payload: res.data });
  } catch (err) {
    console.log("err after calling addNoteToFolder: ", err);
  }
};

// export const updateRun = () => {
//     dispatch({type: actionTypes.UPDATE_RUN})
// }