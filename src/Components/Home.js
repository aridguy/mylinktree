import React from "react";

import Pics from '../Assets/profile_pics.jpg';
// import Twitter from '../Assets/twitter.png';
import Slack from '../Assets/slack.svg';

import Github from '../Assets/github.svg'
import Zuri from '../Assets/zuri.svg'
import Ingresive from '../Assets/ingressive.svg'

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
                            <img className="img-round mt-5 " id="profile_img" src={Pics} alt="pics" />
                            <h3 className="name">Idowu Ariyo</h3>
                            <p id="twitter" className="hdname">@ariyo2r</p>
                           
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row parent">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a className="twi" href="https://twitter.com/ariyo2r">Twitter Links</a>
                        </div>
                    </div>
                </div>
                <div className="row parent2">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a id="btn_zuri" className="twi" href="https://training.zuri.team/">Zuri Team</a>
                        </div>
                    </div>
                </div>

                <div className="row parent3">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a id="books" className="twi" href="http://books.zuri.team">Zuri Books</a>
                        </div>
                    </div>
                </div>
                <div className="row parent4">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a id="book__python" className="twi" href="https://books.zuri.team/python-for-beginners?ref_id=%3C@ariyoidowu%3E">Python Books</a>
                        </div>
                    </div>
                </div>

                <div className="row parent5">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a id="pitch" className="twi" href="https://background.zuri.team">Background Check for Coders</a>
                        </div>
                    </div>
                </div>

                <div className="row parent6">
                    <div className="col-md-12">
                        <div className="content-links">
                            <a id="book__design" className="twi" href="https://books.zuri.team/design-rules">Design Books</a>
                        </div>
                    </div>
                </div>

            </div>

            <section className="top-foot">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img id="slack" className=" 
                        slack" src={Slack} alt="slack" />

                            <img id="github" className=" 
                        git" src={Github} alt="github" />
                        </div>
                    </div>
                </div>

                <div className="container lastFoot">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img className="" src={Zuri} alt="zuri" />
                        </div>
                        <div className="col-md-4">
                            <p className="txtFoot text-center">HNG Internship 9 Frontend Task</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={Ingresive} alt="zuri" />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;