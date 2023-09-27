const CalculationOptions = [
  {
    question: "How often do you use transportation on a daily basis?",
    options: [
      { label: "Rarely", value: 1 },
      { label: "Occasionally", value: 2 },
      { label: "Daily", value: 3 },
    ],
  },
  {
    question: "What type of transportation do you use most frequently?",
    options: [
      { label: "Car", value: 0.5 },
      { label: "Public transit", value: 0.3 },
      { label: "Bike", value: 0.1 },
      { label: "Walk", value: 0.05 },
    ],
  },
  {
    question: "How long is your average commute (one way)?",
    options: [
      { label: "Less than 10 km", value: 0.2 },
      { label: "10-20 km", value: 0.5 },
      { label: "More than 20 km", value: 0.8 },
    ],
  },
  // Add more questions and options as needed
];

export default CalculationOptions;
