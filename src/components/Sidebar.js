import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush">
        <Link to="" className="list-group-item list-group-item-action bg-light">
          FEED
        </Link>
        <Link to="" className="list-group-item list-group-item-action bg-light">
          PROFILE
        </Link>
        <Link to="/initial-registration-form" className="list-group-item list-group-item-action bg-light">
          IRF
        </Link>
        <Link to="" className="list-group-item list-group-item-action bg-light">
          SEARCH
        </Link>
        <Link to="" className="list-group-item list-group-item-action bg-light">
          REPORTS
        </Link>
        <Link to="" className="list-group-item list-group-item-action bg-light">
          SCHEDULE
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
