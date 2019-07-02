import React from 'react';

import Modal from 'react-modal';

import DemoSlider from '../sliders/DemoSlider.js';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//  Modal.setAppElement('#root')

export  default class DemoPopup extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div >
                <button onClick={this.openModal}>Demo项目简介</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"

                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>简介</h2>
                    <button onClick={this.closeModal}>X</button>
                    <div className="PopupParent">
                        <DemoSlider />

                    </div>
                    <br/>

                    <p>简介</p>

                </Modal>
            </div>
        );
    }
}