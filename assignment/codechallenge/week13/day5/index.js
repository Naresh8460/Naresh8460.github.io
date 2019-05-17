import React from 'react';
import ReactDOM from 'react-dom';

class Even extends React.Component{
    
       constructor(props){
        super(props);

        this.state = {
            num:"Enter number",
            output:""
        };
        this.inputChanged = this.inputChanged.bind(this);
        this.check = this.check.bind(this);
    }
   
    inputChanged(number){
        this.setState({
            num: number.target.value
        });
    }
    
    check() {
     if (this.state.num %2 === 0){
         this.setState({output : "even"});
     }else{
        this.setState({output : "odd"});;
     }
   }
   
    render(){
        return(
            <div>
                <h2>{this.state.output}</h2>
                <br/>
                <input type = "text" onChange={this.inputChanged}/>
                <br/>
                <br/>
                <button onClick={this.check}>click here</button>
            </div>
        )
    }
}

ReactDOM.render(<Even/> , document.getElementById("root"));

