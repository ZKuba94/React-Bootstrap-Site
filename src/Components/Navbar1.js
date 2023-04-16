import {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
    Bootstrap,
    EnvelopePaper,
    Person,
    PersonVcard,
    PostcardFill,
    HouseDoor,
    FileEarmark
} from "react-bootstrap-icons";
import Profile from "./Profile";

function Navbar1() {
    const [show,setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Navbar fixed="top" key={'lg'} bg="dark" variant="dark" expand={'lg'}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Bootstrap/>&nbsp;My React Bootstrap Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${'lg'}`}/>
                    <Navbar.Offcanvas
                        show={show}
                        onHide={handleClose}
                        id={`offcanvasNavbar-expand-${'lg'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
                        placement="start"
                        className="bg-dark text-light"
                    >
                        <Offcanvas.Header closeButton closeVariant="white" className="bg-primary text-light">
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
                                <Bootstrap/>
                                &nbsp;My React Bootstrap Portfolio
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Profile/>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 gap-2 gap-lg-0">
                                <Nav.Link onClick={handleClose} href="#app"><HouseDoor/>&nbsp;Home</Nav.Link>
                                <Nav.Link onClick={handleClose} href="#aboutme"><Person/>&nbsp;About Me</Nav.Link>
                                <Nav.Link onClick={handleClose} href="#resume"><FileEarmark/>&nbsp;Resume</Nav.Link>
                                <Nav.Link onClick={handleClose} href="#portfolio"><PostcardFill/>&nbsp;Portfolio</Nav.Link>
                                <Nav.Link onClick={handleClose} href="#testimonials"><PersonVcard/>&nbsp;Testimonials</Nav.Link>
                                <Nav.Link onClick={handleClose} href="#contact"><EnvelopePaper/>&nbsp;Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbar1;