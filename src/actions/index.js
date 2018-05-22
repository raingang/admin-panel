import {
	GET_USERS,
	SET_USERS,
	DELETE_USER,
	HANDLE_DELETE,
	EDIT_USER,
	HANDLE_EDIT_USER,
	GET_USER,
	SET_USER,
	CLEAR_USER,
	TOGGLE_MODAL,
	ADD_USER,
	HANDLE_ADD_USER,
	SET_FILTER,
	HANDLE_LOG_IN,
} from '../actionTypes';

export const getUsers = (payload) => ({
    type: GET_USERS,
	payload,
});

export const setUsers = (payload) => ({
    type: SET_USERS,
    payload,
});

export const deleteUser = (id) => {
    return ({
        type: DELETE_USER,
        payload: {
            id,
        }
    });
};

export const handleDelete = (id) => {
    return ({
        type: HANDLE_DELETE,
        payload: {
            id,
        }
    });
};

export const editUser = (payload) => ({
    type: EDIT_USER,
    payload,
});

export const handleEditUser = (payload) => ({
	type: HANDLE_EDIT_USER,
	payload,
});

export const getUser = id => {
    return ({
        type: GET_USER,
        payload: {id}
    });
};

export const setUser = (payload) => ({
    type: SET_USER,
    payload,
});

export const clearUser = (payload) => ({
    type: CLEAR_USER,
    payload,
});

export const toggleModal = () => ({
    type: TOGGLE_MODAL,
});

export const addUser = (payload) => ({
    type: ADD_USER,
    payload,
});

export const handleAddUser = (payload) => ({
    type: HANDLE_ADD_USER,
    payload,
});

export const setFilter = (payload) => ({
	type: SET_FILTER,
	payload
});

export const handleLogIn = (payload) => ({
	type: HANDLE_LOG_IN,
	payload,
});

