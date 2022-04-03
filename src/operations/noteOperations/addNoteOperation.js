import axios from "axios";

const addNoteOperation = (note, encodedToken) => {
  return axios.post(
    "/api/notes",
    { note },
    { headers: { authorization: encodedToken } }
  );
};

export {addNoteOperation};