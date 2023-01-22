import * as userRequest from '../data/api.js';

const endpoint = {
    'login': '/login',
    'register': '/users'
}

export async function login(email, password) {
    return userRequest.post(endpoint.login, { email, password });
}

export async function register(email, username, password) {
    return userRequest.post(endpoint.register, { email, username, password });
}