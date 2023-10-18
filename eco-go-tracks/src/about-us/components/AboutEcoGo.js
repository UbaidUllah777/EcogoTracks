import React from "react";

import Card from "../../shared/components/UIElements/Card";

import "./AboutEcoGo.css";

const AboutEcoGo = () => {
  return (
    <React.Fragment>
      <div className="container ">
        <div className="row ">
          <div className="col-12 center">
            <h1 className="globalHeading4">
              Green Commuting for a Sustainable Tomorrow
            </h1>
            <p className="AboutEcoGoDesc">
              Green commuting for a sustainable tomorrow" is a concept that
              focuses on adopting environmentally friendly transportation
              practices to address the challenges of climate change and{" "}
              <span className="secondary-color boldText">
                {" "}
                promote sustainable living
              </span>{" "}
              Commuting, which involves the daily travel of individuals to work,
              school, or other destinations, is a significant contributor to
              greenhouse gas emissions and other environmental issues. To create
              a more sustainable future, there are several key elements and
              strategies associated with green commuting.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid center">
        <div className="row m-2">
          <div className="col-md-6 col-12">
            <Card>
              <h1 className="globalHeading4">Public Transportation</h1>
              <p
                style={{ textAlign: "justify", fontSize: "1.1rem" }}
                className="AboutEcoGoDesc"
              >
                Encouraging the use of buses, trams, subways, and trains can
                significantly reduce the number of cars on the road. Investing
                in efficient public transportation systems is a crucial step.
              </p>
            </Card>
          </div>

          <div className="col-md-6 col-12">
            <Card>
              <h1 className="globalHeading4">Biking and Walking</h1>
              <p
                style={{ textAlign: "justify", fontSize: "1.1rem" }}
                className="AboutEcoGoDesc"
              >
                Promoting cycling and walking not only reduces emissions but
                also contributes to improved personal health. Building bike
                lanes and pedestrian-friendly infrastructure is important
              </p>
            </Card>
          </div>
        </div>

        <div className="row m-2">
          <div className="col-md-6 col-12">
            <Card>
              <h1 className="globalHeading4">Electric and Hybrid Vehicles</h1>
              <p
                style={{ textAlign: "justify", fontSize: "1.1rem" }}
                className="AboutEcoGoDesc"
              >
                Encouraging the use of electric and hybrid cars reduces the
                carbon footprint of commuting. Government incentives and
                charging infrastructure are essential for their adoption of
                electric vehicals based tranportations
              </p>
            </Card>
          </div>

          <div className="col-md-6 col-12">
            <Card>
              <h1 className="globalHeading4">Education and Awareness</h1>
              <p
                style={{ textAlign: "justify", fontSize: "1.1rem" }}
                className="AboutEcoGoDesc"
              >
                Raising awareness about commuting's environmental impact and
                benefits is key to fostering behavioral change and promoting
                sustainability. Informed individuals can make eco-conscious
                choices, paving the way for a more sustainable future.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutEcoGo;
