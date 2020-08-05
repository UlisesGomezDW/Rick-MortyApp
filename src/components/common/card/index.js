import React from 'react'
import {Cube, Heart} from './../figures'
import './index.scss'
import PropTypes from 'prop-types'
const Card = ({name, image, favorite, gender, specie, status, type, onClick, onFavorite}) => {
  return(
    <div className="card animate__animated animate__pulse" onClick={onClick}>
      <img src={image} alt="text"/>
      <div className="card-information">
        <section className="card-head">
          <div>
            <Cube/>
            <span>Especie: {specie} </span>
          </div>
          <Heart favorite={favorite} onFavorite={onFavorite}/>
        </section>
        <section className="card-body">
          <p>{name}</p>
          <p>Estatus: {status}</p>
          <p>Tipo: {type === '' ? 'No definido' : type}</p>
          <p>Género: {gender} </p>
        </section>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  gender: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
}

export default Card