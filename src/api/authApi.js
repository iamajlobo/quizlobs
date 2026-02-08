import api from './axios';

export const register = (userData) => {
    return api.post('/register', userData);
}