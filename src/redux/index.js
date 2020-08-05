import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import charsReducer, {getCharactersAction}  from './charsDuck'

export const generateStore = () => {
    let store = createStore(charsReducer, applyMiddleware(thunk))
    getCharactersAction()(store.dispatch, store.getState)
    return store
}
