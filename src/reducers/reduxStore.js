import { combineReducers, createStore, applyMiddleware } from "redux";
import { CatalogReducer } from "../components/Catalog/CatalogReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  catalog: CatalogReducer

})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store