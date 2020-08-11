import React from 'react'
import arrow from './../../../assets/icons/arrow.svg'
import './index.scss'

const Pagination = ({Increment, Decrement, number, limit, init, end}) => {
  if(limit>0){
    return(
      <div className="pagination">
        {init === 0 ? null : <img src={arrow} alt="arrow" onClick={Decrement} /> }
          <span>{number}</span>
        {end<limit ? <img src={arrow} alt="arrow" onClick={Increment}/> : null}
      </div>
    )
  }
  else{
      return null
  }
}

export default Pagination