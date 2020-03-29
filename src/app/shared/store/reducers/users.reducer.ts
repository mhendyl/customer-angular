import { usersDataState } from '../actions/users.action';
import * as fromUsers from '../actions/users.action';

export interface UserState {
  data: usersDataState[],
  loaded: boolean,
  loading: boolean
}
export const initialState: UserState = {
  data: [],
  loaded: false,
  loading: false
}

export function reducer(state = initialState, action: fromUsers.UsersAction): UserState {
  switch (action.type) {
    case fromUsers.LOAD_USERS: {
        return {
          ...state,
          loading: true
        }
      }
      break;
    case fromUsers.LOAD_USERS_SUCCESS: {
      console.log('acton', action.payload);
      const data = action.payload;
      
        return {
          ...state,
          loaded: true,
          loading: false,
          data
        }
      }
      break;
  
    default:{
        return {
          ...state,
          loaded: false,
          loading: false
        }
      }
      break;
  }
  return state;
}

export const getUsersLoading = (state: UserState) => state.loading;
export const getUsersLoaded = (state: UserState) => state.loaded;
export const getUsers = (state: UserState) => state.data;