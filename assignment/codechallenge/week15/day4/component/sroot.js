import React from 'react';
import {connect} from 'react-redux';

import {storeMapper} from './store';

class ButtonCompnent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch({
            type: "SROOT"
        });
    }

    render() {
        return <button className = "btn btn-secondary" onClick={this.handleClick}>Square-Root</button>
    }
}
let RootBtn = connect(storeMapper)(ButtonCompnent);

export {RootBtn};