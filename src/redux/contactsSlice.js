import { createSlice } from '@reduxjs/toolkit';
import { fetchAddContact, fetchAllContacts, fetchDeleteContact } from './thunk';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(fetchDeleteContact.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
