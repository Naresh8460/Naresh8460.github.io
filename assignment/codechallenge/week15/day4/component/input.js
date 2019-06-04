import React from 'react';
import {connect} from 'react-redux';

import {storeMapper} from './store.js';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);

        this.numberChanged = this.numberChanged.bind(this);
    }

    numberChanged(event) {
        this.props.dispatch({
            type: "GETNUM",
            number: parseInt(event.target.value)
        });
    }

    render() {
        return (
           
                <input onChange={this.numberChanged} type="text" className="form-control"/>
             
        );
    }
}

let Input = connect(storeMapper)(InputComponent);

export {Input};