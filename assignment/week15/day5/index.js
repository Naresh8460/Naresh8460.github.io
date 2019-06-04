import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {store} from './store.js';
import {Nav} from './nav.js';
import {Gallery} from './gallery.js';

class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                        <h2>Dog Breeds</h2>
                        <hr/>
                        <div className = "btn-group-vertical">
                            <Nav />
                        </div>
                    </div>

                    <div className = "col-md-6">
                        <Gallery/>
                    
                    </div>
                  </div>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
