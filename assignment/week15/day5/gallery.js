import React from 'react';
import {connect} from 'react-redux';

import{storeMapper} from './store.js';

class DogGallery extends React.Component{

    showImages () {
        let images = [];

        for (let i=0; i < this.props.dogImages.length; i++){
            images.push(<img key={this.props.dogImages[i]} className="col-md-6" src={this.props.dogImages[i]} /> );
        }
        return images;
    }

    render() {
        if(this.props.galleryLoading) {
            return (
                <p>please hold..</p>
            );
        }else {
            return (
                <div>
                    {this.showImages()}
                </div>
            )
        }
    }
}

let Gallery = connect(storeMapper)(DogGallery)

export {Gallery};