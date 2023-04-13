import myPhoto from "../Images/1.jpeg"
import {ChevronRight} from "react-bootstrap-icons";

function AboutMe() {
    return (
        <>
            <div className="container">
                <h2 className="title text-capitalize fw-bold mt-5 mb-4">about me</h2>
                <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam doloribus sed
                    totam culpa similique
                    molestias odio dolorum quis voluptate accusamus, saepe nisi quos, minus nam fugiat et ab ipsam
                    voluptatibus rerum debitis quaerat ducimus eligendi maxime eos. Animi quia consequatur labore
                    earum
                    eaque distinctio veritatis!</p>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={myPhoto} className="img-fluid rounded" alt="Photo of author"/>
                    </div>
                    <div className="col-lg-8">
                        <h3 className="fw-bold mt-4 mb-4 mt-lg-0 mb-lg-2">UI/UX Designer & Web Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eius assumenda explicabo
                            aliquid ipsa quod eligendi earum id, vero voluptas sint provident, quidem a recusandae!</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-3">
                                        <ChevronRight className="text-primary"/>
                                        <strong>Birthday: </strong>
                                        <span>20 March 1994</span>
                                    </li>
                                    <li className="mb-3">
                                        <ChevronRight className="text-primary"/>
                                        <strong>Website: </strong>
                                        <span>www.example.com</span>
                                    </li>
                                    <li className="mb-3">
                                        <ChevronRight className="text-primary"/>
                                        <strong>Phone: </strong>
                                        <span>+48 555 444 333</span>
                                    </li>
                                    <li className="mb-3">
                                        <ChevronRight className="text-primary"/>
                                        <strong>City: </strong>
                                        <span>Kielce</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <ChevronRight className="text-primary"/>
                                        <strong>Birthday: </strong>
                                        <span>20 March 1994</span>
                                    </li>
                                    <li className="mb-3">
                                        <ChevronRight className="text-primary"/>
                                        <strong>Website: </strong>
                                        <span>www.example.com</span>
                                    </li>
                                    <li className="mb-3">
                                        <ChevronRight className="text-primary"/>
                                        <strong>Phone: </strong>
                                        <span>+48 555 444 333</span>
                                    </li>
                                    <li className="mb-3">
                                        <ChevronRight className="text-primary"/>
                                        <strong>City: </strong>
                                        <span>Kielce</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                            corporis et exercitationem. Eligendi provident, id praesentium magni amet obcaecati
                            assumenda eveniet,
                            incidunt, perspiciatis dicta dolorum odit excepturi voluptatem? Eos tempora velit quo minus
                            dolore dignissimos exercitationem error optio veniam ipsam!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;