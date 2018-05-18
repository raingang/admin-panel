export const getUsers = () => {
  console.log('getUsers');
  return {
    type: 'GET_USERS',
  }
};

export const setUsers = (payload) => {
  console.log('setUsers');
  return {
    type: 'SET_USERS',
      payload,
  }
};
