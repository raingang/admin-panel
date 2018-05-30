const deleteUserHandler = (state, { id }) => state.filter(item => item.id !== id);

const editUserHandler = (state, payload) => state.map((item) => {
  if (item.id === payload.id) {
    return Object.assign({}, item, payload);
  }

  return item;
});

const addUserHandler = (state, payload) => state.concat(payload);

const users = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_USERS':
      return [...payload];
    case 'DELETE_USER':
      return deleteUserHandler(state, payload);
    case 'EDIT_USER':
      return editUserHandler(state, payload);
    case 'ADD_USER':
      return addUserHandler(state, payload);

    default:
      return state;
  }
};

export default users;
