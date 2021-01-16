/* eslint-disable no-plusplus */
import React, { useState, useEffect } from "react";
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

const Theme = props => {
  const [theme, setTheme] = useState(null);

  const { type } = props;

  const updateUITheme = () => {
    setTheme(makeBaseTheme(type));
  };

  useEffect(updateUITheme, [type]);

  useEffect(() => {
    // initiate the event handler
    window.addEventListener("resize", updateUITheme);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener("resize", updateUITheme);
    };
  });

  const { children } = props;
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
};

Theme.defaultProps = {
  type: "dark"
};

Theme.propTypes = {
  type: PropTypes.string
};

export default Theme;
