const initialState = {
  label: '',
  value: '',
};

const filter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_FILTER':
      const { label, value } = payload;
      switch (label) {
        case 'first name':
          return {
            label: 'firstName',
            value,
          };
        case 'last name':
          return {
            label: 'lastName',
            value,
          };
        case 'age':
          return {
            label: 'age',
            value,
          };
        default:
          return {
            label: '',
            value: '',
          };
      }
    default:
      return state;
  }
};

export default filter;
