import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Button, Modal, ModalBody} from "react-bootstrap";
import image1 from "../Images/normal/chipmunk-g4a7fd2929_1920.jpg"
import image2 from "../Images/normal/christmas-g4c5c569df_1920.jpg"
import image3 from "../Images/normal/christmas-market-gf770ebd9a_1920.jpg"
import image4 from "../Images/normal/christmas-motif-g123f9d1e8_1920.jpg"
import image5 from "../Images/normal/cold-gcf9175baf_1920.jpg"
import image6 from "../Images/normal/mount-cook-gae297bc16_1920.jpg"
import image7 from "../Images/normal/mountains-gaf39cb344_1280.jpg"
import image8 from "../Images/normal/skiing-gbd6e9c75b_1920.jpg"
import image9 from "../Images/normal/table-setting-g7ad0ab69b_1920.jpg"
import {useBoolean} from "../hooks/useBoolean";

// TODO import images from public
//  config object with images

function Portfolio() {
    const [show, handleOpen, handleClose] = useBoolean(false);

    return (
        <>
            <section id="portfolio">
                <Container>
                    <Modal show={show} onHide={handleClose}>
                        <ModalBody>
                            <Image src={image1} className="portfolio-img" rounded fluid/>
                        </ModalBody>
                    </Modal>
                    <Row>
                        <div>
                            <h2 className="title text-capitalize fw-bold mt-5 mb-4">portfolio</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                                aliquid eius
                                dolores sequi ratione doloremque quisquam officiis natus ab odit, consequuntur
                                reprehenderit
                                blanditiis sed praesentium repellendus culpa alias. Quo libero amet laboriosam.</p>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} className="p-2 p-md-3">
                            <Image src={image1} className="portfolio-img" rounded fluid/>
                            <Button onClick={handleOpen}>open modal</Button>
                        </Col>
                        <Col lg={4} md={6} className="p-2 p-md-3">
                            <Image src={image2} className="portfolio-img" rounded fluid/>
                        </Col>
                        <Col lg={4} md={6} className="p-2 p-md-3">
                            <Image src={image3} className="portfolio-img" rounded fluid/>
                        </Col>
                        <Col lg={4} md={6} className="p-2 p-md-3">
                            <Image src={image4} className="portfolio-img" rounded fluid/>
                        </Col>
                        <Col lg={4} md={6} className="p-2 p-md-3">
                            <Image src={image5} className="portfolio-img" rounded fluid/>
                        </Col>
                        <Col lg={4} md={6} className="p-2 p-md-3">
                            <Image src={image6} className="portfolio-img" rounded fluid/>
                        </Col>
                        <Col lg={4} md={6} className="p-2 p-md-3">
                            <Image src={image7} className="portfolio-img" rounded fluid/>
                        </Col>
                        <Col lg={4} md={6} className="p-2 p-md-3">
                            <Image src={image8} className="portfolio-img" rounded fluid/>
                        </Col>
                        <Col lg={4} md={6} className="p-2 p-md-3">
                            <Image src={image9} className="portfolio-img" rounded fluid/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Portfolio;