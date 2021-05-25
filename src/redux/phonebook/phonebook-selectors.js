const getLoading = state => state.phonebook.loading;
const getContacts = state => state.phonebook.items;
const getPhonebook = state => state.phonebook;
const getFilter = state => state.phonebook.filter;

const getFilteredContacts = state => {
  const items = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export {
  getLoading,
  getContacts,
  getPhonebook,
  getFilter,
  getFilteredContacts,
};
