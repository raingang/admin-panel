import { connect } from 'react-redux';

import AuthForm from '../../components/AuthForm';
import { handleLogIn } from '../../actions/'

const mapDispatchToProps = { handleLogIn };

export default connect(null, mapDispatchToProps)(AuthForm);