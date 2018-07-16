export const getAllUsers = () => {
  return {
    type: 'GELL_ALL_USERS',
  };
};

export const selectUser = user => {
  return {
    type: 'SELECT_USER',
    payload: user,
  };
};
