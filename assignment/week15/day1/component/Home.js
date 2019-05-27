import React from 'react';
//import ReactDOM from 'react-dom';

class Header extends React.Component{
    render(){
        return(
            <div className = "container-fluid">
              <h1 className="text-center">AwesomeCompany.com</h1>
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
         <div className="container">
              <div className="row">
                 <div className="col"><h2>Feature #1</h2> 
                     <p>bootstrap is good.</p>
                 </div> 
                 <div className="col"><h2>Feature #2</h2>
                     <p>bootstrap is easy.</p> 
                  </div>
                  <div className="col"><h2>Feature #3</h2>
                      <p>NOT that easy kind of easy-ish.</p>
                  </div>
                  <div className="col"><h2>Feature #4</h2>
                     <p>Inshort need to practice.</p>
                   </div>
              </div>
         </div>
        )
    }
}

class Home extends React.Component{
    render() {
        return (
            <div>
            <Header />
            <br/>
            <Content/>
            </div>
        )
    }
}

export default Home;
//ReactDOM.render(<Home />, document.getElementById("root")); 