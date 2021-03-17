import Table from 'react-bootstrap/Table';

const Skills = () => {

    return (
        <>
            <h4>Technical Skills and Competencies</h4>
            <Table id="table" st striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>Technology Domain</th>
                        <th>Technologies and Tools</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programming Languages</td>
                        <td>Java, JavaScript, Python, CSS, HTML</td>
                    </tr>
                    <tr>
                        <td>IDE's</td>
                        <td>IntelliJ, Eclipse, Visual Studio Code, Spring ToolSuite</td>
                    </tr>
                    <tr>
                        <td>Operating Systems</td>
                        <td>Windows</td>
                    </tr>
                    <tr>
                        <td>Cloud Platforms</td>
                        <td>GCP, AWS</td>
                    </tr>
                    <tr>
                        <td>DevOps Technologies</td>
                        <td>Jenkins, Git, Selenium, Node</td>
                    </tr>
                    <tr>
                        <td>Database Technologies</td>
                        <td>MySQL, MongoDb, H2, Postman</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>Agile Scrum, JUnit, Maven, SonarQube, Express, React, Mocha, Chai, Jest</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
export default Skills;