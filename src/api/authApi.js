import api from './axios';

export const register = (userData) => {
    return api.post('/register', userData);
}

export const loginUser =  (credentials) => {
    return api.post('/login', credentials);
}