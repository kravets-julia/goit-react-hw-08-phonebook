import axios from 'axios';

axios.defaults.baseURL =
  'https://645912448badff578e034745.mockapi.io/contacts/contacts';

export async function getContacts() {
  const { data } = await axios.get('/');
  return data;
}

export async function addContacts({ name, phone }) {
  const response = await axios.post(`/`, { name, phone });
  return response.data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`/${id}`);
  return data;
}
