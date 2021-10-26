import React from "react";

import './header.css';

const Header = ({onServiceChange}) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="https://www.google.com/">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="https://www.google.com/">People</a>
        </li>
        <li>
          <a href="https://www.google.com/">Planets</a>
        </li>
        <li>
          <a href="https://www.google.com/">Starships</a>
        </li>
      </ul>
      <button className="btn btn-primary btn-sm" onClick={onServiceChange}>Change Service</button>
    </div>
  );
};

export default Header;