import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { persistStore, persistReducer } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
import storage from "redux-persist/lib/storage";

import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import Core from "../../app-core";
import migration from "./storeMigrate";

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV !== "development";

const coreKeys = Object.keys(Core);

const coreReducers = coreKeys.reduce((acc, key) => {
  acc[key] = Core[key].reducer;
  return acc;
}, {});
const coreSagas = coreKeys.map(key => Core[key].sagas);

/* --------------------- Router Setup --------------------- */

const history = createBrowserHistory();
const routerMiddlewareWithHistory = routerMiddleware(history);

/* --------------------- ------------- --------------------- */
/* --------------------- Reducer Setup --------------------- */

const appReducer = combineReducers({
  router: connectRouter(history),
  ...coreReducers
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP_STATE") {
    const { router } = state;
    return appReducer({ router }, action);
  }

  return appReducer(state, action);
};

/* --------------------- ------------- --------------------- */
/* --------------------- Persist Setup --------------------- */

const initStore = createStore(rootReducer).getState();

const persistConfig = {
  transforms: [immutableTransform()],
  key: "create-react-app-persist",
  blacklist: [],
  storage,
  migrate: currentStore => Promise.resolve(migration(initStore, currentStore))
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* --------------------- ------------- --------------------- */

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = composeWithDevTools({});

  const middlewares = applyMiddleware(
    sagaMiddleware,
    routerMiddlewareWithHistory
  );

  const enhancers = isProduction ? middlewares : composeEnhancers(middlewares);

  const store = createStore(persistedReducer, enhancers);
  const persistor = persistStore(store);

  coreSagas.forEach(sagaMiddleware.run);

  return { store, persistor, history };
};
