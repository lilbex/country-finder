import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "./app/api/context";
import LoginTemplate from "./app/components/templates/loginTemplate/LoginTemplate";
import HomeTemplate from "./app/components/templates/homeTemplate/HomeTemplate";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          {user?(<HomeTemplate />):(<LoginTemplate />)}
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
