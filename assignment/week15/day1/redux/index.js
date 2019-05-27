import {createStore} from 'redux' ;

//reducer function
let myReducer = function (state, action) {
    if(!state){
        return{
            username: "unknown"
        }
    }

    if (action.type == "DATA_CHANGED"){
        let newState = state;
        state.username = action.username;
        return newState;
    }
}

//redux data store
let store = createStore(myReducer);

//subscriber 
store.subscribe (function(){
    let state = store.getState();
    console.log("subscriber called", state);
})

//dispatch
store.dispatch({
    type:"DATA_CHANGED",
    username: "Naresh"
});