import axios from 'axios';

export const getAllUsers = () => {
  const request = axios.get('/api/users');

  return {
    type: 'GELL_ALL_USERS',
    payload: request,
  };
};

export const selectUser = user => {
  return {
    type: 'SELECT_USER',
    payload: user,
  };
};
