import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 4px;
  padding-left: 20px;
`;

export const ContactItem = styled.p`
  color: #3a3c3d;
`;
export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 20px;
`;

export const DeleteButton = styled.button`
  width: 85px;
  height: 30px;
  font-size: 12px;
  padding: 5px;
  border-radius: 8px;
  margin-right: 10px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px grey;
  }
`;
