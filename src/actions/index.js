export const getUsers = () => ({
    type: 'GET_USERS',
});

export const setUsers = (payload) => ({
    type: 'SET_USERS',
    payload,
});

export const deleteUser = (id) => {
    return ({
        type: 'DELETE_USER',
        payload: {
            id,
        }
    });
};

export const handleDelete = (id) => {
    return ({
        type: 'HANDLE_DELETE',
        payload: {
            id,
        }
    });
};

export const editUser = (payload) => ({
    type: 'EDIT_USER',
    payload,
});

export const getUser = id => {
    return ({
        type: 'GET_USER',
        payload: {id}
    });
};

export const setUser = (payload) => ({
    type: 'SET_USER',
    payload,
});

export const clearUser = (payload) => ({
    type: 'CLEAR_USER',
    payload,
});

export const toggleModal = () => ({
    type: 'TOGGLE_MODAL',
});