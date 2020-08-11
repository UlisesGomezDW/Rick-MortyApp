import React from 'react'
import {connect} from 'react-redux'
import {useGetValues} from './../../../hooks'
import {toast} from 'react-toastify'
import Select from './../../common/select'
import Button from './../../common/button'
import './index.scss'

const SearchFilter = ({options, addFillters}) => {
  const [ formValues, handleSelectChange ] = useGetValues()
  return(
    <div className="search-container">
      {options.map((option, i)=>(
        <Select {...option} key={i} handleChange={handleSelectChange} />
      ))}
      <Button onClick={()=>addFillters(formValues)}>Buscar</Button>
    </div>
  )
}
const mapState = state => ({options: state.options})

const mapDispatch = dispatch => ({
  addFillters(filters){
    dispatch({
      type: 'ADD_FILTERS',
      payload: filters
    })
    toast('Filtros agregados')
    window.history.back()
  }
})

export default connect(mapState,mapDispatch)(SearchFilter)