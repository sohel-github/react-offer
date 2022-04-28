import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import load from "./images/load.gif";

import "./App.css";

const App = () => {
  const [randNumber, setRandNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const form = useRef();

  const getRandomNumber = () => {
    const min = 1000;
    const max = 10000;
    const rand = Math.floor(Math.random() * (max - min + 1) + min);
    setRandNumber(rand);
  };

  useEffect(() => {
    getRandomNumber();
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
            <div id="logo">
              <img src={logo} alt="Walletmix Logo" />
            </div>
            <h3 className="com-name">Walletmix</h3>
            <h1>Send us your information.</h1>

            {loading ? <img src={load} alt="load" /> : ``}
            {successMsg ? (
              <p className="suc">
                An Email has been sent. please check your email for your cupon
                code.
              </p>
            ) : (
              <span></span>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Name</label>
                    <input type="text" name="name" required />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Email</label>
                    <input type="email" name="email" required />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Phone</label>
                    <input type="number" name="number" required />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Company</label>
                    <input type="text" name="company" required />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Facebook Page Link</label>
                    <input type="url" name="facebook" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group my-form">
                    <label>Your Details</label>
                    <input type="text" name="detail" required />
                  </div>
                </div>
              </div>

              <input
                type="hidden"
                name="rand_cupon"
                value={randNumber}
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
                        Submit
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
