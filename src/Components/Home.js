import React from "react";

import Pics from '../Assets/profile_pics.jpg';
import Twitter from '../Assets/twitter.png';
import Slack from '../Assets/slack.svg';

import './Home.css'

const Home = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <div className="overlay">
                            <img className="img-round mt-5 " id="profile_img" src={Pics} />
                            <h3 className="name">Idowu Ariyo</h3>
                            <a href=""> <span id="twitter" className="fa fa-twitter twitter"></span></a>
                            <img id="slack" className="hidden 
                           slack" src={Slack} />
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>

                <div className="row parent">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a className="twi" href="">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="row parent2">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a className="twi" href="">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="row parent3">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a className="twi" href="">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="row parent4">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a className="twi" href="">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="row parent5">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a className="twi" href="">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="row parent6">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a className="twi" href="">Twitter</a>
                        </div>
                    </div>
                </div>

               
                
               
                
            </div>




        </div>
    );
}

export default Home;