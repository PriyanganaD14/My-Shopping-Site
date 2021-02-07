import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase text-light">Get know Us</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-light">Contact Us</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">About Us</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Careers</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Wholesale</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0 text-light">Connect with Us</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-light">Facebook</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Twitter</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">YouTube</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase text-light">Policy</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-light">Return Policy</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Terms of Use</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Security</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase text-light">Help</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-light">Payments</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Shipping</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Returns</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">FAQ</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="text-center p-3 text-light" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2020 Copyright:
    <a className="text-light" href="#!">abcxyz.com</a>
            </div>

        </footer>
    );
};

export default Footer;