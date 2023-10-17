//importing libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// importing style
import "./Calculator.css";
import "../UIElements/Button.css";

const Calculator = ({ CalculationOptions }) => {
  const [step, setStep] = useState(1);
  const [dataFrequency, setDataFrequency] = useState("");
  const [options, setOptions] = useState({});
  const optionCount = CalculationOptions.length;
  const [result, setResult] = useState(null);
  const [multiplier, setMultiplier] = useState(1);

  const handleDataFrequencySelect = (frequency) => {
    setDataFrequency(frequency);
    setMultiplier(getMultiplierForFrequency(frequency));
  };

  const getMultiplierForFrequency = (frequency) => {
    switch (frequency) {
      case "daily":
        return 1;
      case "weekly":
        return 7;
      case "monthly":
        return 30;
      default:
        return 1;
    }
  };

  const handleOptionChange = (optionName, value) => {
    setOptions({
      ...options,
      [optionName]: parseFloat(value),
    });
  };

  const isNextDisabled = () => {
    if (step === 1) {
      return dataFrequency === "";
    } else {
      const optionName = `option${step}`;
      const optionValues = CalculationOptions[step - 2].options.map(
        (option) => option.value
      );

      return !options[optionName] && !optionValues.includes(0);
    }
  };

  const handleNext = () => {
    if (step < optionCount) {
      setStep(step + 1);
    } else if (step === optionCount) {
      const total = Object.values(options).reduce(
        (acc, val) => acc + parseFloat(val),
        0
      );
      setResult((total * multiplier).toFixed(2));
      setStep(step + 1);
    } else {
      setStep(1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setDataFrequency("");
    setOptions({});
    setResult(null);
  };

  return (
    <div className="container BGgray ">
      <div className="row center">
        <div className="col blink">
          <h2 className="calculatorHeading blinking-text">
            Carbon Footprint Calculator
          </h2>
        </div>
      </div>

      {step === 1 && (
        <div className="row">
          <div className="col-12">
            <h3 className="globalHeading4Primary mt-5">
              Step 1: Select Data Frequency
            </h3>
            <label>
              <div className="custom-select">
                <select
                  className="combobox"
                  onChange={(e) => handleDataFrequencySelect(e.target.value)}
                >
                  <option key={"select"} value="">
                    Select data frequency:
                  </option>
                  <option key={"daily"} value="daily">
                    Daily
                  </option>
                  <option key={"weekly"} value="weekly">
                    Weekly
                  </option>
                  <option key={"monthly"} value="monthly">
                    Monthly
                  </option>
                </select>
              </div>
            </label>
          </div>
        </div>
        // RowEND
      )}

      {step !== 1 && step <= optionCount && (
        <div key={step} className="calculator-question mt-5">
          <h3 className="globalHeading4Primary">
            Step {step}: {CalculationOptions[step - 2].question}
          </h3>
          {CalculationOptions[step - 2].options.map((option) => (
            <div key={option.label} className="calculator-option-label">
              <input
                type="radio"
                name={`option${step}`}
                value={option.value}
                onChange={(e) =>
                  handleOptionChange(`option${step}`, e.target.value)
                }
              />
              {"   "}
              {option.label}
            </div>
          ))}
        </div>
      )}

      {result === null && (
        <button
          className="primary-button CalculatorBtn"
          onClick={handleNext}
          disabled={isNextDisabled()}
        >
          {step < optionCount ? "Next" : "See Results"}
        </button>
      )}

      {result !== null && (
        <div>
          <h3 className="globalHeading3Primary  mt-5">
            Calculated Carbon Footprint:
          </h3>
          <p>{result} units</p>
          <button
            className="secondary-button CalculatorBtn"
            onClick={handleReset}
          >
            Reset Calculator
          </button>
        </div>
      )}
    </div>
  );
};

Calculator.propTypes = {
  CalculationOptions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Calculator;
