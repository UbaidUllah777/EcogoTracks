const CalculationOptions = [
  {
    question: "How often do you use transportation on a daily basis?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 1 },
      { label: "Occasionally", value: 2 },
    ],
  },
  {
    question: "What type of vehicle do you primarily use for transportation?",
    options: [
      { label: "Bicycle", value: 0 },
      { label: "Walking", value: 0 },
      { label: "Car", value: 4 },
      { label: "Public transportation", value: 2 },
    ],
  },
  {
    question: "How far is your average daily commute (round trip)?",
    options: [
      { label: "Less than 5 miles", value: 1 },
      { label: "5-10 miles", value: 2 },
      { label: "10-20 miles", value: 3 },
      { label: "More than 20 miles", value: 4 },
    ],
  },
  {
    question: "How often do you carpool or rideshare with others?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 1 },
      { label: "Occasionally", value: 2 },
      { label: "Frequently", value: 3 },
    ],
  },
  {
    question: "Do you own or use a motorcycle for transportation?",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 3 },
    ],
  },
  {
    question: "How often do you use air travel for long-distance trips?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 4 },
      { label: "Occasionally", value: 8 },
      { label: "Frequently", value: 12 },
    ],
  },
  {
    question: "Do you use a gas or diesel-powered vehicle?",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 5 },
    ],
  },
  {
    question: "Do you use public transportation powered by electricity?",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    question: "How often do you use a hybrid or electric vehicle?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 1 },
      { label: "Occasionally", value: 2 },
      { label: "Frequently", value: 3 },
    ],
  },
  {
    question: "How often do you walk or bike for short distances?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 1 },
      { label: "Occasionally", value: 2 },
      { label: "Frequently", value: 3 },
    ],
  },
  {
    question: "How often do you recycle?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 1 },
      { label: "Occasionally", value: 2 },
      { label: "Frequently", value: 3 },
    ],
  },
  {
    question:
      "How often do you plant trees or participate in reforestation efforts?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 1 },
      { label: "Occasionally", value: 2 },
      { label: "Frequently", value: 3 },
    ],
  },
];

export default CalculationOptions;
