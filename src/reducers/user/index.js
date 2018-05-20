const users = (state = {}, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'SET_USER':
            return { ...payload };
        case 'CLEAR_USER':
            return {};
        default:
            return state;
    }
};

export default users;
