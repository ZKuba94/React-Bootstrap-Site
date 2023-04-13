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
import Profile from "./Components/Profile";

function Navbar1() {
    return (
        <>
            <Navbar fixed="top" key={'lg'} bg="dark" variant="dark" expand={'lg'}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        {/*<i className="bi bi-bootstrap"></i>*/}
                        <Bootstrap/>&nbsp;My React Bootstrap Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`}/>
                    <Navbar.Offcanvas
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
                                <Nav.Link href="#action1"><HouseDoor/>&nbsp;Home</Nav.Link>
                                <Nav.Link href="#action2"><Person/>&nbsp;About Me</Nav.Link>
                                <Nav.Link href="#action3"><FileEarmark/>&nbsp;Resume</Nav.Link>
                                <Nav.Link href="#action4"><PostcardFill/>&nbsp;Portfolio</Nav.Link>
                                <Nav.Link href="#action5"><PersonVcard/>&nbsp;Testimonials</Nav.Link>
                                <Nav.Link href="#action6"><EnvelopePaper/>&nbsp;Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbar1;