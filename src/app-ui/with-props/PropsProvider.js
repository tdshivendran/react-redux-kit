/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

const PropsProvider = props => {
  const { context, containers, children } = props;

  const Context = context;

  return <Context.Provider value={containers}>{children}</Context.Provider>;
};

PropsProvider.propTypes = {
  context: PropTypes.object,
  children: PropTypes.any,
  containers: PropTypes.object.isRequired
};

export default PropsProvider;
