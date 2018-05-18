const users = (state = [], action) => {
  const {type, payload} = action;

  switch(type) {
    case 'SET_USERS':
      return [...payload];
    default:
      return state;
  }
};

export default users;
