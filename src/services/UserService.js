import axios from "axios";
const API_URL = "http://localhost:5000/users";
let error = "";

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
};
// export const getUserById = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
//   } catch (err) {
//     error = err;
//   }
// };

export const createUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
};

// export const updateUser = async (id, user) => {
//   try {
//     const response = await axios.put(`${API_URL}/${id}`, user);
//     return response.data;
//   } catch (err) {
//     error = err;
//   }
// };

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
};
