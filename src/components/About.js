import React, { Component } from "react";


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
      var arcgisIcon = "images/logos/" + this.props.sharedBasicInfo.ArcGIS;
      var PythonIcon = "images/logos/" + this.props.sharedBasicInfo.Python;
      var QgisIcon = "images/logos/" + this.props.sharedBasicInfo.QGIS;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      //var about = this.props.resumeBasicInfo.description;
    }
    
    return (
      
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="My Profile Pic"
                  />
                  <div className="logo-container">
                    
                    <img
                      height="50px"
                      src={arcgisIcon}
                      className="logo-image"
                      alt="arcgisIcon"
                    />
                    <img
                      height="50px"
                      src={PythonIcon}
                      className="logo-image"
                      alt="pythonIcon"
                    />
                    <img
                      height="50px"
                      src={QgisIcon}
                      className="logo-image"
                      alt="QgisIcon"
                    />
                  </div>
                  
                  
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                      
                     <span> My name is Vaibhav. I'm a GIS professional with a strong foundation in ArcGIS, Python, C#, Javascript, and SQL.
                     I also hold a basic drone flight certificate and ROC-A certificate, which allows me to communicate over aviation frequency.
                      I believe my strong side is problem solving whether its a programming problem or a hardware problem, solving problems is my favourite part of any job. <br/>
                      In my free time, I love to code and learn about new technologies, recently I built my custom computer to optimize my day-to-day tasks. This website is one of my side projects to learn web development with React,
                      <em>Thank you for visiting! <br/>Please feel free to contact me through my <a href="mailto:makwanavaibhav7@gmail.com">Email</a> or <a href="https://www.linkedin.com/in/vaibhav26/" target="_blank" rel="noopener noreferrer">Linkedin</a>!</em></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

/* Add the following CSS to App.scss or a relevant CSS file
.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-image {
  margin: 0 10px;
}
*/
