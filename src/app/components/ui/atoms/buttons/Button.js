import React from 'react'
import './style.css'

const Button=({title, onClick, width, height,fontSize,fontWeight,fontFamily})=> {
  return (
    <button className="btn btn-primary" onClick={onClick} style={{width, height, fontSize,fontWeight, fontFamily}}>{title}</button>
  )
}

export default Button