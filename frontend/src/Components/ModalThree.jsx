import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalThree = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <button onClick={toggle} className="btn btn-outline-dark">Technologies</button>
            <Modal isOpen={modal}>
                <ModalHeader id="modal-header">
                    <h5>Technologies & Tools</h5>
                </ModalHeader>
                <ModalBody>
                    <center>
                        <p>Programming Languages: <strong>JavaScript - MERN stack</strong></p>
                        <hr />
                        <p>Database Technologies: <strong>MongoDB</strong></p>
                        <hr />
                        <p>Testing Technologies: <strong>Mocha, Chai, Jest</strong></p>
                        <hr />
                        <p>IDEs: <strong>Visual Studio Code</strong></p>
                    </center>
                </ModalBody>
                <ModalFooter id="modal-footer">
                    <button onClick={toggle} className="btn btn-outline-danger">Close</button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default ModalThree;