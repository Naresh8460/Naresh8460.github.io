import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component {
    render() {
        return(
        <Router>
              <div className = "navbar navbar-dark bg-light">
                  <ul className="nav">
                        <li className="nav-link">
                            <Link class="nav-item" to="/">Home</Link>
                        </li> 
                        
                        <li className="nav-link">
                            < Link class="nav-item" to="/about-us">About Us</Link>
                        </li> 
                        
                        <li className="nav-link">
                            <Link class="nav-item" to="/contact-us">Contact Us</Link>
                        </li> 
                  </ul>
              </div>
              
              <Route path="/" exact="true" component={Home}/>
              <Route path="/about-us" component={AboutUs}/>
              <Route path="/contact-us" component={ContactUs}/>
        </Router> 
        )
    }
}

class Home extends React.Component{
    render(){
      return(
          <div className="row">
               <div className=" offset-md-5" > 
                   <h1>Attain U</h1>
                   <hr/>
                   <p>
                     We are not college or not a training camp<br/>
                     We are AttainU a complete solution for your <br/>Dreams to get Attained
                   </p>
              </div>
          </div>       
        )
    }
}

class AboutUs extends React.Component {
    render(){
        return(
      <div className="row">
          <div className=" offset-md-5" > 
                <h1>About Us</h1>
                <br/>
               <p>
                  We Make you capable of doing things which you dreamed for.
              </p>
         </div>
      </div> 
        )
    }
}

class ContactUs extends React.Component {
    render(){
        return(
          <div className="row">
              <div className="col-md-4" > 
                    <h1>Contact Us</h1>
                    <br/>
                   <h3>
                     We are EVERYWHERE !
                   </h3>
              </div>
          </div> 
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
