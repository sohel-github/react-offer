import React, { useRef, useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import load from "./images/load.gif";

import "./App.css";

const App = () => {
  //const [randNumber, setRandNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const form = useRef();

  // const getRandomNumber = () => {
  //   const min = 1000;
  //   const max = 10000;
  //   const rand = Math.floor(Math.random() * (max - min + 1) + min);
  //   setRandNumber(rand);
  // };

  function makeid(length) {
    var result = [];
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  }

  useEffect(() => {
    //getRandomNumber();
    makeid(7);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(false);
    emailjs
      .sendForm(
        "service_icvydj9",
        "template_vcos6u2",
        form.current,
        "PtrcgbaA8S58AGpgD"
      )
      .then(
        (result) => {
          //console.log(result);
          setLoading(false);
          setSuccessMsg(true);
        },
        (error) => {
          console.log(error);
        }
      );
    form.current.reset();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-md-6 col-xs-12">
          <div id="paynow-box">
            <Flip top>
              <div id="logo">
                <Zoom top>
                  <img src={logo} alt="Walletmix Logo" />
                </Zoom>
              </div>
            </Flip>
            {/* <Fade left>
              <h3 className="com-name">Walletmix</h3>
            </Fade> */}
            <Fade bottom>
              <h1 className="title">
                Please provide us with the following information to get your
                EIDI
              </h1>
            </Fade>

            {loading ? <img src={load} alt="load" /> : ``}
            {successMsg ? (
              <p className="suc">
                Your Eidi has been sent to your mail. You will be able to
                activate your Eidi from 8 May 2022. To get your Eidi call
                0197-400-22-44
              </p>
            ) : (
              <span></span>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Your Name</label>
                    <input type="text" name="name" required />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Email Address</label>
                    <input type="email" name="email" required />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Phone Number</label>
                    <input type="number" name="number" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Company Name</label>
                    <input type="text" name="company" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Facebook Page Link</label>
                    <input type="url" name="facebook" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Your Details</label>
                    <input type="text" name="detail" />
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                name="rand_cupon"
                value={makeid(7)}
                readOnly
              />
              <div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="my-form">
                      <button
                        type="submit"
                        id="checkout"
                        className="submit-btn"
                      >
                        Send My Eidi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <p className="verified">Verified by Walletmix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
