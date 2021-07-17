import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/7a075ae77e31249f5585f38cbeb77dd0.jpg';

const Courses = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="tab-center"> OUR COURSES </h1>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-4 col-10 mx-auto">
                        <div class="card">
                        <img src={web} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title"> Python </h5>
                <p class="card-text">Select This Course</p>
                <button>
                <NavLink to="#" class="btn btn-primary">START NOW</NavLink>
                </button>
             </div>
            </div>
            </div>
            </div>
            </div>
            <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-4 col-10 mx-auto">
                        <div class="card">
                        <img src={web} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title"> HTML5 </h5>
                <p class="card-text">Select This Course</p>
                <button>
                <NavLink to="#" class="btn btn-primary">START NOW</NavLink>
                </button>             
                </div>
            </div>
            </div>
            </div>
            </div>
            <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-4 col-10 mx-auto">
                        <div class="card">
                        <img src={web} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title"> web development </h5>
                <p class="card-text">Select This Course</p>
                <button>
                <NavLink to="#" class="btn btn-primary">START NOW</NavLink>
                </button>
             </div>
            </div>
            </div>
            </div>
            </div>
            <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-4 col-10 mx-auto">
                        <div class="card">
                        <img src={web} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title"> React js </h5>
                <p class="card-text">Select This Course</p>
                <button>
                <NavLink to="#" class="btn btn-primary">START NOW</NavLink>
                </button>
             </div>
            </div>
            </div>
            </div>
            </div>
                    </div>
                </div>
        </>
    );
};
export default Courses;