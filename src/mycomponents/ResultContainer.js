import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faClock, faLightbulb, faComments } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

import My2 from "./static/my2.png"
import My from "./static/my.jpg"
import Result from "./static/result.png"
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
  labels: ["Slot 1", "Slot 2", "Slot 3", "Slot 4", "Slot 5", "Slot 6", "Slot 7"], // X-axis
  datasets: [
    {
      label: "Accuracy (%)",
      data: [50, 70, 30, 85, 60, 90, 40],
      backgroundColor: "rgba(98, 0, 255, 0.6)", // Bar colors
    },
  ],
};

// Graph options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Accuracy Across Slots",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Slots",
      },
    },
    y: {
      title: {
        display: true,
        text: "Accuracy (%)",
      },
      ticks: {
        callback: (value) => `${value}%`, // Add % symbol to Y-axis labels
      },
    },
  },
};
const sections = [
  { percentage: "25%", text: "Based on facts" },
  { percentage: "50%", text: "Based on Analysis" },
  { percentage: "75%", text: "Based on Elimination" },
  { percentage: "100%", text: "Based on Guess" },
];
const ResultContainer = ({ marks, accuracy, topScore, onPractice, onVisit }) => {
  return (
    <>
 

    <div className="main">
    
    <div className="result-container">
    {/* Left Container */}
    <div className="left-container">
      <img src={Result } className="img" alt="Description"></img>
    <h2 className="result-heading">Your Result !</h2>
    <h3 className="result"> All your insights & details in one place</h3>
      <div className="result-card">
        <div className="marks-accuracy-section">
          <div className="question-pad">
            <span className="status-text">
              <FontAwesomeIcon icon={faCheckCircle} className="correct-tick-icon" />
              You've Passed
            </span>
          </div>
          <div className="marks-accuracy-details">
          <FontAwesomeIcon icon={faTasks} className="tasks-icon" />
            <span className="marks">
              <strong>136</strong>
              <span className="divider">/</span>
              <span className="total-marks">240</span>
            </span>
            <span className="accuracy-badge">76% ACCURACY</span>
          </div>
        </div>

        <div className="top-score-section">
          <p className="top-score-title">Top Score</p>
          <div className="top-score-content">
            <span className="score">230</span>
            <span className="total-marks">/ 240</span>
            <span className="accuracy-green">92% ACCURACY</span>
          </div>
          <p className="top-score-by">By <strong>Parth Akotkar</strong></p>
        </div>

        <div className="improve-section">
          <p className="improve">Improve your Marks</p>
          <p className="result">Improve your score by practicing more.</p>
          <button className="practice-button">Practice more</button>
        </div>
      </div>

      <div className="visit-container">
        <h2 className="visit">Revisit Paper</h2>
        <h3 classNameresult="result">Challenge your friends by simply sharing a link to this test</h3>
        <button className="visit-button">
          <FontAwesomeIcon icon={faFileAlt} className="document-icon" />
          Visit
        </button>
        <p className="instructions">
          Instructions for how to upload your handwritten material is given.
        </p>
      </div>
    </div>


      </div>
      {/* Right Container */}
      <div className="right-container">
        {/* Row 1: Company Accuracy */}
        <div className="row row-1">
          <div className="card">
            <h3>Company Accuracy</h3>
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
          </div>
          <div className="card">
            <h3>Company Accuracy</h3>
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
          </div>
          <div className="card">
            <h3>Company Accuracy</h3>
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
          </div>
        </div>

        {/* Row 2: Improvements, Response Time, Approach, Suggestions */}
        <div className="row row-2">
          {/* Improvements */}
          <div className="card">
            <h3 className="result"><FontAwesomeIcon icon={faLightbulb} className="icon" />Improvements</h3>
            <p>Subject Understanding</p>
            <div className="buttons">
              <button className="subject-button geography">Geography</button>
              <button className="subject-button politics">Politics</button>
              <button className="subject-button current-affairs">Current Affairs</button>
              <button className="subject-button general-studies">General Studies</button>
              <button className="subject-button mathematics">Mathematics</button>
              <button className="subject-button social-studies">Social Studies</button>
              <button className="subject-button english">English Literature</button>
              <button className="subject-button history">Indian History</button>
              <button className="subject-button economics">Economics</button>
            </div>
          </div>
          {/* Response Time */}
          <div className="card">
            <h3><FontAwesomeIcon icon={faClock} className="icon" />Response Time</h3>
            
            <div className="content">
              <span className="back">std Tim - 2min</span>
        <div className="time-info section dash">
          <p className="answers-line">
            <span className="percentage">60</span><span className="greytext">%Ans took</span>{" "}
            <span className="arrow">↑</span>
            <span className="time">2min</span>
          </p>
        </div>
        <div className="std-time">
          <hr />
          <p className="slow-message">
            <span className="you">You are{" "}
            <span className="slow">slow</span>!</span>
          </p>
        </div>
    
      </div>
          </div>
          {/* Approach */}
          <div className="card">
            <h3> <FontAwesomeIcon icon={faLightbulb} className="icon" />Approach</h3>
            <div className="staircase">
        {sections.map((section, index) => (
          <div key={index} className="section">
            <span className="number">{section.percentage}</span>
            <span className="fact">{section.text}</span>
          </div>
        ))}
      </div>
          </div>
          {/* Suggestions */}
          <div className="card">
            <h3> <FontAwesomeIcon icon={faComments} className="icon" />Suggestions</h3>
            <div className="container">
      {/* First Row: Headings */}
      <div className="row heading-row">
        <div className="cell">Q 1-12</div>
        <div className="cell">Q 12-32</div>
        <div className="cell">Q32-40</div>
      </div>

      {/* Second Row: Numbers */}
      <div className="row ">
        <div className="cell bold-text section dash you">40 sec</div>
        <div className="cell bold-text section dash you">1.5 min</div>
        <div className="cell bold-text section dash you">3 min</div>
      </div>

      {/* Third Row: Difficulty Levels */}
      <div className="row">
        <div className="cell difficulty easy">Easy</div>
        <div className="cell difficulty medium">Medium</div>
        <div className="cell difficulty hard">Hard</div>
      </div>
    </div>
          </div>
        </div>

        {/* Row 3: Company Accuracy Bar Graph and Time Taken */}
        <div className="row row-3">
          {/* Bar Graph */}
          <div className="card">
            <h3>Company Accuracy</h3>
            <div className="">
            <div className="graph-with-time-slots">
   
      <div className="time-slots">
        <div className="slot grey">10 min</div>
        <div className="slot blue">15 min</div>
        <div className="slot grey">30 min</div>
        <div className="slot grey">45 min</div>
      </div>

      {/* Bar Graph */}
      <div className="graph-container">
        <Bar data={data} options={options} />
      </div>
    </div>
            </div>
          </div>
          {/* Time Taken */}
          <div className="card">
            <h3><FontAwesomeIcon icon={faClock} className="icon" />Time Taken</h3>
            <div className="mar">
            <img src={My} alt="Description" className="mar"/>
            <p className="result">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <img src={My2} alt="Description" />
            <p className="result">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ResultContainer;
