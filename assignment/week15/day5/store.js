import {createStore} from 'redux';

let myReducer = function (state, action) {
    let initialState = {
        navLoading : false,
        breeds : [],

        galleryLoading : false,
        dogImages : []
    };

    if(!state) {return initialState; }

    let newState = initialState;

    newState.breeds = state.breeds;

    //fetch nav

    if(action.type == "FETCH_NAV") {
        
        fetch("https://dog.ceo/api/breeds/list/all")
         .then(function(response){
             return response.json();
         })
         .then (function(data){
          store.dispatch({
                 type: "NAV_LOADED",
                 data : Object.keys(data.message)
           });
       })
       .catch(function(error){
           console.log(error);
       });

       newState.navLoading = true;
    }

    if(action.type == "NAV_LOADED"){
        newState.breeds = action.data;
    }

    if(action.type == "FETCH_IMG"){
        let url = `https://dog.ceo/api/breed/${action.breedName}/images`;

        fetch(url)
           .then(function(response){
               return response.json();
           })
           .then(function(data){
               store.dispatch({
                   type : "IMG_LOADED",
                   data : data
               });
           })
           .catch(function(error){
               console.log(error);
           });
        newState.galleryLoading = true;
    }

    //fetching images
    if(action.type == "IMG_LOADED") {
        newState.dogImages = action.data.message.slice(0, 5);
    }

    return newState;
}

let store = createStore(myReducer);

store.subscribe(function(){
    console.log(store.getState() );
});

function storeMapper (state){
    return state;
};

export {store, storeMapper};