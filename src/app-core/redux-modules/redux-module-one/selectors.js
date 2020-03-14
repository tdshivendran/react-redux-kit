/* eslint-disable function-paren-newline */
import { createSelector } from "reselect";

const module1State = state => state.reduxModuleOne;

export const getUserFlag = createSelector(module1State, state =>
  state.get("isUserSet")
);

export const getUserName = createSelector(module1State, state =>
  state.get("userName")
);
