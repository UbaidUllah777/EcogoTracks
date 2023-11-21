import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <div className="container">
      <div className="center BGgray">
        <div className="row">
          <div className="contactheading col-12">
            <h1>For More Info, Use the Contact Form Provided.</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form>
            <div className="form-row">
              <div className="form-group col-12">
                <label htmlFor="inputname">Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group col-12">
                <label htmlFor="inputEmail4">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="form-group col-12">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Enter your address"
              />
            </div>
            <div className="form-group col-12">
              <label htmlFor="inputAddress2">Message*</label>
              <textarea
                rows="4"
                type="message"
                className="form-control"
                id="inputmessage"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  Accept our terms and conditions!
                </label>
              </div>
            </div>
            <button type="submit" className="primary-button mt-3">
              Send Message!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
