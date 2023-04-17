import myPhoto from "../Images/1.jpeg"
import {ChevronRight} from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';

function AboutMe() {
    return (
        <>
            <section id="aboutme">
                <Container>
                    <Row>
                        <h2 className="title text-capitalize fw-bold mt-5 mb-4">about me</h2>
                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam doloribus
                            sed
                            totam culpa similique
                            molestias odio dolorum quis voluptate accusamus, saepe nisi quos, minus nam fugiat et ab
                            ipsam
                            voluptatibus rerum debitis quaerat ducimus eligendi maxime eos. Animi quia consequatur
                            labore
                            earum
                            eaque distinctio veritatis!</p>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <img src={myPhoto} className="img-fluid rounded" alt="Photo of author"/>
                        </Col>
                        <Col lg={8}>
                            <h3 className="fw-bold mt-4 mb-4 mt-lg-0 mb-lg-2">UI/UX Designer & Web Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eius assumenda
                                explicabo
                                aliquid ipsa quod eligendi earum id, vero voluptas sint provident, quidem a
                                recusandae!</p>
                            <Row>
                                <ListGroup horizontal="lg">
                                    <Col lg={6}>
                                        <ListGroup.Item>
                                            <ChevronRight className="text-primary"/>
                                            <strong>Birthday: </strong>
                                            <span>20 March 1994</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <ChevronRight className="text-primary"/>
                                            <strong>Website: </strong>
                                            <span>www.example.com</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <ChevronRight className="text-primary"/>
                                            <strong>Phone: </strong>
                                            <span>+48 555 444 333</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <ChevronRight className="text-primary"/>
                                            <strong>City: </strong>
                                            <span>Kielce</span>
                                        </ListGroup.Item>
                                    </Col>
                                    <Col lg={6}>
                                        <ListGroup.Item>
                                            <ChevronRight className="text-primary"/>
                                            <strong>Birthday: </strong>
                                            <span>20 March 1994</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <ChevronRight className="text-primary"/>
                                            <strong>Website: </strong>
                                            <span>www.example.com</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <ChevronRight className="text-primary"/>
                                            <strong>Phone: </strong>
                                            <span>+48 555 444 333</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <ChevronRight className="text-primary"/>
                                            <strong>City: </strong>
                                            <span>Kielce</span>
                                        </ListGroup.Item>
                                    </Col>
                                </ListGroup>
                            </Row>
                            <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                                corporis et exercitationem. Eligendi provident, id praesentium magni amet obcaecati
                                assumenda eveniet,
                                incidunt, perspiciatis dicta dolorum odit excepturi voluptatem? Eos tempora velit quo
                                minus
                                dolore dignissimos exercitationem error optio veniam ipsam!</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutMe;