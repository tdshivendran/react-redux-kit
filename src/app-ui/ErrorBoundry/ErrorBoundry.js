import React, { Component } from "react";

import { withStyles } from "@material-ui/core";

import FallBackUI from "./FallBackUI";

const { NODE_ENV } = process.env;
const isLocalHost = NODE_ENV === "development";

const styles = () => ({});

class ErrorBoundry extends Component {
  state = { error: null };

  componentDidCatch = error => {
    this.setState({ error });
  };

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (!error) return children;

    return <FallBackUI />;
  }
}

const NoErrorBoundary = props => props.children;

const RenderComp = isLocalHost ? NoErrorBoundary : ErrorBoundry;

const Styled = withStyles(styles)(RenderComp);
export default Styled;
