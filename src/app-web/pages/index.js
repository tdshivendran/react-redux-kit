import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import AppWrapper from "./wrapper";
import UIComponents from "../../app-ui";
import Core from "../../app-core";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

class Pages extends Component {
  state = {};

  componentDidMount = () => {
    const { appStart } = this.props;

    appStart();
  };

  render() {
    const { theme } = this.props;

    return (
      <UIComponents.Theme type={theme}>
        <Helmet>
          <title>React App</title>
        </Helmet>
        <UIComponents.ErrorBoundry>
          <AppWrapper>
            <Route exact path="/" component={UIComponents.Page1} />
          </AppWrapper>
          <ToastContainer />
        </UIComponents.ErrorBoundry>
      </UIComponents.Theme>
    );
  }
}

Pages.defaultProps = {
  appStart: () => {}
};

Pages.propTypes = {
  appStart: PropTypes.func
};

const mapState = () => ({});

const mapDispatch = dispatch => ({
  appStart: () => dispatch({ type: Core.reduxModuleOne.actions.RUN_APP_START })
});

export default withRouter(connect(mapState, mapDispatch)(Pages));
