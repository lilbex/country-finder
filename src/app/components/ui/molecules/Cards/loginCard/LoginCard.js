import React,{useState, useContext} from "react";
import {H3} from "../../../atoms/typography/Typography";
import Input from "../../../atoms/input/Input";
import Button from "../../../atoms/buttons/Button";
import request,{headers} from "../../../../../api/request";
import AuthContext from "../../../../../api/context";
import './style.css'

export const LoginCard = () => {

  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState("Login")
  const [loading, setLoading] = useState(false);

const handleChange = (event) => {
  setEmail(event.target.value);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLogin("loading...");
    try {
      const response = await request.post("/auth/login", {
        "email": email,
      });
      const token = response.data;
      authContext.setUser(token);
    } catch (error) {
      setLogin("Login");
    }
  };

  return (
    <div class="card card-shadow" style={{width: "25rem"}}>
      <div class="card-body">
        <div class="card-title"><H3 children="Login"/></div>
        <div style={{paddingBottom:"1rem"}}><Input name="email" value={email} onChange={handleChange} label="Email Address"/></div>
        <Button title={login} onClick={handleSubmit} width="100%" />
      </div>
    </div>
  );
};
