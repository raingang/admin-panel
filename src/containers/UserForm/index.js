import { connect } from 'react-redux';

import UserForm from '../../components/UserForm';

const mapStateToProps = (state) => ({id: state.users[state.users.length - 1].id + 1});

export default connect(mapStateToProps)(UserForm);
