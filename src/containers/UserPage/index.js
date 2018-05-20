import { connect } from 'react-redux';

import UserPage from '../../components/UserPage';
import { getUser, clearUser } from "../../actions";

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = { getUser, clearUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);