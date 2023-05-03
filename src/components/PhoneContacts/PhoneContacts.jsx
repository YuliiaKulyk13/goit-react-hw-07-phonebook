import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Contact,
  ContactItem,
  DeleteButton,
  List,
} from './PhoneContacts.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const PhoneContacts = () => {
  const dispatch = useDispatch();
  const NewFilteredContactsList = useSelector(selectVisibleContacts);

  return (
    <List>
      {NewFilteredContactsList.map(({ id, name, phone }) => (
        <Contact key={id}>
          <ContactItem>
            {name}: {phone}
          </ContactItem>
          <DeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteButton>
        </Contact>
      ))}
    </List>
  );
};
export default PhoneContacts;
