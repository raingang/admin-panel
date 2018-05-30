import ApiCreator from './api';

const api = ApiCreator('localhost:3001');

export const getUsers = filter => api.get(`users/${filter ? (`?${filter.label}=${filter.value}`) : ''}`);

export const getUser = id => api.get(`users/${id}`);

export const postUser = user => api.post('users', {
  body: JSON.stringify(user),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const deleteUser = id => api.delete(`users/${id}`);

export const updateUser = user => api.put(`users/${user.id}`, {
  body: JSON.stringify(user),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getAuth = data => api.get(`auth/${`?email=${data.email}&_password=${data.password}`}`);
