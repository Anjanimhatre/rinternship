import React from "react";
import Navbar from "./mycomponents/Navbar.js";
import ResultContainer from "./mycomponents/ResultContainer.js";

function App() {
  const handlePractice = () => {
    alert("Practice More button clicked!");
  };

  const handleVisit = () => {
    alert("Visit button clicked!");
  };
  return (
    <>

    <div>
      <Navbar />
    </div>
    <div>
    <ResultContainer
      marks={80}
      accuracy={85}
      topScore={95}
      onPractice={handlePractice}
      onVisit={handleVisit}
    />
  </div>

  </>
  );
}

export default App;
