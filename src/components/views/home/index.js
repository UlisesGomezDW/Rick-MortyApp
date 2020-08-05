import React, {Fragment, useState} from 'react'
import {useHistory} from 'react-router-dom'
import menu from './../../../assets/icons/menu.svg'
import Card from './../../common/card'
import Search from './../../common/search'
import Button from './../../common/button'
import Pagination from './../../common/pagination'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'
import {saveFavorites} from './../../../utils'
import './index.scss'

const Home = ({Characters, addFavorite}) => {
  const history = useHistory()
  const [page, setPage] = useState({init: 0, end: 6, number: 1})
  const [consult, setConsult] = useState('')
  return(
    <Fragment>
      <div className="home-container">
        <Search onChange={(e)=>setConsult(e.target.value)} placeholder="Personaje"/>
        <Button onClick={()=>history.push('/filter/')}>
          <img src={menu} alt="icon"/>
          Filtrar
        </Button>
      </div>
      <p className="home-body-tittle">Personajes</p>
      <div className="home-cards">
      {Characters.filter(({name}) => name.toLowerCase().indexOf(consult.toLowerCase()) > -1).slice(page.init, page.end).map((character, i)=>(
        <Card {...character} key={i} onClick={()=>history.push({pathname: `/detail/${character.id}/`, state: character})} onFavorite={()=>addFavorite(i, Characters)} />
      ))}
      </div>
      <Pagination
      Increment={()=>setPage({init: page.init + 6, end: page.end + 6, number: page.number + 1})}
      Decrement={()=>setPage({init: page.init - 6, end: page.end - 6, number: page.number - 1})}
      page={page.number} limit={Characters.length} init={page.init} end={page.end} />
    </Fragment>
  )
}
const mapState = state => ({Characters: state.data})
const mapDispatch = dispatch => ({
  addFavorite(i, Characters){
    Characters[i].favorite = !Characters[i].favorite
    dispatch({
      type: 'ADD_FAVORITE',
      payload: Characters
    })
    saveFavorites(Characters)
    Characters[i].favorite ? toast('Añadido a favoritos ❤') : toast.error('Eliminado de favoritos 👎')
  }
})

export default connect(mapState, mapDispatch)(Home)