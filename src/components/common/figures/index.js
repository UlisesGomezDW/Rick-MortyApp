import React from 'react'
import heart from './../../../assets/icons/heart.svg'
import heartOutline from './../../../assets/icons/heart-outline.svg'
import './index.scss'
export const Cube = () => (
  <div className="cube-figure"/>
)
export const Heart = ({favorite, onFavorite}) => {
  return(
    <img src={favorite ? heart : heartOutline} onClick={onFavorite} alt="heart"/>
  )
}