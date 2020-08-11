import React, {Fragment, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'
import {saveFavorites, filterCharacters} from './../../../utils'
import menu from './../../../assets/icons/menu.svg'
import Card from './../../common/card'
import Search from './../../common/search'
import Button from './../../common/button'
import Pagination from './../../common/pagination'
import Loader from './../../common/loader'
import './index.scss'

const Home = ({Characters, Filters, addFavorite}) => {
  const history = useHistory()
  const [page, setPage] = useState({init: 0, end: 6, number: 1})
  const [consult, setConsult] = useState('')
  const [withData, setData] = useState([])

  useEffect(()=>{
    let result = filterCharacters(Characters, Filters, consult)
    setData(result)
  }, [consult])

  let data = withData.length > 0 ? withData : Characters

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
      {data.length > 0 ?
        <div className="home-cards">
          {data.slice(page.init, page.end).map((character, i)=>(
            <Card {...character} key={i} onClick={()=>history.push({pathname: `/detail/${character.id}/`, state: character})} onFavorite={()=>addFavorite(i, Characters)} />
          ))}
        </div>
      : <div className="home-loader"><Loader/></div>}
      <Pagination
      Increment={()=>setPage({init: page.init + 6, end: page.end + 6, number: page.number + 1})}
      Decrement={()=>setPage({init: page.init - 6, end: page.end - 6, number: page.number - 1})}
      limit={data.length} {...page} />
    </Fragment>
  )
}

const mapState = state => ({
  Characters: state.data,
  Filters: state.filters
})

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