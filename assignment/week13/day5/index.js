import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
   constructor (props){
       super(props);

       this.state = {
           number1 : "",
           number2 : "", 
           result : ""
       };

       this.number1Changed = this.number1Changed.bind(this);
       this.number2Changed = this.number2Changed.bind(this);
       this.addButton = this.addButton.bind(this);
       this.subButton = this.subButton.bind(this);
       this.mulButton = this.mulButton.bind(this);
       this.divButton = this.divButton.bind(this);
   }

   number1Changed(event){
       this.setState({
           number1: parseInt(event.target.value)
       });
   }

   number2Changed(event){
       this.setState({
           number2: parseInt(event.target.value)
       });
   }

   addButton(){
      //console.log(this.state.number1, this.state.number2)
      let num1 = this.state.number1;
      let num2 = this.state.number2;

      if(num1 === ""|| num2 === ""){
             alert  ("enter number");
             return;
          }else{
              let res = (num1+num2);
              this.setState({result:res});
              console.log(res)
          }
    }

    subButton(){
        //console.log(this.state.number1, this.state.number2)
        let num1 = this.state.number1;
        let num2 = this.state.number2;
  
        if(num1 === ""|| num2 === ""){
               alert  ("enter number");
               return;
            }else{
                let res = (num1-num2);
                this.setState({result:res});
                console.log(res)
            }
      }

      mulButton(){
        //console.log(this.state.number1, this.state.number2)
        let num1 = this.state.number1;
        let num2 = this.state.number2;
  
        if(num1 === ""|| num2 === ""){
               alert  ("enter number");
               return;
            }else{
                let res = (num1*num2);
                this.setState({result:res});
                console.log(res)
            }
      }

      divButton(){
        //console.log(this.state.number1, this.state.number2)
        let num1 = this.state.number1;
        let num2 = this.state.number2;
  
        if(num1 === ""|| num2 === ""){
               alert  ("enter number");
               return;
            }else{
                let res = (num1/num2);
                this.setState({result:res});
                console.log(res)
            }
      }

    render() {
       return(
           <div className = "container-fluid">
               <div className = "row">
                   <div className = "col-md-4 offset-md-4">
                        <h3>calculator</h3>
                        <hr/>
                        <input onChange={this.number1Changed} className="form-control" type="number" />
                        <br/>
                        <input onChange={this.number2Changed} className="form-control" type="number" />
                        <br/>
                        <button onClick={this.addButton}>+</button>
                        <button onClick={this.subButton}>-</button>
                        <button onClick={this.mulButton}>X</button>
                        <button onClick={this.divButton}>/</button>
                        <br/>
                        <h2>{this.state.result}</h2>
                  </div>    
              </div>
          </div>
        ) 
    }
}

ReactDOM.render(<Calculator />, document.getElementById("root") );