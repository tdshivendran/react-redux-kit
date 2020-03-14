import vhCheck from "vh-check";
import { createMuiTheme } from "@material-ui/core";
import verticalHeight from "./vertical-height";

import appThemes from "./appThemes";

export default type => {
  const typeTheme = appThemes[type];
  const vhResult = vhCheck();

  return createMuiTheme({
    typography: { useNextVariants: true },
    layout: { vh: (v, opts) => verticalHeight(v, opts, vhResult) },
    ...typeTheme
  });
};
