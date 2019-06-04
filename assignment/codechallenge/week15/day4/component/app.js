import React from 'react';
import {Provider} from 'react-redux';

//import {Display} from './display.js';
import {Input} from './input.js';
import {SquareBtn} from './square.js';
import{CubeBtn} from './cube.js';
import{RootBtn} from './sroot.js'
import {store} from './store.js'
import {Display} from './display.js';

class App extends React.Component {
    render() {
        return (
        <div className="container-fluid">
            <div className = "offset-md-2 col-6">
            
            <Provider store={store}>
                   <Display/>
                    <Input/>
                    <br/>
                    <SquareBtn/>{" "}
                    <CubeBtn/>{" "}
                    <RootBtn/>
                    
            </Provider>

            </div>
        
        </div>    
        );
    }
}

export {App};