import React from 'react'
import {connect} from 'react-redux'
import Select from './../../common/select'
import Button from './../../common/button'
import './index.scss'

const SearchFilter = ({options}) => {
  return(
    <div className="search-container">
      {options.map((option, i)=>(
        <Select {...option} key={i} />
      ))}
      <Button onClick={()=>window.history.back()}>Buscar</Button>
    </div>
  )
}
const mapState = (state) => ({options: state.options})

export default connect(mapState)(SearchFilter)