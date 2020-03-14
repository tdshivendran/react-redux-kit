import React from "react";
import PropTypes from "prop-types";
import { withStyles, Button } from "@material-ui/core";
import withProps from "../with-props";

import Clock from "./Clock";
import WelcomeNote from "./WelcomeNote";

const styles = () => ({
  wrapper: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },

  topContent: {},
  midContent: {},
  bottomContent: {},

  actions: { display: "flex", alignItems: "center" },
  title: { fontSize: "2rem" },
  button: { margin: "8px" }
});

const Page1 = props => {
  const { classes, onAppReset } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.topContent}>
        <Clock />
      </div>

      <div className={classes.midContent}>
        <WelcomeNote />
      </div>

      <div className={classes.bottomContent}>
        <div className={classes.actions}>
          <Button
            onClick={onAppReset}
            variant="contained"
            className={classes.button}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

Page1.defaultProps = {
  onAppReset: () => {}
};
Page1.propTypes = {
  onAppReset: PropTypes.func
};

const Styled = withStyles(styles, { withTheme: true })(Page1);
export default withProps.withProps("HomeContainer")(Styled);
