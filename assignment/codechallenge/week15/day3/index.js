import {createStore} from 'redux';

//reducer function
let  myReducer = function(state, action){
  if(!state) {
        return{
        number: 0,
        isOdd : false,
        isEven : false
        }
    }

    if(action.type == "CHECK_NUMBER"){
        let newState = state;
        state.number = action.number;
        state.isEven = action.isEven;
        state.isOdd = action.isOdd;
         if (newState.number %2 === 0){
            newState.isEven = true;
        }else{
            newState.isEven = false;
            
        }if (newState.number %2  !== 0){
            newState.isOdd = true;
        }else{
           newState.isOdd = false;
            
         }
         return newState;
    }
}

//redux data store
let store = createStore(myReducer);

//subscriber
store.subscribe(function(){
    let state = store.getState();
    console.log(state);
})

//dispatch
store.dispatch({
    type:"CHECK_NUMBER",
    number : 249
})
store.dispatch({
    type:"CHECK_NUMBER",
    number : 24
})