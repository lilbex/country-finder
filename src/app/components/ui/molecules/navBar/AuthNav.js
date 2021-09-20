import React,{useContext} from 'react'
import {H2} from '../../atoms/typography/Typography'
import Divider from '../../atoms/divider/Divider'
import globe from '../../../assets/globe.gif'
import Button from '../../atoms/buttons/Button'
import AuthContext from "../../../../api/context";
import LoginTemplate from '../../../templates/loginTemplate/LoginTemplate'
 


const AuthNav = () => {
  const authContext = useContext(AuthContext);
  // const {user, setUser} = useContext(AuthContext);


  const handleLogout = () => {
    authContext.setUser("");
    window.location.href = LoginTemplate;
  }


  return (
    <>
    <div style={{display:"flex"}}>
      <div style={{display:"flex",width:"300px",margin:"0 auto", paddingTop:"5px",}}>
        <img src={globe} style={{width:"50px",margin:"0 auto", position:'relative'}} />;
        <H2 children="Country Lookup"  />
      </div>
      <div style={{marginTop:"10px"}}>
      <Button onClick={handleLogout} title="Logout" height="50px"/>
      </div>
      
      </div>
      <Divider />
      </>
  )
}

export default AuthNav