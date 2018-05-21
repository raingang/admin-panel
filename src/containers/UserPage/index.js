import { connect } from 'react-redux';

import UserPage from '../../components/UserPage';
import { getUser, clearUser, handleDelete, handleEditUser } from "../../actions";

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = { getUser, clearUser, handleDelete, handleEditUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);