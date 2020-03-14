import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const Warning = props => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const { text, contract } = props;

  const displayText = text || `Missing Prop Container for ${contract}`;

  return (
    <div style={style}>
      <Typography variant="h4">{displayText}</Typography>
    </div>
  );
};

Warning.defaultProps = {
  text: "",
  contract: ""
};

Warning.propTypes = {
  text: PropTypes.string,
  contract: PropTypes.string
};

export default Warning;
