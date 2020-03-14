import React from "react";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  pageContainer: { display: "flex" },

  children: { flex: "1 1 auto" }
});

const AppWrapper = props => {
  const { classes, children } = props;
  return (
    <div className={classes.pageContainer}>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default withStyles(styles)(AppWrapper);
