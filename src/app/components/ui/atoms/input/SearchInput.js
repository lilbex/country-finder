import React from 'react'
import "./styles.css"

export default function Input({label,placeholder, type, value,onChange, readOnly}) {
  return (
    <div className="form-group">
      <label className="control-label">{label}</label>
      <input className="form-control" onChange={onChange} type={type} placeholder={placeholder} value={value} readOnly={readOnly}/>
    </div>
  )
}