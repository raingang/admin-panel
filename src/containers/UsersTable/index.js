import { connect } from 'react-redux';

import UserTable from '../../components/UsersTable';
import { getUsers, toggleModal, setFilter } from '../../actions';

const mapStateToProps = state => ({
    users: state.users,
    showModal: state.showModal,
	filter: state.filter,
});

const mapDispatchToProps = { getUsers, toggleModal, setFilter };

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
