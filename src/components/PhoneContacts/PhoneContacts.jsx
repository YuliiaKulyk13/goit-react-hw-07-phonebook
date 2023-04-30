import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContacts } from 'redux/contactSlice';
import {
  Contact,
  ContactItem,
  DeleteButton,
  List,
} from './PhoneContacts.styled';
import { getContacts, getFilters } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const PhoneContacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const NewFilteredContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {NewFilteredContactsList.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactItem>
            {name}: {number}
          </ContactItem>
          <DeleteButton onClick={() => dispatch(deleteContact({ id }))}>
            Delete
          </DeleteButton>
        </Contact>
      ))}
    </List>
  );
};
export default PhoneContacts;
