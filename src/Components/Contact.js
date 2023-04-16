import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from "react-bootstrap/Button";
function Contact() {
    return (
        <>
            <section id="contact">
                <Container>
                    <Row>
                        <h2 className="title text-capitalize fw-bold mt-5 mb-4">Contact</h2>
                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aut aliquid
                            et quod
                            iste molestiae alias temporibus autem, quo sed dolorem sint deleniti consequuntur enim eum
                            inventore ut quisquam unde qui! Aspernatur, vero commodi.</p>
                    </Row>
                    <Form className="g-2">
                        <Row className="g-2 mb-3">
                            <Col md>
                                <FloatingLabel controlId="name" label="Name">
                                    <Form.Control type="name" placeholder="John"/>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="email" label="Email">
                                    <Form.Control type="email" placeholder="kowalski@gmail.com"/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <FloatingLabel controlId="adress" label="Adress">
                                    <Form.Control type="text" placeholder="Krakowska 232"/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md>
                                <FloatingLabel controlId="city" label="City">
                                    <Form.Control type="text" defaultValue="Kielce" placeholder="Kielce"/>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={3} className="my-1 my-md-0">
                                <FloatingLabel controlId="zip" label="Zip">
                                    <Form.Control type="text" placeholder="25-645"/>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="region" label="Region">
                                    <Form.Select aria-label="Region" defaultValue="1">
                                        <option disabled value="1">Open menu to choose</option>
                                        <option value="2">Mazowieckie</option>
                                        <option value="3">Świętokrzyskie</option>
                                        <option value="4">Podkarpackie</option>
                                        <option value="5">Pomorskie</option>
                                        <option value="6">Lubelskie</option>
                                        <option value="7">Warmińsko-mazurskie</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <FloatingLabel controlId="text" label="Topic">
                                    <Form.Control type="text" placeholder="Choose topic..."/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <FloatingLabel controlId="text" label="Message">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Write a message"
                                        style={{height: '120px'}}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="file">
                                    <Form.Label>Add some file</Form.Label>
                                    <Form.Control type="file"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Choose your sex:</Form.Label>
                                <Form.Check label="male" type="radio" id="male" name="group"/>
                                <Form.Check label="female" type="radio" id="female" name="group"/>
                                <Form.Check label="transgender" type="radio" id="transgender" name="group"/>
                            </Col>
                            <Col>
                                <Form.Label>Check this switch !</Form.Label>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Check this switch !"
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3 d-flex flex-column">
                            <Col>
                                <Form.Label>Choose your hobbies:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Check inline label="Chess" type="checkbox" id="chess" name="group2"/>
                                <Form.Check inline label="Football" type="checkbox" id="football" name="group2"/>
                                <Form.Check inline label="Badminton" type="checkbox" id="badminton" name="group2"/>
                                <Form.Check inline label="Music" type="checkbox" id="music" name="group2"/>
                                <Form.Check inline label="Movies" type="checkbox" id="movies" name="group2"/>
                                <Form.Check inline label="VolLeyball" type="checkbox" id="volLeyball" name="group2"/>
                                <Form.Check inline label="Guitar" type="checkbox" id="guitar" name="group2"/>
                                <Form.Check inline label="Books" type="checkbox" id="books" name="group2"/>
                            </Col>
                        </Row>
                        <Button className="mb-3" type="submit">Submit form</Button>
                    </Form>
                </Container>
            </section>
        </>
    )
}

export default Contact;