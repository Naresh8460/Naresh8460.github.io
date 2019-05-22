import React from 'react';
import ReactDOM from 'react-dom';

class Heading extends React.Component{
    render(){
        return  <h2>React State Challenge</h2>
        
    }
}

 class InputComponent extends React.Component{
    constructor(props){
        super(props);

        this.inputChanged = this.inputChanged.bind(this);
    }

    inputChanged(event){
        this.props.update(event.target.value);
    }

    render(){
        return(
            <div className="form-group">
               <input className="form-control" onChange={this.inputChanged} type="text" />
            </div>
        )
    }
 }
  
class DisplayComponent extends React.Component{

    render(){
        return(
            <h2>{this.props.input}</h2>
        )
    }
}

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            input : " "
        }
       
      this.update = this.update.bind(this);
    }

    update(input){
        this.setState({input:input});
    }


    render(){
        return(
            <div className = "container">
                <div className="row">
                    <div className="col-6 offset-md-2">
                        <Heading/>
                        <hr/>
                        <InputComponent input={this.state.input} update={this.update} />
                        <br/>
                        <DisplayComponent input={this.state.input}  />
                        
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
