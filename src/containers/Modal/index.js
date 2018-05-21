import { connect } from 'react-redux';

import Modal from '../../components/Modal';
import { toggleModal, getUsers, handleAddUser } from '../../actions';

const mapDispatchToProps = { toggleModal, getUsers, handleAddUser };

export default connect(null, mapDispatchToProps)(Modal);
