import Intro from "./Intro";
import ProjectOne from "./ProjectOne";
import ProjectThree from "./ProjectThree";
import ProjectTwo from "./ProjectTwo";
import Skills from "./Skills";
import './CV.css';
import GitHub from "./GitHub";

const CV = () => {

    return (
        <div className="container">
            <br />
            <h2>Kiera Walton</h2>
            <hr />
            <Intro />

            <Skills />
            <GitHub />
            <hr />
            <h4>Projects</h4>
            <hr />
            <div className="row">
                <ProjectOne />
                <ProjectTwo />
                <ProjectThree />
            </div>
            <hr />
        </div>
    )
}
export default CV;