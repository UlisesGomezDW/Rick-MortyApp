import React, {useState}  from 'react'
import './index.scss'
import arrow from './../../../assets/icons/arrow.svg'

const Select = ({text, category, options, handleChange}) => {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState('')
  const inputConfig = (value) => {
    setValue(value)
    setActive(!active)
    handleChange(category, value)
  }
  return (
    <div className={`select animate__animated animate__headShake ${active === false ? 'not-active' : 'active'}`} onClick={() => setActive(!active)}>
      <p className="space">{value !== '' ? value : text}</p>
      <img src={arrow} alt="desplegar" className={`view-button ${active === false ? 'not-active' : 'active'}`}/>
      <div style={{ overflowY: options.length >= 5 ? 'scroll' : 'hidden'}} className={`options-container ${active === false ? 'not-active' : 'active'}`}>
        {options.length > 0
          ? options.map((item, i) => (
            <p key={i} className={`option opn${i}`} onClick={() => inputConfig(item, i)}>{item}</p>
          ))
          : null
        }
      </div>
    </div>
  )
}

export default Select