import React from 'react'
import "./styles.css"

export default function Input({label,placeholder, type, value}) {
  return (
    <div className="form-group">
      <label className="control-label">{label}</label>
      <input className="form-control" type={type} placeholder={placeholder} value={value}/>
    </div>
  )
}
