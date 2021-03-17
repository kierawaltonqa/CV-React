import { Toast, ToastBody, ToastHeader } from "reactstrap";
import ModalTwo from "./ModalTwo";

const ProjectTwo = () => {
    return (
        <div className="col-md-4">
            <Toast>
                <ToastHeader>
                    <h4>Project Two: To Do List Web Application</h4>
                </ToastHeader>
                <ToastBody>
                    <p>
                        Using a three tier architecture, I created a full stack OOP-based To Do List web
                        application with basic CRUD functionality. The front end for this application was built
                        using HTML, CSS and Javascript. The back end, built using Spring Boot and written in Java,
                        constructs an API, which is used to act as a messenger between the layers; it allows for the
                        interaction, communication and access of data between/with external software components.
                        The data layer is a locally hosted relational database written in MySQL. The build for this
                        project was managed by Maven, and source code was continuously integrated through GitHub
                        using the feature-branch model. Testing for the back end was done using JUnit and Mockito;
                        unit tests were implemented for each class, and system integration tests were used to check
                        the interactions between integrated units of code. Further, browser-based automation tests for
                        the front end were conducted using Selenium. Sonarqube was used for the static analysis of the
                        code.

                    </p>

                    <ModalTwo />
                </ToastBody>
            </Toast>
        </div>
    )
}
export default ProjectTwo;