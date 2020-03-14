import { fromJS } from "immutable";
import makeReducer from "../redux-make-reducer";
import * as actions from "./actions";

const initialState = fromJS({
  isUserSet: false,
  userName: ""
});

const handlers = {};

handlers[actions.SET_USER_FLAG] = (state, event) =>
  state.set("isUserSet", event.isUserSet);

handlers[actions.SET_USER_NAME] = (state, event) =>
  state.set("userName", event.userName);

export default makeReducer(handlers, initialState);
