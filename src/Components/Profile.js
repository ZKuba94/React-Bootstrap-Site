import myImage from '../Images/1.jpeg'
// import Image from "react-bootstrap/Image";
import {Facebook, Github, Instagram, Linkedin, Twitter} from "react-bootstrap-icons";
function Profile () {
    return (
        <>
            <div className="d-flex flex-column align-items-center d-lg-none">
                <img src={myImage} className="my-photo rounded-circle d-block d-lg-none align-self-center border border-light border-3 mt-2 mt-sm-3"
                     alt="Photo of author" width="120px" height="120px"/>
                {/*<Image src={myImage} roundedCircle  fluid width="120px" height="120px" className="border border-light border-3" alt="Photo of author" />*/}
                <span className="fs-4 text-center fw-bolder py-2">Jakub Żurawski</span>
                <div className="social-links d-flex justify-content-around w-75">
                    <a href="https://mobile.twitter.com/zkuba94" className="text-decoration-none link-secondary text-light"><Twitter className="fs-2 m-1" /></a>
                    <a href="https://www.facebook.com/jakub.zurawski.9" className="text-decoration-none link-secondary text-light"><Facebook className="fs-2 m-1"/></a>
                    <a href="https://github.com/ZKuba94" className="text-decoration-none link-secondary text-light"><Github className="fs-2 m-1"/></a>
                    <a href="https://pl.linkedin.com/in/kuba-%C5%BCurawski-9a07b0170?trk=people-guest_people_search-card" className="text-decoration-none link-secondary text-light"><Linkedin className="fs-2 m-1"/></a>
                    <a href="https://www.instagram.com/zkubas/" className="text-decoration-none link-secondary text-light"><Instagram className="fs-2 m-1"/></a>
                </div>
            </div>
        </>
    )
}
export default Profile;