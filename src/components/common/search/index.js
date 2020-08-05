import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
const Search = ({onChange, placeholder}) => {
  return(
    <input type="text" className="search animate__animated animate__rubberBand" onChange={onChange} placeholder={placeholder} />
  )
}
Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Search