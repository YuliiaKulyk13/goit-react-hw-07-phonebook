import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import PhoneContacts from './PhoneContacts/PhoneContacts';
import Filter from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Layout } from './Layout/Layout.styled';
import { getError, getIsLoading } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <ContactsForm />
      <Title title={'Contacts'} />
      {isLoading && !error && <b>Request in prigress...</b>}
      <Title title={'Phonebook'} />
      <Filter />
      <PhoneContacts />
    </Layout>
  );
}
