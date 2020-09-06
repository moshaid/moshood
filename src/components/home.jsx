import React, { Component } from 'react';
import Typed from 'react-typed';
import imga from "../image/illustration2.png";
import imgad from "../image/richr/R1.png";
import author from "../image/author.jpg";
import fitness from "../image/workFit.jpg";

class Home extends Component {
    render() { 
        return (
            <React.Fragment>
            <div className="body-container">
                <div className="imga-container">
                    <img src={imga} alt=""  />
                </div>

                <div className="content-container">
                    <div className="content-typed-container">
                        <h1>Moshood Alabidun,</h1>
                            <div className="typed-container">
                                <Typed
                                    strings={[
                                    "Software Engineer",
                                    "Front End Developer"
                                   
                                    ]}
                                    typeSpeed={80}
                                    backDelay={1100}
                                    backSpeed={30}
                                    loop
                                />
                            </div>
                        </div>             
                    <p className="content-p">
                        As a <strong>software engineer</strong> with a background in <strong>computer science</strong>,
                        I have strong instincts for the way people learn and are engaged. I enjoy collaborating with stakeholders, ideating, testing early and often, to solve business and user needs. <br></br> 
                        Also as a <strong>frontend developer</strong>, I delight in creating visual languages for a product, interface design that communicates the brand’s core values to achieve a complete experience.
                    </p>
                </div>

                <div className="grid-container-one">
                    <div className="grid-first">
                        <div>
                            <img src={imgad} alt="" className="" />
                            <div class="grid-overlay"> An Application built with Html, Css, Javascript </div>
                        </div>
                    </div>

                    <div className="grid-second">
                        <h2>Richr Property & Homes</h2>
                        <span>The New Way to Buy and Sell Homes <br></br> Commission-free.</span>

                        <div className="prop">
                            <a className="project" href="https://github.com/moshaid/Richr">VIEW PROJECT</a>
                        </div>
                    </div>                  
                </div>

                <div className="grid-container-one">
                    <div className="grid-first">
                        <div>
                            <img src={fitness} alt="" />
                            <div class="grid-overlay">An Application built with React and TailwindCss</div>
                        </div>
                    </div>

                    <div className="grid-second">
                        <h2>Ultra Modern Fitness Hub</h2>

                        <p className="coming">Coming Soon</p>
                        {/* <span>FitHUB is a fitness platfrom that  <br></br> provides streamlined communication  <br></br> an online and onsite focused workout  <br></br> plan including remote check-ins.</span> */}

                        <div className="prop">
                            <a className="project" href="">VIEW PROJECT</a>
                        </div>
                    </div>                  
                </div>

                <div className="last-container">
                    <div className="last-container-content">
                        <h2 className="say"><strong>Say hello!</strong></h2>
                            <div className="drop">
                                <p>Drop me a line.</p>
                                <p>I would love to work with you!</p>
                            </div>
                            <p>alabidunmoshood@gmail.com</p>
                    </div>
                        
                    <div className="last-container-img">
                        <img src={author} alt="" />
                    </div>
                </div>

                <div className="social-footer">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/moshood-opeyemi-5b02a6152/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://twitter.com/Quantillionaire" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://github.com/moshaid" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://stackoverflow.com/users/9780741/moshood?tab=profile" target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow"></i></a></li>
                    </ul>
                </div>               

                <div className="footer">
                    <p>Website design &amp; content © 2020 Alabidun Moshood</p>
                </div>

            </div>
            </React.Fragment>
        );
    }
}
 
export default Home;