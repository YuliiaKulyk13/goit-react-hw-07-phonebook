import React from 'react';
import PhoneContacts from './PhoneContacts/PhoneContacts';
import Filter from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Layout } from './Layout/Layout.styled';

export function App() {
  return (
    <Layout>
      <Title title={'Phonebook'} />
      <ContactsForm />
      <Title title={'Contacts'} />
      <Filter />
      <PhoneContacts />
    </Layout>
  );
}
