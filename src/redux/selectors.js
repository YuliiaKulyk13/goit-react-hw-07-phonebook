export const selectContacts = state => state.contacts.contacts.items;
export const selectFilters = state => state.contacts.filters;
export const selectIsLoading = state => state.contacts.getIsLoading;
export const selectError = state => state.contacts.error;
