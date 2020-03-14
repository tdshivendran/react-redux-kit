import React from "react";
// import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

const styles = () => ({
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Page1 = props => {
  const { classes } = props;

  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className={classes.content}>
      <Typography variant="h2">{time}</Typography>
    </div>
  );
};

Page1.defaultProps = {};
Page1.propTypes = {};

const Styled = withStyles(styles, { withTheme: true })(Page1);
export default Styled;
