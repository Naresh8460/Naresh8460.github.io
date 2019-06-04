import React from 'react';
import{connect} from 'react-redux';

import {Btn} from './button.js'
import {storeMapper} from './store.js';

class NavComponent extends React.Component {
    
    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_NAV"
        });
    }

    render() {
        if(this.props.navLoading){
            return<p>loading please wait..</p>
        } else {
            return(
                this.props.breeds.map(function(b){
                    return <Btn key={b} breedName={b}/>;
                })
               
            );
        }
    }
}

let Nav = connect(storeMapper)(NavComponent);

export {Nav};