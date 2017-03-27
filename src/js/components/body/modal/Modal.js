import React, { Component } from 'react';

import Carousel from '../carousel/Carousel.js'

import '../../../../css/modal.css';

/* modal */
class Modal extends Component {

    render() {
        return(
            
            /* modal */
            <div className="mask" data-status={this.props.status}>
                <div className="modal">

                    {/* close button */}
                    <div className="modal-row">
                        <div className="closeModal" onClick={this.props.closeModal}>
                            <i className="glyphicon glyphicon-remove icon" />
                        </div> 
                    </div> {/* end modal row */}

                    <div className="modal-row">

                        {/* carousel */}
                        <div className="modal-main-content">
                            <Carousel imgs={this.props.imgs} />
                        </div>

                    </div> {/* end modal row */}
                </div> {/* end modal */}
            </div> /* end mask */
        );
    }
}


export default Modal;
