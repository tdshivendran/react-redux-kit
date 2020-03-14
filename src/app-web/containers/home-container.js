import { connect } from "react-redux";
import localforage from "localforage";

import Core from "../../app-core";
import toJS from "../toJS";

import DefaultContainer from "./default-container";

class HomeContainer extends DefaultContainer {}

const mapState = state => ({
  userFlag: Core.reduxModuleOne.selectors.getUserFlag(state),
  userName: Core.reduxModuleOne.selectors.getUserName(state)
});

const mapDispatch = dispatch => ({
  updateUserInfo: infoProps => {
    dispatch({ type: Core.reduxModuleOne.actions.UPDATE_USER_INFO, infoProps });
  },
  onAppReset: () => {
    localforage.clear().then(() => {
      dispatch({ type: "RESET_APP_STATE" });
      window.location.reload(true);
    });
  }
});

export default connect(mapState, mapDispatch)(toJS(HomeContainer));
