import { Toast, ToastBody, ToastHeader } from "reactstrap"
import ModalThree from "./ModalThree"

const ProjectThree = () => {
    return (
        <div className="col-md-4">
            <Toast>
                <ToastHeader>
                    <h4>Project Three: QA Cinemas</h4>
                </ToastHeader>
                <ToastBody>
                    <p>
                        Working in a group, the MERN stack was used to develop a full stack web application
                        in the form of a cinema website. I was scrum master for this project, meaning I was in
                        charge of the daily stand-ups and held responsibility for the successful completion of
                        weekly sprints, as well as the adherence to agile principles and values by the team
                        throughout the project. Following agile processes allowed for our team to maintain a
                        flexible and productive workflow. I worked predominantly on front end development;
                        utilising React to create an attractive and functional interactive user interface for
                        the website. One example of this is my implementation of a discussion board feature on
                        the website - this page has full CRUD functionality and is visually attractive.
                        I developed the page using axios data requests to interact with an API created in
                        Express and retrieve data stored in MongoDb. Back end testing for this project was
                        done using Mocha and Chai, and the front end was tested using Snapshot tests with Jest.
                        As well as functionality, emphasis was placed on design and styling throughout the project,
                        and the final product was a fully functioning, informative and aesthetically appealing website.
                    </p>
                    <ModalThree />

                </ToastBody>
            </Toast>
        </div>
    )
}
export default ProjectThree;