import React from "react";
import {H3} from "../../../atoms/typography/Typography";
import Input from "../../../atoms/input/Input";
import Button from "../../../atoms/buttons/Button";
import './style.css'
export const LoginCard = () => {
  return (
    <div class="card card-shadow" style={{width: "25rem"}}>
      <div class="card-body">
        <div class="card-title"><H3 children="Login"/></div>
        <div style={{paddingBottom:"1rem"}}><Input label="Email Address"/></div>
        <Button title="Login" width="100%"/>
      </div>
    </div>
  );
};
