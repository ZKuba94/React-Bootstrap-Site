import {Airplane, CodeSlash, EmojiSmile, Postcard} from "react-bootstrap-icons";

function Numbers() {
    return (
        <>
            <div className="container">
                <div>
                    <h2 className="title text-capitalize fw-bold mt-5 mb-4">some numbers</h2>
                    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis facere ad,
                        blanditiis aspernatur sed omnis deserunt magnam nostrum officiis cum a. Fugiat, voluptatibus
                        enim provident neque amet eveniet natus eum.</p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="d-flex align-items-start">
                            <EmojiSmile className="fs-1" />
                            <div className="ps-2">
                                <span className="display-5 lh-1 fw-bold">5</span>
                                <p>
                                    <strong>Happy Clients</strong>
                                    <br/>Lorem, ipsum dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="d-flex align-items-start">
                            <Postcard className="fs-1" />
                            <div className="ps-2">
                                <span className="display-5 lh-1 fw-bold">42</span>
                                <p>
                                    <strong>Projects</strong>
                                    <br/>Lorem ipsum dolor sit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="d-flex align-items-start">
                            <CodeSlash className="fs-1" />
                            <div className="ps-2">
                                <span className="display-5 lh-1 fw-bold">2137</span>
                                <p>
                                    <strong>Hours</strong>
                                    <br/>Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="d-flex align-items-start">
                            <Airplane className="fs-1" />
                            <div className="ps-2">
                                <span className="display-5 lh-1 fw-bold">120</span>
                                <p>
                                    <strong>Countries</strong>
                                    <br/>Lorem, ipsum dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Numbers;