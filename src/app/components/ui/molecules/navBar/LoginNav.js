import React from 'react'
import {H2} from '../../atoms/typography/Typography'
import globe from '../../../assets/globe.gif'

const LoginNav = () => {
  return (
    <>
      <div style={{borderColor:"black",borderStyle:"solid", borderWidth:"2px", display:"flex",width:"100%",margin:"0 auto", paddingTop:"5px",marginRight:"0"}}>
        
        <img src={globe} style={{width:"50px",margin:"0 auto", position:'relative'}} alt="The world" />;
        <H2 children="Country Lookup"  />
      </div>
      </>
  )
}
export default LoginNav