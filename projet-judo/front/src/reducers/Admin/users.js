import { FETCH_USER_SUCCESS } from '../../actions/Admin/users';

const initialState = {
    list: [],
};

const users = (state = initialState, action = {}) => {
  switch (action.type) {
     case FETCH_USER_SUCCESS:
     return {
         ...state,
         list: [...action.payload],
     }
    default:
      return state;
  }
};

export default users;