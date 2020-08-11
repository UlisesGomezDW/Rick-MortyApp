import { useState } from 'react'

export const useGetValues = () => {
  const [values, setValues] = useState({})

  const handleSelectChange = (category, value) => {
    setValues({...values, [ category ]: value})
  }

  return [ values, handleSelectChange ]
};