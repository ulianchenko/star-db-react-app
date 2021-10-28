import React from "react";
import PropTypes from "prop-types";

import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
        <div className="col-md-6">
          {left}
        </div>
        <div className="col-md-6">
          {right}
        </div>
      </div>
  );
};

Row.propTypes = {
  left: PropTypes.node, //  It means: "Is left a something, that can be rendered (number, string, element or an array consists of this types (https://ru.reactjs.org/docs/typechecking-with-proptypes.html))?"
  right: PropTypes.node
};

export default Row;