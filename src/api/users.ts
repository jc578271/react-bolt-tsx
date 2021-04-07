import axios from 'services/axios';
// import { LoginUser, LoginByGoogle, LoginByFacebook, CreateUser } from 'types';

export const getUser = (): Promise<any> => axios.get(`/user`);
