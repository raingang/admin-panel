import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserForm from '../../containers/UserForm';
import '../../styles/Modal/index.css';

class Modal extends Component {
  onClose = () => {
      this.props.toggleModal();
  };
    render(){
      return(
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add new user</h5>
                <button onClick = { this.onClose }type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <UserForm handleClose = {this.props.toggleModal} handleAction = {this.props.handleAddUser}>Add</UserForm>
              </div>
            </div>
          </div>
        </div>
      )
    };
}

Modal.propTypes = {
  toggleModal: PropTypes.func,
	getUsers: PropTypes.func,
	handleAddUser: PropTypes.func,
}

export default Modal;
