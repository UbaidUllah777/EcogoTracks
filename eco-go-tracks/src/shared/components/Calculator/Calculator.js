import React, { useState } from "react";
import PropTypes from "prop-types";

import "../UIElements/Button.css";

const Calculator = ({ CalculationOptions }) => {
  const [step, setStep] = useState(1);
  const [dataFrequency, setDataFrequency] = useState("");
  const [options, setOptions] = useState({});
  const optionCount = CalculationOptions.length; // Total number of options
  const [result, setResult] = useState(null);

  const handleDataFrequencySelect = (frequency) => {
    setDataFrequency(frequency);
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
      return !options[optionName];
    }
  };

  const handleNext = () => {
    if (step < optionCount) {
      setStep(step + 1);
    } else if (step === optionCount) {
      // Calculate and display results
      const total = Object.values(options).reduce(
        (acc, val) => acc + parseFloat(val),
        0
      );
      setResult(total.toFixed(2));
      setStep(step + 1); // Increment step to move to the next (results) step
    } else {
      setStep(1); // Reset to the initial state after seeing the results
    }
  };

  const handleReset = () => {
    setStep(1);
    setDataFrequency("");
    setOptions({});
    setResult(null);
  };

  return (
    <div className="container BGgray center">
      <h2 className="globalHeading2">Carbon Footprint Calculator</h2>

      {step === 1 && (
        <div>
          <h3 className="globalHeading3">Step 1: Select Data Frequency</h3>
          <label>
            Select data frequency:
            <select onChange={(e) => handleDataFrequencySelect(e.target.value)}>
              <option value="">Select</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </label>
        </div>
      )}

      {step !== 1 && step <= optionCount && (
        <div key={step}>
          <h3 className="globalHeading3">
            Step {step}: Enter Option {CalculationOptions[step - 2].label}
          </h3>
          {CalculationOptions[step - 2].values.map((optionValue) => (
            <label key={optionValue}>
              <input
                type="radio"
                name={`option${step}`}
                value={optionValue}
                onChange={(e) =>
                  handleOptionChange(`option${step}`, e.target.value)
                }
              />
              {optionValue}
            </label>
          ))}
        </div>
      )}

      {result === null && (
        <button
          className="primary-button"
          onClick={handleNext}
          disabled={isNextDisabled()}
        >
          {step < optionCount ? "Next" : "See Results"}
        </button>
      )}

      {result !== null && (
        <div>
          <h3>Calculated Carbon Footprint:</h3>
          <p>{result} units</p>
          <button className="secondary-button" onClick={handleReset}>
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
      label: PropTypes.string.isRequired,
      values: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Calculator;
