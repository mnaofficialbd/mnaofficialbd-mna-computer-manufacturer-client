import {
  faClock,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
  faShopSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InfoFooter = () => {
  return (
    <section
      style={{
        background: `url(https://i.ibb.co/MVHdJ1d/bg-2.png)`,
        backgroundSize: "cover",
      }}
      className="footer p-10 bg-base-200 text-white "
    >
      <div>
        <span className="font-bold text-xl mb-3"> CONTACT INFO :</span>
        <p className="text-base">
          <FontAwesomeIcon
            className="mx-2"
            icon={faLocationDot}
          ></FontAwesomeIcon>
          Raozan, Chittagong, Bangladesh.
        </p>
        <p className="text-base">
          <FontAwesomeIcon className="mx-2" icon={faEnvelope}></FontAwesomeIcon>
          mnaofficialbd@gmail.com
        </p>
        <p className="text-base">
          <FontAwesomeIcon className="mx-2" icon={faPhone}></FontAwesomeIcon>
          +8801888-000000
        </p>
        <p className="text-base">
          <FontAwesomeIcon className="mx-2" icon={faGlobe}></FontAwesomeIcon>
          https://mnacomputermanuf.com
        </p>
      </div>
      <div>
        <span className="font-bold text-xl mb-3"> OPEN HOURS :</span>
        <p className="text-base">
          <FontAwesomeIcon className="mx-2" icon={faClock}></FontAwesomeIcon>
          Mon-Sat : 8:00am - 5:00pm
        </p>
        <p className="text-base">
          <FontAwesomeIcon
            className="mx-2"
            icon={faShopSlash}
          ></FontAwesomeIcon>
          Sunday is closed
        </p>
      </div>
      <div>
        <span className="font-bold text-xl mb-3"> FOLLOW US :</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/nurulazam.dev">
            <img
              className="mx-3"
              style={{ height: "40px", width: "40px" }}
              src="https://i.ibb.co/SBMtMC1/facebook.png"
              alt=""
            />
          </a>
          <a href="https://www.twitter.com/nurulazam_dev">
            <img
              className="mx-3"
              style={{ height: "40px", width: "40px" }}
              src="https://i.ibb.co/j4T8qbd/twitter.png"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/nurulazam_dev">
            <img
              className="mx-3"
              style={{ height: "40px", width: "40px" }}
              src="https://i.ibb.co/DkFxTMF/instagram.png"
              alt=""
            />
          </a>
        </div>

        <div className="grid grid-flow-col gap-4">
          <a href="https://nurulazam-dev.web.app/">
            <img
              className="mx-3"
              style={{ height: "40px", width: "40px" }}
              src="https://i.ibb.co/JqhBJYJ/google.png"
              alt=""
            />
          </a>
          <a href="https://www.github.com//nurulazam-dev">
            <img
              className="mx-3 bg-white"
              style={{ height: "40px", width: "40px" }}
              src="https://i.ibb.co/3Wjh3wv/github.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div>
        <span className="font-bold text-xl"> PAY WITH :</span>
        <div>
          <img
            style={{ height: "120px", width: "100px" }}
            src="https://i.ibb.co/cYd6mBQ/paymentmethod.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default InfoFooter;
