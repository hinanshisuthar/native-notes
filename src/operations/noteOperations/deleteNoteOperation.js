import axios from "axios";

const moveToTrash = (notes, encodedToken) => {
  return axios.delete(`/api/notes/${notes._id}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export { moveToTrash };
