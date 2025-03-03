import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const createPerson = (newPersonObject) => {
  return axios.post(baseUrl, newPersonObject).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
};

const updatePerson = (id, newPersonObject) => {
  return axios.put(`${baseUrl}/${id}`, newPersonObject).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export default { getAllPersons, createPerson, deletePerson, updatePerson };
