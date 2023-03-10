import axios from "axios";
import { isAuthenticated } from "../auth";
const API_URL = "https://ytsummarizer-backend.onrender.com/api";
// const API_URL = "http://localhost:8000/api";

export const getAllFolders = async (token) => {
  try {
    const res = await axios.get(`${API_URL}/folders`, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log("err after calling getAllFolders: ", err);
  }
};

export const getAllNotes = async (token) => {
  try {
    const res = await axios.get(`${API_URL}/notes`, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log("err after calling getAllNotes: ", err);
  }
};

export const addNoteToFolder = async (folderId, noteId, token) => {
  try {
    const res = await fetch(`${API_URL}/folders`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        // Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        folderId,
        noteId,
      }),
    });
    return;
  } catch (err) {
    console.log("err after calling addNoteToFolder: ", err);
  }
};

export const editFolderTitle = async ({folderId,title}, token) => {
  try {
    const res = await axios.put(
      `${API_URL}/folders`,
      {
        folderId,title
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return;
  } catch (err) {
    console.log("err after calling editFolder: ", err);
  }
};

export const deleteFolder = async (folder, token) => {
  try {
    console.log(folder);
    const res = await axios.delete(`${API_URL}/folders/${folder._id}`, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return;
  } catch (err) {
    console.log("err after calling deleteFolder: ", err);
  }
};

export const addNewFolder = async (title, token) => {
  try {
    const res = await axios.post(
      `${API_URL}/folders`,
      {
        title,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return;
  } catch (err) {
    console.log("err after calling addNewFolder: ", err);
  }
};

export const editNote = async (note, token) => {
  try {
    const res = await axios.put(`${API_URL}/notes/${note._id}`, note, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return;
  } catch (err) {
    console.log("err after calling editNote: ", err);
  }
};



export const deleteNote = async (note, token) => {
  try {
    console.log(note);
    const res = await axios.delete(`${API_URL}/notes/${note._id}`, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return;
  } catch (err) {
    console.log("err after calling deleteNote: ", err);
  }
};

export const saveNote = async (note, token) => {
  try {
    const res = await axios.post(
      `${API_URL}/notes`,
      { ...note },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return;
  } catch (err) {
    console.log("err after calling saveNote: ", err);
  }
};

export const summarizeYt = async (url) => {
  try {
    const res = await axios.post(`${API_URL}/ytsum`, {
      url,
    });
    return res.data;
  } catch (err) {
    console.log("err after calling summarizeYt: ", err);
  }
};
