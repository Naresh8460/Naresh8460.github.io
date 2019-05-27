import React from 'react';

class Contact extends React.Component {
    render(){
       return (
          <div>
              <div className="container-fluid">
                 <h1 className="">Contact Us</h1>
              </div>
              <div className="offset-md-2 col-md-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.660072568!2d77.3507329590377!3d12.954517012303139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1551896602444" title="myFrame"
               width="750" 
               height="450" 
               style={{frameborder:"1",border : "1" }}
               ></iframe>"
               </div>
          </div>
        )
    }
}

export default Contact;