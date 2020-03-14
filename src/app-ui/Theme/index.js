/* eslint-disable no-plusplus */
import React, { Component } from "react";
import { jssPreset, StylesProvider } from "@material-ui/core/styles";
import { create } from "jss";
import PropTypes from "prop-types";

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import makeBaseTheme from "./createMuiTheme";

/** *****************************************************
 * Fix for jss classnames issue
 *
 * https://material-ui-next.com/customization/css-in-js/#other-html-element
 ******************************************************* */

const jss = create(jssPreset());
const createGenerateClassName = () => {
  let counter = 0;
  return rule => `APPNAME--uicomponents--${rule.key}-${counter++}`;
};
const generateClassName = createGenerateClassName();

class Theme extends Component {
  state = { theme: null };

  updateTheme = () => {
    const { type } = this.props;
    this.setState({ theme: makeBaseTheme(type) });
  };

  componentDidMount = () => {
    this.updateTheme();
    window.addEventListener("resize", this.handleResize);
  };

  componentDidUpdate = prevProps => {
    const { type } = this.props;

    if (type !== prevProps.type) {
      this.updateTheme();
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize);
  };

  handleResize = () => {
    this.updateTheme();
  };

  render() {
    const { theme } = this.state;
    const { children } = this.props;
    if (theme === null) {
      return null;
    }

    return (
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </StylesProvider>
    );
  }
}

Theme.defaultProps = {
  type: "dark"
};

Theme.propTypes = {
  type: PropTypes.string
};

export default Theme;
