import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className="mt-5">
          
            <div className="footer-container">
                <div >
                    <div className="row row2">

                        <div className="col-md-5">
                            <div class="row g-3 align-items-center mt-3">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Search</label>
                                </div>
                                <div class="col-auto">
                                    <input type="Search" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                        Must Be 6-8 characters long...
                                    </span>
                                </div>
                            </div>


                            <div>
                                <div className="left-container text-start mt-4">
                                    <hr />
                                    <h3 >JANNATUL FARDOUS </h3>
                                    <p >
                                        <h6>Address:  Mirpur-1, Block-D, Dhaka-1216</h6>
                                        <h6>Cell: +8801860514118</h6>
                                        <h6>Email: an.jannatulfardous@gmail.com</h6>

                                    </p>


                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">

                            <div className="footer-menu-container">
                                <ul className="mt-5">
                                    <h2>Social Link</h2>
                                    <hr />

                                </ul>
                            </div>

                        </div>



                        <div className="col-md-2">

                            <div className="footer-menu-container">
                                <ul className="mt-5">
                                    <h2>Site View</h2>
                                    <hr />
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Home</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>My Projects</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Resume</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}> About Me</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Blog</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Contact Me</li>
                                </ul>
                            </div>
                        </div>








                    </div>
                </div>
            </div>
            <p style={{ textAlign: "center", fontWeight: "bold", paddingTop: "30px", fontFamily: "Besley" }}><small> ©copyright  <span style={{ color: "red" }}>Amily Shahrin</span>@ my Portfolio</small></p>

        </div>
    );
};

export default Footer;