import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
});
