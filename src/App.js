import React, {useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './components/common/navbar'
import {Home, Detail, SearchFilter} from './components/views'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'

const App = ({isOffline}) => {
  const styles = {display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}
  useEffect(()=>{
    if(!navigator.onLine){
      isOffline()
    }
  })
  return (
    <div style={styles}>
      <NavBar/>
      <ToastContainer/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/filter/" component={SearchFilter}/>
        <Route  path="/detail/:idCharacter/" component={Detail}/>
      </Switch>
    </div>
  )
}

const mapDispatch = dispatch => ({
  isOffline(){
    dispatch({
      type: 'MODE_OFFLINE',
      payload: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
    })
    toast.success('Disfruta del modo Offline')
  }
})

export default connect(null, mapDispatch) (App)
