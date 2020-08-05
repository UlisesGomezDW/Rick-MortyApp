import React from 'react'
import './index.scss'
const Button = ({ children, onClick }) => {
  return(
    <button className="btn-primary animate__animated animate__rubberBand" onClick={onClick}>{children}</button>
  )
}
export default Button