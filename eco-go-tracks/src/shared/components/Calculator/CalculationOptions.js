const CalculationOptions = [
  {
    question: "How often do you use transportation on a daily basis?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 0.001 },
      { label: "Occasionally", value: 0.002 },
    ],
  },
  {
    question: "What type of vehicle do you primarily use for transportation?",
    options: [
      { label: "Bicycle", value: 0 },
      { label: "Walking", value: 0 },
      { label: "Car", value: 0.002 },
      { label: "Public transportation", value: 0.00002 },
    ],
  },
  {
    question: "How far is your average daily commute (round trip)?",
    options: [
      { label: "Less than 5 miles", value: 0.001 },
      { label: "5-10 miles", value: 0.002 },
      { label: "10-20 miles", value: 0.003 },
      { label: "More than 20 miles", value: 0.005 },
    ],
  },
  {
    question: "How often do you carpool or rideshare with others?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 0.001 },
      { label: "Occasionally", value: 0.002 },
      { label: "Frequently", value: 0.003 },
    ],
  },
  {
    question: "Do you own or use a motorcycle for transportation?",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 0.003 },
    ],
  },
  {
    question: "How often do you use air travel for long-distance trips?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 0.004 },
      { label: "Occasionally", value: 0.008 },
      { label: "Frequently", value: 0.012 },
    ],
  },
  {
    question: "Do you use a gas or diesel-powered vehicle?",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 0.05 },
    ],
  },
  {
    question: "Do you use public transportation powered by electricity?",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 0.0001 },
    ],
  },
  {
    question: "How often do you use a hybrid or electric vehicle?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 0.0001 },
      { label: "Occasionally", value: 0.0002 },
      { label: "Frequently", value: 0.0003 },
    ],
  },
  {
    question: "How often do you walk or bike for short distances?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 0.0001 },
      { label: "Occasionally", value: 0.0002 },
      { label: "Frequently", value: 0.0003 },
    ],
  },
  {
    question: "How often do you recycle?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 0.0001 },
      { label: "Occasionally", value: 0.0002 },
      { label: "Frequently", value: 0.0003 },
    ],
  },
];

export default CalculationOptions;
