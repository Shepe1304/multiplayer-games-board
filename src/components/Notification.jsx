import "./Notification.css";
import shepe from "../assets/images/shepeWithoutGlasses2.png";
import xmark from "../assets/images/xmark-solid.svg";

const Notification = (props) => {
  return (
    <div className="notification--screen_wrapper">
      <div className="notification">
        <div
          className="notification--xmark"
          onClick={() => {
            props.setShowNotification(false);
          }}
        >
          <img src={xmark} alt="" />
        </div>
        <div className="notification--first_line">
          Welcome to Shepe's website!
        </div>
        <div className="notification--main_text">
          <div>Click on a card to try the game inside.</div>
          <div>There are filter buttons for your convenience.</div>
          <div>Scroll for the filter you want!</div>
        </div>
        <div className="notification--image">
          <img src={shepe} alt="" />
        </div>
        <div className="notification--last_line">Have fun!</div>
      </div>
    </div>
  );
};

export default Notification;
