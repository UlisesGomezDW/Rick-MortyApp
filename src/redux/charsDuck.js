import axios from 'axios'
import {getOptions} from './../utils'

let initialState = {
    fetching: false,
    data: [],
    options: [],
}


let URL = 'https://rickandmortyapi.com/api/character'
let GET_CHARACTERS = 'GET_CHARACTERS'
let GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
let GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR'
let GET_OPTIONS = 'GET_OPTIONS'
let ADD_FAVORITE = 'ADD_FAVORITE'
let MODE_OFFLINE = 'MODE_OFFLINE'

//Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_CHARACTERS:
        return { ...state, fetching: true}
      case GET_CHARACTERS_SUCCESS:
        return { ...state, fetching: false, data: action.payload }
      case GET_CHARACTERS_ERROR:
        return { ...state, fetching: false, error: action.payload }
      case GET_OPTIONS:
        return { ...state, options: action.payload }
      case ADD_FAVORITE:
        return { ...state, data: action.payload }
      case MODE_OFFLINE:
        return { ...state, data: action.payload }
      default:
        return state
    }
}

//Acción creadora
export let getCharactersAction = () => (dispatch, getState) => {
    dispatch({type: GET_CHARACTERS})
    axios.get(URL).then(res => {
      let data = []
      res.data.results.forEach(item=>data.push({id: item.id, name: item.name, image: item.image, specie: item.species, status: item.status, type: item.type === '' ? 'No definido' : item.type, gender: item.gender, favorite: false}))
      dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: data
      })
      getPropsCharacters(dispatch, data)
    })
    .catch(err => {
      dispatch({
        type: GET_CHARACTERS_ERROR,
        payload: err.response.message
      })
    })
}

//Función auxiliar
let getPropsCharacters = (dispatch, data) => {
  let category = ['Especie', 'Estatus', 'Tipo', 'Género']
  let options = getOptions(data, category)
  dispatch({
    type: GET_OPTIONS,
    payload: options
  })
}