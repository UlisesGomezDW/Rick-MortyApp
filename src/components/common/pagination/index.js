import React from 'react'
import arrow from './../../../assets/icons/arrow.svg'
import './index.scss'
const Pagination = ({Increment, Decrement, page, limit, init, end}) =>(
    <div className="pagination">
        {init === 0 ? null : <img src={arrow} alt="arrow" onClick={Decrement} /> }
        <span>{page}</span>
        {end<limit ? <img src={arrow} alt="arrow" onClick={Increment}/> : null}
    </div>
)
export default Pagination