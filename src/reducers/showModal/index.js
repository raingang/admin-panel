import { TOGGLE_MODAL } from '../../actionTypes';

const showModal = (state = false, { type }) => {
  switch (type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

export default showModal;
