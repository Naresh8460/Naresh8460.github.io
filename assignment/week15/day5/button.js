import React from 'react';
import {connect} from 'react-redux';

import {storeMapper} from './store.js';

class Button extends React.Component {
    constructor (props) {
        super(props);

        this.loadContent = this.loadContent.bind(this);
    }

    loadContent() {
        this.props.dispatch({
            type : "FETCH_IMG",
            breedName : this.props.breedName
        });
        console.log(this.props.breedName)
    }

    render() {
        return <button onClick={this.loadContent} className= "btn btn-secondary">{this.props.breedName}</button>
    }
}

let Btn = connect(storeMapper)(Button);

export {Btn};