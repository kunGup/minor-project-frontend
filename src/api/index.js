import axios from 'axios'
const BASE_URL = "http://localhost:8000";

export const getAllFolders = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/folders`);
    return res.data
  } catch (err) {
    console.log("err after calling getAllFolders: ", err);
  }
};

export const getAllNotes = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/notes`);
    return res.data
  } catch (err) {
    console.log("err after calling getAllNotes: ", err);
  }
};

export const addNoteToFolder = async (folderId, noteId) => {
  try {
    const res = await axios.put(`${BASE_URL}/api/folders`, {
      folderId,
      noteId,
    });
    return;
  } catch (err) {
    console.log("err after calling addNoteToFolder: ", err);
  }
};

export const deleteFolder = async (folder) => {
  try {
    console.log(folder);
    const res = await axios.delete(`${BASE_URL}/api/folders/${folder._id}`);
    return;
  } catch (err) {
    console.log("err after calling deleteFolder: ", err);
  }
};

export const addNewFolder = async (title) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/folders`, {
      title,
    });
    return;
  } catch (err) {
    console.log("err after calling addNewFolder: ", err);
  }
};

export const deleteNote = async (note) => {
  try {
    console.log(note);
    const res = await axios.delete(`${BASE_URL}/api/notes/${note._id}`);
    return;
  } catch (err) {
    console.log("err after calling deleteNote: ", err);
  }
};
