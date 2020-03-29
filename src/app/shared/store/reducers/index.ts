import * as fromUsers from './users.reducer'
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'

export interface UsersIndexState {
  users: fromUsers.UserState
}

export const reducers: ActionReducerMap<UsersIndexState> = {
  users: fromUsers.reducer
}

export const getCustomerState = createFeatureSelector<UsersIndexState>('customer');

export const getUserState = createSelector(getCustomerState, (state: UsersIndexState) => state.users);

export const getAllUsers = createSelector(getUserState, fromUsers.getUsers);
export const getUsersLoaded = createSelector(getUserState, fromUsers.getUsersLoaded);
export const getUsersLoading = createSelector(getUserState, fromUsers.getUsersLoading);