import React from 'react';

import {connect} from 'react-redux';

import {storeMapper} from './store.js';

class DisplayComponent extends React.Component {
    render() {

        if(this.props.number == 0) {
            return <h2></h2>
        }
         return <h2>{this.props.result}</h2>
        }
}
let Display = connect(storeMapper)(DisplayComponent);

export{ Display};