import React from 'react'
import {H2} from '../../atoms/typography/Typography'
import Divider from '../../atoms/divider/Divider'
import globe from '../../../assets/globe.gif'

export const Navbar = () => {
  return (
    <div>
      <div style={{display:"flex",width:"300px",margin:"0 auto", paddingTop:"5px",}}>
        
        <img src={globe} style={{width:"50px",margin:"0 auto", position:'relative'}} />;
        <H2 children="Country Lookup"  />
      </div>
      <Divider />
    </div>
  )
}
