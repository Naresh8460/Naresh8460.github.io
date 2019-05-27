import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './component/Home.js'; 
import AboutUs from './component/About.js';
import ContactUs from './component/contact.js';

class App extends React.Component {
    render() {
        return (
         <Router>
              <div className = "navbar navbar-dark bg-dark">
                   <ul className="nav">
                      <li className="nav-link">
                          <Link className="nav-item" to="/">Home</Link>
                      </li> 
                        
                      <li className="nav-link">
                            < Link className="nav-item" to="/AboutUs ">About Us</Link>
                      </li> 
                        
                      <li className="nav-link">
                            <Link className="nav-item" to="/ContactUs ">Contact Us</Link> 
                      </li> 
                    </ul>
                </div>

                <Route path="/" exact="true" component={Home}/>
                <Route path="/AboutUs" component={AboutUs}/>
                <Route path="/ContactUs" component={ContactUs}/>
         </Router>
        )
      
    }
}

ReactDOM.render(<App />, document.getElementById("root")); 