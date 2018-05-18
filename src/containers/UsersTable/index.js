import { connect } from 'react-redux';

import UserTable from '../../components/UsersTable';
import { getUsers } from '../../actions';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
