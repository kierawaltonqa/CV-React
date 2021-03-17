import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalOne = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <button className="btn btn-outline-dark" onClick={toggle}>Technologies</button>
            <Modal isOpen={modal}>
                <ModalHeader id="modal-header">
                    <h5>Technologies & Tools Used:</h5>
                </ModalHeader>
                <ModalBody>
                    <center>
                        <p>Programming Languages: <strong>Java</strong></p>
                        <hr />
                        <p>Database Technologies: <strong>MySQL</strong></p>
                        <hr />
                        <p>Testing Technologies: <strong>JUnit, Mockito</strong></p>
                        <hr />
                        <p>IDE: <strong>Eclipse</strong></p>
                        <hr />
                        <p>Build Tool: <strong>Maven</strong></p>
                    </center>
                </ModalBody>
                <ModalFooter id="modal-footer">
                    <button onClick={toggle} className="btn btn-danger">Close</button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default ModalOne;