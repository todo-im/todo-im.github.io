import * as userRequest from '../data/api.js';
import { removeUserData, setUserData } from '../utils.js';

const endpoint = {
    'login': '/login',
    'register': '/users',
    'logout': '/logout'
}

export async function login(email, password) {
    const response = await userRequest.post(endpoint.login, { email, password });
    setUserData(response);
}

export async function register(email, username, password) {
    const response = await userRequest.post(endpoint.register, { email, username, password });
    setUserData(response);
}

export async function logout() {
    await userRequest.post(endpoint.logout, {});
    removeUserData();
}