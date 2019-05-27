import React from 'react';

class Pro1 extends React.Component {
    render() {
        return (
         <div>
               <div className="container-fluid">
                  <h1 className="text-left">About Us</h1>
               </div>

               <div className="row">
                 <div className="offset-md-2 col-md-4">
                     <h3>CEO</h3>
                     <h4>Jack Sparrow</h4>
                     <p> Best pirate in the history</p>
                  </div>
        
                  <div className="col-md-3">
                     <img src="cap.png" alt="pic"/>
                 </div>
              </div>
          </div>
        )
    }
}

class Pro2 extends React.Component {
    render(){
        return(
            <div>
              <div className="row">
                  <div className="offset-md-2 col-md-4">
                     <h3>CTO</h3>
                     <h4>The Mask</h4>
                     <p>Adventurous, likes taking risk</p>
                 </div>
                 <div className="col-md-2 col-md-4">
                     <img src="mask.png" alt="pic"/>
                 </div>
              </div> 
         </div>
        )
    }
} 

class Pro3 extends React.Component {
    render(){
        return(
          <div>
              <div className="row">
                  <div className="offset-md-2 col-md-4">
                     <h3>COO</h3>
                     <h4>Thanos</h4>
                     <p>believes in equality</p>
                  </div>
                  <div className="off-md-3">
                     <img src="thanos.png" alt="pic"/>
                 </div>
              </div>
          </div>
        )
    }
}

class About extends React.Component {
    render () {
        return (
            <div>
                < Pro1/>
                <br/>
                <Pro2/>
                <br/>
                <Pro3/>
                <br/>
            </div>
        )
    }
}

export default About;
