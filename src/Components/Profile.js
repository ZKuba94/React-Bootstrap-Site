import myImage from '../Images/1.jpeg'
import {Facebook, Github, Instagram, Linkedin, Twitter} from "react-bootstrap-icons";
function Profile () {
    return (
        <>
            <div className="d-flex flex-column align-items-center d-lg-none">
                <img src={myImage} className="my-photo rounded-circle d-block d-lg-none align-self-center border border-light border-4 mt-2 mt-sm-3"
                     alt="Photo of author" width="120px" height="120px"/>
                <span className="fs-4 text-center fw-bolder py-2">Jakub Żurawski</span>
                <div className="social-links d-flex justify-content-around w-75">
                    <a href="#" className="text-decoration-none link-secondary text-light"><Twitter className="fs-2 m-1" /></a>
                    <a href="#" className="text-decoration-none link-secondary text-light"><Facebook className="fs-2 m-1"/></a>
                    <a href="#" className="text-decoration-none link-secondary text-light"><Github className="fs-2 m-1"/></a>
                    <a href="#" className="text-decoration-none link-secondary text-light"><Linkedin className="fs-2 m-1"/></a>
                    <a href="#" className="text-decoration-none link-secondary text-light"><Instagram className="fs-2 m-1"/></a>
                </div>
            </div>
        </>
    )
}
export default Profile;