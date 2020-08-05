import React from 'react'
import {Redirect} from 'react-router-dom'
import back from './../../../assets/icons/back.svg'
import {Cube, Heart} from './../../common/figures'
import {toast} from 'react-toastify'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {saveFavorites} from './../../../utils'
import './index.scss'

const Detail = (props ) => {
  if(props.location.state !== undefined){
    let {addFavorite, Characters} = props
    let {id, gender, specie, status, type, name, image, favorite} = props.location.state
    return(
      <div className="detail-container animate__animated animate__flash">
        <section className="detail-head">
          <img src={back} onClick={()=>window.history.back()} alt="back"/>
        </section>
        <section className="detail-body">
          <div className="detail-info">
            <section className="detail-head-info">
              <Cube/>
              <span>Especie: {specie}</span>
            </section>
            <section className="detail-body-info">
              <p>{name}</p>
              <p>Estatus: {status}</p>
              <p>Tipo: {type === '' ? 'No definido' : type}</p>
              <p>Género: {gender}</p>
            </section>
          </div>
          <img src={image} alt="avatar"/>
        </section>
        <section className="detail-footer">
          <Heart favorite={favorite} onFavorite={()=>addFavorite(id-1, Characters)}/>
        </section>
      </div>
    )
  }
  else {
    return <Redirect to="/"/>
  }
}
const mapState = state => ({Characters: state.data})
const mapDispatch = dispatch => ({
  addFavorite(i, Characters){
    Characters[i].favorite = !Characters[i].favorite
    console.log(Characters)
    dispatch({
      type: 'ADD_FAVORITE',
      payload: Characters
    })
    saveFavorites(Characters)
    Characters[i].favorite ? toast('Añadido a favoritos ❤') : toast.error('Eliminado de favoritos 👎')
  }
})

Detail.prototype = {
  props: PropTypes.object.isRequired,
}

export default connect(mapState, mapDispatch)(Detail)