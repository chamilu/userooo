const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'GELL_ALL_USERS':
      return action.payload ? action.payload.data : [];
      break;

    default:
      return state;
  }
};

export default userReducer;
