import { useState } from "react"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalTwo = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <button onClick={toggle} className="btn btn-outline-dark">Technologies</button>
            <Modal isOpen={modal}>
                <ModalHeader id="modal-header">
                    <h5>Technologies & Tools Used:</h5>
                </ModalHeader>
                <ModalBody>
                    <center>
                        <p>Programming Languages: <strong>Java, JavaScript, HTML, CSS</strong></p>
                        <hr />
                        <p>Database Technologies: <strong>MySQL</strong></p>
                        <hr />
                        <p>Testing Technologies: <strong>JUnit, Mockito, Selenium</strong></p>
                        <hr />
                        <p>IDEs: <strong>Spring ToolSuite, Visual Studio Code</strong></p>
                        <hr />
                        <p>Build Tool: <strong>Maven</strong></p>
                    </center>
                </ModalBody>
                <ModalFooter id="modal-footer">
                    <button onClick={toggle} className="btn btn-outline-danger">Close</button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default ModalTwo;