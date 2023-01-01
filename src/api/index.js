import axios from "axios";
import { isAuthenticated } from "../auth";
const BASE_URL = "http://localhost:8000";

export const getAllFolders = async (token) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/folders`, {
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
    const res = await axios.get(`${BASE_URL}/api/notes`, {
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
    const res = await fetch(`${BASE_URL}/api/folders`, {
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
      `${BASE_URL}/api/folders`,
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
    const res = await axios.delete(`${BASE_URL}/api/folders/${folder._id}`, {
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
      `${BASE_URL}/api/folders`,
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
    const res = await axios.put(`${BASE_URL}/api/notes/${note._id}`, note, {
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
    const res = await axios.delete(`${BASE_URL}/api/notes/${note._id}`, {
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
      `${BASE_URL}/api/notes`,
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
    const res = await axios.post(`${BASE_URL}/api/ytsum`, {
      url,
    });
    return res.data;
  } catch (err) {
    console.log("err after calling summarizeYt: ", err);
  }
};
