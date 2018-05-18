import ApiCreator from './api';

const api = ApiCreator('localhost:3000');

export const getUsers = () => api.get('users');

export const postUsers = (todo) => api.post('users', {
    body: JSON.stringify(todo),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
});

export const deleteUser = (id) => api.delete(`users/${id}`);

export const updateUser = (todo) => api.put(`users/${todo.id}`, {
    body: JSON.stringify(todo),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
});
