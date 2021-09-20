import React from 'react'
import "./styles.css"

export default function Input({label,placeholder, type, value,onChange,onKeyUp,labelColor, readOnly}) {
  return (
    <div className="form-group">
      <label className="control-label" style={{color:labelColor}}>{label}</label>
      <input className="form-control" onKeyUp={onKeyUp} onChange={onChange} type={type} placeholder={placeholder} value={value} readOnly={readOnly}/>
    </div>
  )
}
