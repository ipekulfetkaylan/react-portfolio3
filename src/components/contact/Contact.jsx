import "./contact.css";
import phone from "../../image/phone.png";
import map from "../../image/location-pin.png";
import mail from "../../image/gmail.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";



const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={mail} alt="" />
              contact@lama.dev
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={map} alt="" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form >
            <input style={{backgroundColor:darkMode && "#333"}}  type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea  style={{backgroundColor:darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
