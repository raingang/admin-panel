import { connect } from 'react-redux';

import Modal from '../../components/Modal'
import { toggleModal } from '../../actions';

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal()),
});

export default connect(null, mapDispatchToProps)(Modal);