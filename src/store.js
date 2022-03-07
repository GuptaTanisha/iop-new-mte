import stations from './reducers/stations';
import slots from './reducers/slots'
import places from './reducers/places';
import hosts from './reducers/hosts';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer';
import thunk from 'redux-thunk';
const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')? 
        JSON.parse(localStorage.getItem('userInfo'))
        :null,
    }
}
const reducer = combineReducers({ stations: stations,
    slots: slots,
    places : places,
    hosts : hosts,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;