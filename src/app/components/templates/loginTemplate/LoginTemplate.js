import React from "react";
import "./style.css"
import globe from "../../assets/globe.gif"

import {LoginCard} from "../../ui/molecules/Cards/loginCard/LoginCard"


const LoginTemplate = () => {
  
  return (
    <div className="jumbotron">
      <div class="row">
        <div class="col-sm-4">col-sm-4</div>
        <div class="col-sm-8">
          <div className="login">
            <h3>Find your country</h3>
            <img src={globe} alt="world" className="image" />
            <LoginCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginTemplate;
