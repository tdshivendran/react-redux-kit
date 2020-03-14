import { Children, cloneElement } from "react";

export default (...props) => {
  const finalProps = Object.assign({}, ...props);

  const child = Children.only(finalProps.children);
  return cloneElement(child, finalProps);
};
