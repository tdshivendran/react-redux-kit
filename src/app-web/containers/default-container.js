/* eslint-disable react/prop-types */
import { Children, cloneElement, PureComponent } from "react";

export default class DefaultContainer extends PureComponent {
  render() {
    const props = {
      ...this.props
    };

    const { children } = this.props;

    const child = Children.only(children);
    return cloneElement(child, props);
  }
}
