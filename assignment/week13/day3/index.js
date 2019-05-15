import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return <h2>Log In</h2>;
    }
}

class UserName extends React.Component{
    render(){
        return <form>
        <label>E-Mail</label>
        <input
        label = "username"
        className = "form-control"
        name = "email"
        placeholder = "enter email"
        />
        </form>
    }
}

class PassWord extends React.Component {
    render(){
        return <form>
         <label>Password</label>
         <input 
         className = "form-control"
         name = "password"
         type = "password"
         placeholder = "enter password"
        /> 
        </form>
    }
}

class Button extends React.Component{
    render() {
        return <form>
        <button>login</button>
        </form>
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <Header/>
                        <br/>
                        <UserName/>
                        <br/>
                        <PassWord/>
                        <br/>
                        <div className = "btn btn-secondary" >
                        <Button />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById("root")); 