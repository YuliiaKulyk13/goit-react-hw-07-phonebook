import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilters = state => state.contacts.filters;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filters.toLowerCase());
    });
  }
);
