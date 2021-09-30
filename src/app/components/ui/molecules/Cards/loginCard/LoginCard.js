import React,{useState, useContext} from "react";
import {H3, Paragraph} from "../../../atoms/typography/Typography";
import Input from "../../../atoms/input/Input";
import Button from "../../../atoms/buttons/Button";
import request,{headers} from "../../../../../api/request";
import AuthContext from "../../../../../api/context";
import './style.css'
import globe from "../../../../assets/globe.gif"
import {useHistory} from "react-router-dom";

export const LoginCard = () => {

  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState("Login")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();
const handleChange = (event) => {
  setEmail(event.target.value);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLogin("loading...");
    if(email==""){
      setError(true);
      return;
    }
    try {
      const response = await request.post("auth/login", {
        "email": email,
      });
      const token = response.data;
      authContext.setUser(token);
      history.push("/home");
    } catch (error) {
      setLogin("Login");
      setError(true);
    }
  };

  return (
    <div class="card  card-custom" >
      <div style={{display:"flex", flexDirection:"row",justifyContent:"center",padding:"10px" }}>
        <img class="card-img-top" src={globe} alt="world" style={{width:"60px"}} />
        <div style={{position:"relative", top:"15px"}}>
        <H3 children="Search Country" color="grey" />
      </div>
      
      </div>
      
      <div class="card-body">
        <div style={{paddingBottom:"1rem"}}><Input name="email" value={email} onChange={handleChange} label="Email Address" labelColor="grey" /></div>
        {error ? <Paragraph color="red" children ="Please enter a valid password" />:null}
        <Button title={login} onClick={handleSubmit} width="100%"  />
      </div>
    </div>
  );
};
