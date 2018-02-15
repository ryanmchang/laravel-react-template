import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

class Resource extends Component {

    render(){


        return (
            <div>
                Hi, memes.
            </div>
        )
    }
}


//connect allows you to reference the store
export default Resource;
