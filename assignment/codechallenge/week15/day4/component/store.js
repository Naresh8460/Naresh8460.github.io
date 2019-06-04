import {createStore} from 'redux';

let myReducer = function (state, action) {
    let newState={
     
        number : 0,
        result : 0

    }
    if (!state) {return newState;}

    newState.number = state.number;
    newState.result = state.result;
    
    if(action.type == "GETNUM") {
        newState.number = action.number;
    }

    if(action.type === "SQUARE"){
    newState.result=Math.pow(newState.number, 2)
    
    }
    if(action.type === "CUBE"){
    newState.result=Math.pow(newState.number, 3)
    
    }if(action.type === "SROOT"){
    newState.result = Math.sqrt(newState.number)
    
    }
    return newState;
}

// //redux data store
// let store = createStore(myReducer);

// //subscriber
// store.subscribe (function(){
//     let state = store.getState();
//     console.log( state);
// })

// //dispatch
// store.dispatch({
//     type:"SQUARE",
//     number : 25
// })
// store.dispatch({
//     type:"CUBE",
//     number : 25
// })
// store.dispatch({
//     type:"SROOT",
//     number : 25
// })

let store = createStore(myReducer);

//subscriber
store.subscribe (function(){
    console.log (store.getState());
    
})

//dispatch
// store.dispatch({
//     type:"GETNUM",
//     number:25
// })

// store.dispatch({
//     type:"SQUARE",
     
// })
// store.dispatch({
//     type:"CUBE",
    
// })
// store.dispatch({
//     type:"SROOT",
    
// })

let storeMapper = function(state){
    return state;
}

export  {store, storeMapper};