import axios from "axios";
// const baseUrl = "http://localhost:3001/api/persons"; // Small adjustment to the base url for exercise for part 3.9
// const baseUrl = "/api/persons"; // Changing base url to relative for deployment in exercise 3.10
const baseUrl =
  "https://fullstack-open-exercises-part3-w00b.onrender.com/api/persons"; // New base url for deployment in Render for exercise 3.11 (testing locally)
const getAllPersons = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

// New method for connecting to the backend for part 3.9
const getPersonById = (id) => {
  return axios.get(`${baseUrl}/${id}`).then((response) => response.data);
};

const createPerson = (newPersonObject) => {
  return axios.post(baseUrl, newPersonObject).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

const updatePerson = (id, newPersonObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newPersonObject)
    .then((response) => response.data);
};

export default { getAllPersons, createPerson, deletePerson, updatePerson };
