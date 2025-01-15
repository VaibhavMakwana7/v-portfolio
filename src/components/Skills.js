import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      
      var imgs = this.props.sharedSkills.imgs.map(function (imgs, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                  <img
                    height="40px"
                    src={"images/logos/" +imgs.class}
                    alt={imgs.name}
                    style={{filter: "grayscale(100%) contrast(40%) brightness(150%)"}}
                  />
                  <p
                    className="text-center"
                    style={{ fontSize: "60%", marginTop: "4px" }}
                  >
                    {imgs.name}
                  </p>
                
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
            <ul className="list-inline mx-auto skill-icon">{imgs}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
