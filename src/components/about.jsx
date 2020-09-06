import React, { Component } from 'react';
import aboutImg from "../image/author.jpg";

class About extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        }
    }

    render() { 
        const { status } = this.state;
        return ( 
            <React.Fragment>
                <div className="body-container">
                    <div className="about-container">
                            <img src={aboutImg} alt="" className="about-img" />

                        <div className="about-content">
                            <h2 className="hello">Hello I'm Moshood Alabidun</h2>
                            <p className="about-p">I am a Frontend Engineer, based in Lagos, Nigeria. 
                                My approach to software development is rooted in my background as a computer-science graduate, start by understanding the audience. 
                                Learning about the user through research and the nuances of the product itself and its industry is how I bridge the gap between stakeholder goals and user needs. 
                                I’m passionate about unobtrusive, streamlined, user centered design.
                            </p>
                            
                            <p className="about-c">
                            <a href="https://www.codementor.io/@moshaid?refer=badge" target="_blank" rel="noopener noreferrer"><img src="https://www.codementor.io/m-badges/moshaid/find-me-on-cm-b.svg" alt="Codementor badge" /></a>
                            </p>
                        </div>
                    </div>
                    
                    <div className="line"></div>
                    
                    <div className="about-form">
                        <h3>Contact me</h3>
                        <form onSubmit={this.submitForm} action="https://formspree.io/xpzylbvr" method="POST">
                            <div className="form-format">
                                <div className="first">
                                    <label for="fname">Name *</label><br></br>
                                    <input type="text" id="fname" name="fname" required /><br></br>
                                    First Name
                                </div>

                                <div className="second">
                                    <label for="fname"></label><br></br>
                                    <input type="text" id="fname" name="fname" required /><br></br>
                                    Last Name
                                </div>
                            </div>

                            <div className="email-content">
                                <label for="email">Email *</label><br></br>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="text-content">
                                <label for="msg">Message *</label><br></br>
                                <textarea id="msg" name="msg" required></textarea> 
                            </div>
                            
                            <div className="send">
                            {status === "SUCCESS" ? <h4>Thanks for contacting me!</h4> : <button onClick={this.formSubmitted}>Submit</button>}
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                            </div>
                        </form>   
                    </div>

                    <div className="social-footer about-footer">
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

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
}
 
export default About;