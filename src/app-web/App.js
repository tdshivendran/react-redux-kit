import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";

import UIComponents from "../app-ui";

import Pages from "./pages";
import createStore from "./store";
import getContainers from "./containers";

const { PropsContext } = UIComponents.withProps;
const { store, persistor, history } = createStore();

const App = () => (
  <Provider store={store}>
    <PropsContext.Provider value={getContainers()}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Pages />
        </ConnectedRouter>
      </PersistGate>
    </PropsContext.Provider>
  </Provider>
);

export default App;
