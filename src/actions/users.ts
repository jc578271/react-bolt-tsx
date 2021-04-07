import { Action } from 'types';

export const Types = {
  GET_USER_SUCCESS: 'user/get-user-success',
  GET_USER: 'user/get-user',
  GET_USER_ERROR: 'user/get-user-error',
};

export const getUser = (): Action => ({
  type: Types.GET_USER,
});

export const getUserSuccess = (user: any): Action => ({
  type: Types.GET_USER_SUCCESS,
  payload: {
    ...user,
  },
});

export const getUserError = (): Action => ({
  type: Types.GET_USER_ERROR,
});
