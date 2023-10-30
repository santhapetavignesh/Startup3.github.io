import {createStore} from 'redux'

let initialstate={
    products:[],
    specificationvalue:false,
    howtouse:false,
    review:false,
    cart:false
}
function reducer(state=initialstate,action){

    if(action.type=="product"){
        return {...state,products:action.payload}
    }
    if(action.type=="specificationvalue"){
        return{...state,specificationvalue:action.payload}
    }
    if(action.type=="howtouse"){
        return{...state,howtouse:action.payload}
    }
    if(action.type=="review"){
        return{...state,review:action.payload}
    }
    if(action.type=="cart"){
        return{...state,cart:action.payload}
    }
}

let store = createStore(reducer)

export default store