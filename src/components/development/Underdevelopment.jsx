import React from "react";
import "./development.css";

function Underdevelopment() {
  return (
    <div className="development_container">
      <div className="illistration_container">
          <img src="./animations/underdevelopment.svg" alt="" className="illistrations"/>
          <h2 className="heading">Website Under Construction</h2>
      </div>
      <p className="description_dev">Our page is under development, working hard to bring you an enhanced experience soon. Stay tuned for exciting updates and improvements. Thank you for your patience!</p>
    </div>
  );
}

export default Underdevelopment;
