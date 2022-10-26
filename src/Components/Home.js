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
                            <span className="fa fa-twitter twitter"></span>
                           <img className="slack" src={Slack} />
                        </div>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contents-links">
                        
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home;