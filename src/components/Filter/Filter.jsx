import React from 'react';
import { Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';
import { filterContacts } from 'redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleFilterChange = event =>
    dispatch(filterContacts(event.currentTarget.value));

  return (
    <Label>
      Filter by name
      <Input type="text" value={filter} onChange={handleFilterChange} />
    </Label>
  );
};

export default Filter;
