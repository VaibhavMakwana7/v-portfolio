import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";


class Header extends Component {
  titles = [];
  scrollSpeed = 0.1;
  boostedScrollSpeed = 1.0; // Adjust the boosted speed as needed
  boostDuration = 10;
  
  

  constructor() {
    super();
    this.state = { checked: false, loading: true };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    this.animateBackground = this.animateBackground.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.animationFrameId = requestAnimationFrame(this.animateBackground);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrameId);
  }


  animateBackground() {
    const header = document.getElementById('home');
    if (header) {

      const currentPosition = parseFloat(header.style.backgroundPositionX) || 0;
      header.style.backgroundPositionX = `${currentPosition - this.scrollSpeed}px`;
    }
    this.animationFrameId = requestAnimationFrame(this.animateBackground);
  }

  handleScroll = () => {
    const swipeElement = document.querySelector('.section-title.pulsate');
    
    if (swipeElement) {
      swipeElement.classList.add('hidden');
      swipeElement.classList.remove('pulsate');

      //window.removeEventListener('scroll', this.handleScroll);
    }
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
      body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {

    if (this.props.sharedBasicInfo) {
      var lightmap = "images/Map/" + this.props.sharedBasicInfo.lightmap;
      var darkmap = "images/Map/" + this.props.sharedBasicInfo.darkmap;
    }

    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);
    
    return (
      <div>
        
      <header id="home" style={{ height: window.innerHeight, display: 'block', backgroundImage: `url(${this.state.checked? darkmap: lightmap})`,  transition: 'background-image 0.5s' }}>
        
        <div className="row aligner" style={{height: '60%'}}>
          <div className="col-md-12">
            <div>
              {/* <span className="iconify header-icon" data-icon="la:globe-americas" data-inline="false"></span> */}
              <svg  className="iconify header-icon"  width={32} height={32} viewBox="0 0 32 32"><path fill={this.state.checked? "#fff":"#000"} d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c.338 0 .67.02 1 .05V6h2v-.574a11.03 11.03 0 0 1 6 4.27V13l1 2v1h1q-.001.55-.055 1.086c-.009.096-.029.188-.04.283c-.034.263-.068.524-.12.781c-.019.096-.044.19-.066.286c-.058.254-.12.506-.196.753q-.04.127-.084.252a11 11 0 0 1-.275.752q-.046.107-.094.213q-.166.383-.36.75q-.046.09-.097.174a11 11 0 0 1-1.076 1.592l-.09.111q-.293.349-.611.672l-.092.096a11 11 0 0 1-.678.617c-.033.028-.061.057-.095.084c-.234.192-.48.37-.729.543c-.039.027-.074.058-.113.084c-.24.16-.488.307-.74.45a10.9 10.9 0 0 1-3.871 1.302l4.011-3.024l1.1-1.1L24 20v-1l-2-1h-1l-2-2h-2l-1 1v1l-1 1v2l2 1.6l-1.977 4.351C9.414 26.453 5 21.735 5 16c0-3.408 1.559-6.459 4-8.479V8L8 9v2.2L9 15l5 2h1v-1l-3-1v-2h3l1-2.5L18 9V8l-3-2l-1.438-.719A11 11 0 0 1 16 5m-1 9v1h2v-1z"></path></svg>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:waxing-crescent-moon"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
            
          </div>
          
        </div>
        <span className="section-title pulsate">Swipe Up</span>
        
        
      </header>
      </div>
    );
  }
}

export default Header;

