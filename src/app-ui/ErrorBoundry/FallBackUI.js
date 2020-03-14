import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Button } from "@material-ui/core";
import withProps from "../with-props";

const styles = () => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  actions: { display: "flex", alignItems: "center" },
  title: { fontSize: "2rem" },
  button: { margin: "8px" }
});

const FallBackUI = props => {
  const { classes, onAppReset } = props;

  return (
    <div>
      <div className={classes.content}>
        <Typography className={classes.title}>Something Went Wrong</Typography>
        <div className={classes.actions}>
          <Button
            color="secondary"
            onClick={onAppReset}
            variant="contained"
            className={classes.button}
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

FallBackUI.defaultProps = {
  onAppReset: () => {}
};
FallBackUI.propTypes = {
  onAppReset: PropTypes.func
};

const Styled = withStyles(styles, { withTheme: true })(FallBackUI);
export default withProps.withProps("AppErrorContainer")(Styled);
