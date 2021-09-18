import React from 'react'
import './style.css'

const Button=({title, onClick, width,fontSize,fontWeight,fontFamily})=> {
  return (
    <button className="btn btn-primary" onClick={onClick} style={{width,fontSize,fontWeight, fontFamily}}>{title}</button>
  )
}

export default Button