import React from 'react';
import ReactDOM from 'react-dom';

class Navigation extends React.Component {
    render() {
        return (
         <div className = "navbar navbar-dark bg-dark">
              <ul className="nav">
                   <li className="nav-link">
                       <a class="nav-item" href=" ">Home</a>
                   </li> 
                   
                   <li className="nav-link">
                       < a class="nav-item" href=" ">About Us</a>
                   </li> 
                   
                   <li className="nav-link">
                       <a class="nav-item" href=" ">Contact Us</a>
                   </li> 
              </ul>
         </div>
        )
      
    }
}

class Header extends React.Component{
    render(){
        return(
            <div className = "container-fluid">
              <h1 class="text-center">AwesomeCompany.com</h1>
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
            <div class="container">
        <div class="row">
                
            <div class="col"><p><u><h2>Feature #1</h2></u></p>
              <p>bootstrap is good.</p>
            </div>
           <div class="col"><p><u><h2>Feature #2</h2></u></p>
              <p>bootstrap is easy.</p> 
            </div>
            <div class="col"><p><u><h2>Feature #3</h2></u></p>
              <p>NOT that easy kind of easy-ish.</p>
            </div>
            <div class="col"><p><u><h2>Feature #4</h2></u></p>
               <p>Inshort need to practice.</p>
            </div>
        </div>
    </div>
        )
    }
}

class Main extends React.Component{
    render() {
        return (
            <div>
            <Navigation />
            <br/>
            <Header />
            <br/>
            <Content/>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("root")); 