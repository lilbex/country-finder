import React from 'react'

const Paragraph = ({color,fontSize,fontWeight, fontFamily, children, textAlign}) => {
  return (
    <p style={{color,fontSize,fontWeight, fontFamily}}>{children}</p>
  )
}

const Small = ({color,fontSize,fontWeight, fontFamily, children}) => {
  return (
    <p style={{color,fontSize,fontWeight:"light", fontFamily}}>{children}</p>
  )
}

const H1 = ({color,fontSize,fontWeight, fontFamily, children}) => {
  return (
    <h1 style={{color,fontSize,fontWeight, fontFamily}}>{children}</h1>
  )
}

const H2 = ({color,fontSize,fontWeight, fontFamily, children}) => {
  return (
    <h2 style={{color,fontSize,fontWeight, fontFamily, textAlign:"center"}}>{children}</h2>
  )
}

const H3 = ({color,fontSize,fontWeight, fontFamily, children, textAlign,}) => {
  return (
    <h3 style={{color,fontSize,fontWeight, fontFamily, textAlign}}>{children}</h3>
  )
}

const H4 = ({color,fontSize,fontWeight, fontFamily, children}) => {
  return (
    <h4 style={{color,fontSize,fontWeight, fontFamily}}>{children}</h4>
  )
}


export  {Small,Paragraph,H1,H2,H3,H4}
