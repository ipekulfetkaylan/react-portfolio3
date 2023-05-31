import "./intro.css";
import {image} from "../../data"

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">John Doe</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Front End Developer</div>
              <div className="i-title-item">React</div>
              <div className="i-title-item">Javascript</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            blanditiis maxime obcaecati aliquid et. 
            odit illum obcaecati, illo enim, quae voluptas blanditiis vitae?
            Cupiditate ullam odio, corrupti architecto eum et?
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={image} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
