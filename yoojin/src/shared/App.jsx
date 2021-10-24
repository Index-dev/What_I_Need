import React from "react";
import { Route } from "react-router-dom";
import { Main } from "../pages";
import { List } from "../pages";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/list" component={List} />
    </div>
  );
};

export default App;
