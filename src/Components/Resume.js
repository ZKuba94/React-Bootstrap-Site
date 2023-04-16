import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

function Resume() {
    return (
        <>
            <section id="resume">
                <Container>
                    <Row>
                        <div>
                            <h2 className="title text-capitalize fw-bold mt-5 mb-4">resume</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
                                molestiae
                                accusamus quis iste debitis voluptas aliquam, error aspernatur odio magni omnis
                                molestias,
                                temporibus maxime eligendi cupiditate facilis, voluptate aliquid excepturi minus. Minima
                                vero
                                dolores nesciunt non quibusdam unde enim cumque itaque! Expedita, necessitatibus at?</p>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <h3 className="fw-bold mb-3">Sumary</h3>
                            <div className="resume-item ps-4 position-relative">
                                <h4 className="fw-bold">Jakub Żurawski</h4>
                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                                    praesentium
                                    cumque ipsum totam? Sed cupiditate repudiandae, officia molestiae ipsa dolores?</p>
                                <ul>
                                    <li>Piekoszowska 333, 25-645 Kielce, PL</li>
                                    <li>+48 555 444 333</li>
                                    <li>zkuba94@gmail.com</li>
                                </ul>
                            </div>
                            <h3 className="fw-bold mb-3">Education</h3>
                            <div className="resume-item ps-4 position-relative">
                                <h4 className="fw-bold">Logistics</h4>
                                <Badge variant="primary" className="p-2 mb-2">2013-2017</Badge>
                                <span className="d-block py-1">University of Technology in Kielce</span>
                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus
                                    expedita
                                    nulla soluta, numquam eligendi accusantium aliquam sit rerum ex eius magni minima
                                    reprehenderit voluptates ipsa?</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3 className="fw-bold mb-3">Experience</h3>
                            <div className="resume-item ps-4 position-relative">
                                <h4 className="fw-bold">Freight Forwarder</h4>
                                <Badge variant="primary" className="p-2 mb-2">2019-2022</Badge>
                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                                    dolor
                                    vel
                                    consequatur earum mollitia omnis, sint deserunt labore repudiandae ab? Voluptatem
                                    ipsa
                                    numquam dolor ducimus cum necessitatibus aut rem facere. Magnam, ipsa enim!</p>
                            </div>
                            <div className="resume-item ps-4 mb-5 position-relative">
                                <h4 className="fw-bold">Programming</h4>
                                <Badge variant="primary" className="p-2 mb-2">2022</Badge>
                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus
                                    expedita
                                    nulla soluta, numquam eligendi accusantium aliquam sit rerum ex eius magni minima
                                    reprehenderit voluptates ipsa?</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Resume;