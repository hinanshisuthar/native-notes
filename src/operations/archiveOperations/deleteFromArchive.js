import axios from "axios";

const deleteFromArchive = async (note, encodedToken) => {
  return await axios.delete(
    `/api/archives/delete/${note._id}`,
    { headers: { authorization: encodedToken } }
  );
};

export { deleteFromArchive };
