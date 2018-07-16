import { combineReducers } from 'redux';
import userReducer from './userReducer';
import selectedUserReducer from './selectedUserReducer';

const rootReducer = combineReducers({
  users: userReducer,
  selectedUser: selectedUserReducer,
});

export default rootReducer;
