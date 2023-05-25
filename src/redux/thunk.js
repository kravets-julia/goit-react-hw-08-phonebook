import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// GET @ /contacts
export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// POST @ /contacts
export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', data);
      toast.success('Contact added!');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        return name.toLowerCase() === normalizedName;
      });

      if (result) {
        toast.error(`${name} is already in contacts!`);
        return false;
      }
    },
  }
);

// DELETE @ /contacts/:id
export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      toast.success('Contact deleted!');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
