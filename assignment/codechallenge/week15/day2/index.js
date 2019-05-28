import {createStore} from 'redux';

//reducer function

let myReducer = function (state, action) {
    if(!state){
        return{
            counter: 0
        }
    }
    
   
    if(action.type == "INCREMENT"){
        let newState = state;
        newState.counter = newState.counter+1;
        return newState;
    }else if(action.type == "DECREMENT"){
        let newState = state;
        newState.counter = newState.counter-1;
        return newState;
    }else(action.type == "RESET")
       {let newState = state;
        newState.counter = 0;
        return newState;
    }
}

//redux data store
let store = createStore(myReducer);
 
//subscriber
store.subscribe(function (){
    let state = store.getState();
    console.log("counter", state);
})

//dispatch
store.dispatch({
    type:"INCREMENT",
})
store.dispatch({
    type:"INCREMENT",
})
store.dispatch({
    type:"DECREMENT",
})
store.dispatch({
    type:"RESET",
})
