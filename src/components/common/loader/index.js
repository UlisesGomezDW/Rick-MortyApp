import React from 'react'
import './index.scss'

const Loader = () => (
  <div className="loader">
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    <p>Cargando</p>
  </div>
)

export default Loader