import { Toast, ToastBody, ToastHeader } from "reactstrap";
import ModalOne from "./ModalOne";

const ProjectOne = () => {

    return (
        <div className="col-md-4">

            <Toast style={{ width: "800px" }}>
                <ToastHeader>
                    <h4>Project One: Inventory Management System</h4>
                </ToastHeader>
                <ToastBody style={{ height: "auto" }}>
                    <p>By connecting to GCP via a JDBC connection to host a MySQL database, this project created a
                    system with CRUD (create, read, update and delete) functionality for manipulation of data
                    on the cloud. This project was developed and implemented using Maven as a build tool and Java
                    source code to run and execute the processes, and JUnit and Mockito were used to test the CRUD
                    functionality. Git was used throughout the project for the continuous integration of code,
                    whereby the feature-branch model on GitHub was utilised to implement this process.
                    Furthermore, the project utilised agile processes so as to allow for a flexible and adaptive
                    workflow. The resulting product of this project was a working inventory management system which
                    tracks and manipulates customer information, order details and item data - all of which users
                    can interact with via a command line.
                </p>
                    <ModalOne />
                </ToastBody>
            </Toast>

        </div>
    )
}
export default ProjectOne;