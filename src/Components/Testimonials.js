import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import pic from "../Images/normal/mountains-gaf39cb344_1280.jpg"
import test1 from "../Images/testimonials/attractive-gbdef00b17_640.jpg"
import test2 from "../Images/testimonials/beard-gdab7ca057_640.jpg"
import test3 from "../Images/testimonials/happy-g7cf07f76c_640.jpg"
import test4 from "../Images/testimonials/woman-g709ce2b4b_640.jpg"

function Testimonials() {
    return (
        <>
            <section id="testimonials">
                <Container>
                    <Row>
                        <h2 className="title text-capitalize fw-bold mt-5 mb-4">testimonials</h2>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                            aliquid
                            eius dolores sequi ratione doloremque quisquam officiis natus ab odit, consequuntur repreh
                            enderit blanditiis sed praesentium repellendus culpa alias. Quo libero amet laboriosam.</p>
                    </Row>
                    <Row>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <Image src={pic} alt="Background" className="carousel-item d-block w-100 opacity-50"/>
                                <Carousel.Caption className="d-flex flex-column align-items-center">
                                    <Card className="m-2" style={{width: '18rem'}}>
                                        <Card.Img variant="top" src={test1} className="d-none d-lg-block"/>
                                        <Card.Body className="p-2 p-sm-4">
                                            <Card.Text>
                                                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet soluta
                                                voluptatum nobis excepturi, numquam
                                                repudiandae ut vel molestiae fugit atque."
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <h5>Josephine Malone</h5>
                                    <span>Developer</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic} alt="Background" className="carousel-item d-block w-100 opacity-50"/>
                                <Carousel.Caption className="d-flex flex-column align-items-center">
                                    <Card className="m-2" style={{width: '18rem'}}>
                                        <Card.Img variant="top" src={test2} className="d-none d-lg-block"/>
                                        <Card.Body className="p-2 p-sm-4">
                                            <Card.Text>
                                                "Lorem ipsum dolor sit amet consectetur,
                                                adipisicing elit. Maxime officiis, doloremque illo aliquam velit
                                                molestiae!"
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <h5>Christoph Gallager</h5>
                                    <span>Store Owner</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic} alt="Background" className="carousel-item d-block w-100 opacity-50"/>
                                <Carousel.Caption className="d-flex flex-column align-items-center">
                                    <Card className="m-2" style={{width: '18rem'}}>
                                        <Card.Img variant="top" src={test3} className="d-none d-lg-block"/>
                                        <Card.Body className="p-2 p-sm-4">
                                            <Card.Text>
                                                "Lorem ipsum, dolor sit amet consectetur
                                                adipisicing elit. Ullam odit magnam qui? Hic repudiandae, itaque id
                                                temporibus tempore possimus libero. "
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <h5>Mathew Perry</h5>
                                    <span>Enterpreneur</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic} alt="Background" className="carousel-item d-block w-100 opacity-50"/>
                                <Carousel.Caption className="d-flex flex-column align-items-center">
                                    <Card className="m-2" style={{width: '18rem'}}>
                                        <Card.Img variant="top" src={test4} className="d-none d-lg-block"/>
                                        <Card.Body className="p-2 p-sm-4">
                                            <Card.Text>
                                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
                                                architecto libero nam? Fugiat nihil
                                                deleniti temporibus provident quaerat!"
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <h5>Philis Goodman</h5>
                                    <span>Design</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Testimonials;