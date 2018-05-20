const deleteUserHandler = (state, payload) => {
    return state;
};

const editUserHandler = (state, payload) => {
    return state.map((item) => {
        if (item.id === payload.id){
            return Object.assign({}, item, payload);
        }
        else{
            return item;
        }
    })
};

const users = (state = [], action) => {
    const {type, payload} = action;
    switch(type) {
        case 'SET_USERS':
            return [...payload];
        case 'DELETE_USER':
            return deleteUserHandler(state, payload);
        case 'EDIT_USER':
            return editUserHandler(state, payload);
        default:
            return state;
    }
};

export default users;
