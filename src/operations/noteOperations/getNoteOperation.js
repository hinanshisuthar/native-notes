import axios from "axios";

const getNoteOperation = (encodedToken) => {
  return axios.get(
    "/api/notes",
    { headers: { authorization: encodedToken } }
  );
};

export { getNoteOperation };
