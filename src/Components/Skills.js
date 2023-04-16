import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";

function Skills() {
    return (
        <>
            <section id="skills">
                <Container>
                    <div>
                        <h2 className="title text-capitalize fw-bold mt-5 mb-4">skills</h2>
                        <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt porro ex
                            ut
                            veritatis soluta quae, in fugit cumque rerum, officiis voluptatum maxime nostrum quia
                            asperiores
                            quis repellat deserunt dolorem tempore! Amet, laudantium similique.</p>
                    </div>
                    <Row>
                        <Col lg={6}>
                            <label className="fw-bold py-2">HTML</label>
                            <ProgressBar striped now={90} label={`90%`}/>
                            <label className="fw-bold py-2">CSS</label>
                            <ProgressBar striped variant="danger" now={85} label={`85%`}/>
                            <label className="fw-bold py-2">Bootstrap</label>
                            <ProgressBar striped now={70} label={`70%`}/>
                        </Col>
                        <Col lg={6}>
                            <label className="fw-bold py-2">Java Script</label>
                            <ProgressBar striped variant="warning" now={65} label={`65%`}/>
                            <label className="fw-bold py-2">Excell</label>
                            <ProgressBar striped variant="success" now={90} label={`90%`}/>
                            <label className="fw-bold py-2">Snowboard</label>
                            <ProgressBar striped variant="info" now={15} label={`15%`}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Skills;