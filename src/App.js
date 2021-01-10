import React from "react";
import Main from "./components/Main/Main";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Login from "./components/Login/Login";
import { Provider } from "react-redux";
import store from "./reducers/reduxStore";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/auth" component={Auth} exact />
            <Route path="/login" component={Login} exact />
            <Redirect to="/main" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
