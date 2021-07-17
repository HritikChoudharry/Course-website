import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img2.jpg";
const Home = () => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="Container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className ="row">
                        <div className="col -md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1> 
                            Welcome To A New World Of
                                <strong className="website-name"> EDUCATIONAL COURSES </strong>
                            </h1>
                            <h2 className="my-3"> Top Courses Available Here </h2>
                            <div className="mt-3">
                                <NavLink to="/Courses" className="btn-get-started">
                                 Get Started
                                  </NavLink>
                            
                            </div>
                            </div>
                            <div className = "col-lg-6 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated" alt="img" />

                            </div>
                         </div>
                        </div>
                </div>
            </div>

        </section>
        </>
    );
};
export default Home;