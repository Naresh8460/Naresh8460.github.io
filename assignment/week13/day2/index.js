import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    render(){
        return <button><h4>Dont Click</h4></button>
    }
}
ReactDOM.render(<Button/>, document.getElementById("root"));