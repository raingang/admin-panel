import React, { Component } from 'react';

import '../../styles/Modal/index.css';

class Modal extends Component {
    onClose = () => {
        this.props.toggleModal();
    };
    renderForm(){
        return <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Firs Name</label>
                    <input type="text" className="form-control"  placeholder="John" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Last Name</label>
                    <input type="text" className="form-control"  placeholder="Doe" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Age</label>
                <input min = '0' max = '100' type="number" className="form-control" placeholder="18" />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2"
                       placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    }
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
                            { this.renderForm() }
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Modal;