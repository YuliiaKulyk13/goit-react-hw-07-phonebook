import { createSlice } from '@reduxjs/toolkit';

import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filters: '',
  },
  reducer: {
    filterContacts(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(contact => {
          return contact.id !== action.payload.id;
        });
      })
      .addCase(deleteContact.rejected, handleRejected);
    // [fetchContacts.pending]: handlePending,
    // [fetchContacts.fulfilled](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   state.contacts.items = action.payload;
    // },
    // [fetchContacts.rejected]: handleRejected,

    // [addContact.pending]: handlePending,
    // [addContact.fulfilled](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   state.contacts.items.push(action.payload);
    // },
    // [addContact.rejected]: handleRejected,

    //   [deleteContact.pending]: handlePending,
    //   [deleteContact.fulfilled](state, action) {
    //     state.contacts.isLoading = false;
    //     state.contacts.error = null;
    //     state.contacts.items = state.contacts.items.filter(contact => {
    //       return contact.id !== action.payload.id;
    //     });
    //   },
    //   [deleteContact.rejected]: handleRejected,
    // },
  },
});

export const contactsReducers = contactSlice.reducer;
export const { filterContacts } = contactSlice.actions;
