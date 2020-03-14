import { connect } from "react-redux";
import localforage from "localforage";

import toJS from "../toJS";

import DefaultContainer from "./default-container";

class AppErrorContainer extends DefaultContainer {}

const mapState = () => ({});

const mapDispatch = dispatch => ({
  onAppReset: () => {
    localforage.clear().then(() => {
      dispatch({ type: "RESET_APP_STATE" });
      window.location.reload(true);
    });
  }
});

export default connect(mapState, mapDispatch)(toJS(AppErrorContainer));
