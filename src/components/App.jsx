import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import PhoneContacts from './PhoneContacts/PhoneContacts';
import Filter from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactForm } from './ContactsForm/ContactsForm';
import { Layout } from './Layout/Layout.styled';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Notification } from './Notification/Notification';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Title title={'Phonebook'} />
      <ContactForm />
      <Title title={'Contacts'} />
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      <Notification notification={'There are no contacts.'} />
      <PhoneContacts />
    </Layout>
  );
}
