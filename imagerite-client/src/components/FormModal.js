import React from 'react';
import Modal from 'react-modal';
import AddSquawkForm from "../forms/AddSquawkForm.js";

const FormModal = (props) => {
    return (
        <Modal isOpen={props.addModalOpen} onRequestClose={() => props.onRequestClose()}>
            <div>
                <button onClick={() => props.onRequestClose()}>X</button>
                <AddSquawkForm onSubmit={() => {
                    console.log(props);
                    props.onRequestClose();
                }

                }/>
            </div>
        </Modal>
    )
}

// function onRequestClose (props) {
//
//     props.onRequestClose = false;
//
// }

export default FormModal;
