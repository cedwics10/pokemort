function Container() {
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <a href="#">
                        <div className="item">
                            <div className="image">
                                <img
                                    alt=""
                                    src="images/featured-01.png"
                                    style={{
                                        maxWidth: "44px",
                                    }}
                                />
                            </div>
                            <h4>Free Storage</h4>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <a href="#">
                        <div className="item">
                            <div className="image">
                                <img
                                    alt=""
                                    src="images/featured-02.png"
                                    style={{
                                        maxWidth: "44px",
                                    }}
                                />
                            </div>
                            <h4>User More</h4>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <a href="#">
                        <div className="item">
                            <div className="image">
                                <img
                                    alt=""
                                    src="images/featured-03.png"
                                    style={{
                                        maxWidth: "44px",
                                    }}
                                />
                            </div>
                            <h4>Reply Ready</h4>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <a href="#">
                        <div className="item">
                            <div className="image">
                                <img
                                    alt=""
                                    src="images/featured-04.png"
                                    style={{
                                        maxWidth: "44px",
                                    }}
                                />
                            </div>
                            <h4>Easy Layout</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>);
}

export default Container;