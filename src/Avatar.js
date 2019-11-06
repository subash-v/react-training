import React, { Component } from 'react';
import avatar from "./img_avatar.png";

class Avatar extends Component {
    render() {
        return (
            <div>
                <img src={avatar} height="50px"></img>
            </div>
        );
    }
}

export default Avatar;