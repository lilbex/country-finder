import React from 'react'
import {H2} from '../../atoms/typography/Typography'
import Divider from '../../atoms/divider/Divider'
import globe from '../../../assets/globe.gif'
import Button from '../../atoms/buttons/Button'

const AuthNav = () => {
  return (
    <>
    <div style={{display:"flex"}}>
      <div style={{display:"flex",width:"300px",margin:"0 auto", paddingTop:"5px",}}>
        <img src={globe} style={{width:"50px",margin:"0 auto", position:'relative'}} />;
        <H2 children="Country Lookup"  />
      </div>
      <div style={{marginTop:"10px"}}>
      <Button title="Logout" height="50px"/>
      </div>
      
      </div>
      <Divider />
      </>
  )
}

export default AuthNav