import { connect } from 'react-redux';

import App from '../../components/App';

const mapStateToProps = (state) => ({
	logged: state.logged,
});

export default connect(mapStateToProps)(App);