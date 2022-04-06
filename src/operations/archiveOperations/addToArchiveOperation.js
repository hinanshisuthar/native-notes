import axios from "axios";

const addToArchiveOperation = (note, encodedToken) => {
  return axios.post(
    `/api/notes/archives/${note._id}`,
    { note },
    { headers: { authorization: encodedToken } }
  );
};

export { addToArchiveOperation };
