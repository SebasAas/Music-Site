import {
  FETCH_CURRENT_USER,
  USER_DESCRIPTION,
} from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  currentUser: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:

      const { id, fullname, username, email, accessToken } = action.payload.user;

      return {
        ...state,
        currentUser: { id, fullname, username, email, accessToken },
        isLoggedIn: true
      };

    case USER_DESCRIPTION:
      return {
        ...state
      }

    default:
      return state
  }
}