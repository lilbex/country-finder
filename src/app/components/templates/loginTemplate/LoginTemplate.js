import React from "react";
import "./style.css";
import {H2} from "../../ui/atoms/typography/Typography"

import { LoginCard } from "../../ui/molecules/Cards/loginCard/LoginCard";


const LoginTemplate = () => {
  return (
    <div className="jumbotron jumbo-custom">
      <div style={{width:"90%"}}>
        <div className="row">
          <div class="col-sm-4">
            <div style={{position:"relative",top:"30%",}}>
            <H2 color="grey" children="Know About Countries"/>
            <H2 color="grey" children="of the World"/>
            </div>
            
          </div>
          <div class="col-sm-8" style={{alignItems:"center", alignContent:"center"}}>
            <div  style={{width: "60%", position: "relative", top: "40%", left: "20%",}}>
              <LoginCard />
            </div>
          </div>
        </div>
    </div>
    </div>
    
  );
};
export default LoginTemplate;
