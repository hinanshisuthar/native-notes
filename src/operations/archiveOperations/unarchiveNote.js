import axios from "axios";

const unarchiveNote = (note, encodedToken) => {
  return axios.post(
    `/api/archives/restore/${note._id}`,
    { note },
    { headers: { authorization: encodedToken } }
  );
};

export { unarchiveNote };
