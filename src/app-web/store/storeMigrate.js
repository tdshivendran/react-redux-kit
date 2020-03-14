import Immutable from "immutable";

/* --------------------------------------------- */

const convertImmtoJS = state => {
  if (typeof state.toJS === "function") {
    return { val: state.toJS(), isImm: true };
  }
  return { val: state, isImm: false };
};

export default (initStore, currentStore) => {
  if (currentStore) {
    return Object.keys(currentStore).reduce((acc, key) => {
      const currState = convertImmtoJS(currentStore[key]);
      const initState = initStore[key]
        ? convertImmtoJS(initStore[key]).val
        : undefined;

      if (initState) {
        Object.keys(initState).forEach(elem => {
          if (!(elem in currState.val)) {
            currState.val[elem] = initState[elem];
          }
        });
      }

      acc[key] = currState.isImm
        ? Immutable.fromJS(currState.val)
        : currState.val;
      return acc;
    }, {});
  }
  return initStore;
};

/* --------------------------------------------- */
