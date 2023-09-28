import React from "react";
import "./GlobalFacts.css";

const GlobalFacts = () => {
  return (
    <div className="container">
      <div className="row center pb-5 p">
        <div className="col-md-12">
          <h1 className="globalHeading2">
            Gobal insights About Carbon Emissions
          </h1>
        </div>
      </div>
      <div className="row pb-5 mx-2">
        <div className="col-md-8 vertical-line">
          <p>
            <span className="primary-color boldText">Carbon emissions</span>,
            often referred to as carbon dioxide (CO2) emissions, encompass the
            release of carbon compounds into the atmosphere. These compounds
            include carbon dioxide itself and other greenhouse gases such as
            methane and nitrous oxide. Carbon emissions primarily result from
            human activities, particularly the burning of fossil fuels like
            coal, oil, and gas, which power industries, transportation, and
            homes. Understanding and monitoring carbon emissions is crucial for
            assessing environmental impact and implementing strategies to
            mitigate climate change.
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="globalFactsImg"
            src="home-blog-image.jpg"
            alt="globalFactsImg"
          />
        </div>
      </div>

      <div className="row pb-5  mx-2">
        <div className="col-md-8 vertical-line">
          <p>
            <span className="primary-color boldText">
              The escalating levels{" "}
            </span>
            of carbon emissions have profound repercussions on our planet's
            climate and overall well-being. Excessive carbon dioxide in the
            atmosphere traps heat, contributing to global warming and climate
            change. This, in turn, leads to more frequent and severe weather
            events, rising sea levels, disruptions in ecosystems, and threats to
            biodiversity. It's imperative to curb carbon emissions to mitigate
            these adverse effects and transition to sustainable energy sources
            and eco-conscious practices that promote a cleaner, healthier
            environment for current and future generations.
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="globalFactsImg"
            src="home-blog-image.jpg"
            alt="globalFactsImg"
          />
        </div>
      </div>

      <div className="row pb-5  mx-2">
        <div className="col-md-8 vertical-line">
          <p>
            <span className="primary-color boldText">
              The global challenge{" "}
            </span>
            addressing of carbon emissions necessitates a collective effort
            involving governments, businesses, communities, and individuals.
            International agreements, such as the Paris Agreement, set the stage
            for collaborative action to limit global warming and reduce carbon
            emissions to sustainable levels. Strategies encompass transitioning
            to renewable energy sources, enhancing energy efficiency, promoting
            sustainable transportation, adopting carbon capture technologies,
            and fostering a culture of responsible consumption. By aligning
            efforts and innovating towards a low-carbon future, we can pave the
            way for a sustainable world and preserve the beauty and balance of
            our planet.
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="globalFactsImg"
            src="home-blog-image.jpg"
            alt="globalFactsImg"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalFacts;
