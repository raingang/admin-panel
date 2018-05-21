import { connect } from 'react-redux';

import UserTable from '../../components/UsersTable';
import { getUsers, toggleModal } from '../../actions';

const mapStateToProps = state => ({
  users: state.users,
  showModal: state.showModal,
});

const mapDispatchToProps = { getUsers, toggleModal }

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
