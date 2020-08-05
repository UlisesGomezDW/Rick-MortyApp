import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {generateStore} from './redux'
import './index.scss'
import 'animate.css'

let store = generateStore()

const WithConfig = () =>(
  <Provider store={store}>
    <BrowserRouter>
     <App />
   </BrowserRouter>
  </Provider>
)

ReactDOM.render(<WithConfig/>, document.getElementById('root'))

serviceWorker.register()
