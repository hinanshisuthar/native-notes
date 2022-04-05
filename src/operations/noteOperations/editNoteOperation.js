import axios from "axios";

const editNoteOperation = (note, encodedToken) => {
  return axios.post(
    `/api/notes/${note._id}`,
    { note },
    { headers: { authorization: encodedToken } }
  );
};

export { editNoteOperation };
