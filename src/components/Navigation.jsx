import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul>
        {location.pathname === "/" ? (
          <li>
            <Link to="/archives">Arsip</Link>
          </li>
        ) : (
          <li>
            <Link to="/">Back to Home</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
