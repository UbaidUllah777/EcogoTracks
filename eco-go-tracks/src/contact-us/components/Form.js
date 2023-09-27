import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <div classNameName="container">
      <div className="center BGgray">
        <div className="row">
          <div className="contactheading col-12">
            <h1>For More Info, Use the Contact Form Provided.</h1>
          </div>
        </div>
      </div>
      <div classNameName="row">
        <div classNameName="col-12">
          <form>
            <div className="form-row">
              <div className="form-group col-12">
                <label for="inputname">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group col-12">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="form-group col-12">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Enter your address"
              />
            </div>
            <div className="form-group col-12">
              <label for="inputAddress2">Message</label>
              <textarea
                rows="4"
                type="message"
                className="form-control"
                id="inputmessage"
                placeholder="Write your message here"
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
            <button type="submit" className="btn btn-primary">
              Send Message!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
