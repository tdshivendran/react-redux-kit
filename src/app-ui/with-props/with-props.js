import React from "react";
import isEmpty from "lodash/isEmpty";
import Warning from "./Warning";

import PropsContext from "./PropsContext";

export default (contract, instanceName) => WrappedComponent => props => (
  <PropsContext.Consumer>
    {context => {
      if (isEmpty(context)) {
        return <Warning text="No Context Setup, please add provider" />;
      }

      let Hoc = context;
      const coalescedInstanceName = props.instanceName || instanceName;

      if (coalescedInstanceName) {
        const lookup = Hoc;
        Hoc = lookup[coalescedInstanceName];
      } else {
        Hoc = context[contract];
      }

      if (!Hoc) {
        return <Warning contract={contract} />;
      }

      return (
        <Hoc {...props}>
          <WrappedComponent {...props} />
        </Hoc>
      );
    }}
  </PropsContext.Consumer>
);
