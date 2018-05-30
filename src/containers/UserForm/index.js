import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import UserForm from '../../components/UserForm';

const getUsers = state => state.users;

const newUserIdSelector = createSelector(
  getUsers,
  users => users[users.length - 1].id + 1,
);

const mapStateToProps = state => ({
  id: newUserIdSelector(state),
});

export default connect(mapStateToProps)(UserForm);
