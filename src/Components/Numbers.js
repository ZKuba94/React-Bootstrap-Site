import {Airplane, CodeSlash, EmojiSmile, Postcard} from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";

function Numbers() {
    return (
        <>
            <section id="numbers">
                <Container>
                    <Row>
                        <h2 className="title text-capitalize fw-bold mt-5 mb-4">some numbers</h2>
                        <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis facere
                            ad,
                            blanditiis aspernatur sed omnis deserunt magnam nostrum officiis cum a. Fugiat, voluptatibus
                            enim provident neque amet eveniet natus eum.</p>
                    </Row>
                    <Row>
                        <Col md={6} lg={3} className="my-4">
                            <div className="d-flex align-items-start">
                                <EmojiSmile className="fs-1"/>
                                <div className="ps-2">
                                    <span className="display-5 lh-1 fw-bold">5</span>
                                    <p>
                                        <strong>Happy Clients</strong>
                                        <br/>Lorem, ipsum dolor.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="my-4">
                            <div className="d-flex align-items-start">
                                <Postcard className="fs-1"/>
                                <div className="ps-2">
                                    <span className="display-5 lh-1 fw-bold">42</span>
                                    <p>
                                        <strong>Projects</strong>
                                        <br/>Lorem ipsum dolor sit.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="my-4">
                            <div className="d-flex align-items-start">
                                <CodeSlash className="fs-1"/>
                                <div className="ps-2">
                                    <span className="display-5 lh-1 fw-bold">2137</span>
                                    <p>
                                        <strong>Hours</strong>
                                        <br/>Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="my-4">
                            <div className="d-flex align-items-start">
                                <Airplane className="fs-1"/>
                                <div className="ps-2">
                                    <span className="display-5 lh-1 fw-bold">120</span>
                                    <p>
                                        <strong>Countries</strong>
                                        <br/>Lorem, ipsum dolor.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Numbers;