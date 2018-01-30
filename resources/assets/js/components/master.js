import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import { resumeSession } from '../actions/userActions';

class Master extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

        this.props.resumeSession().then(() => {
            // history.push("/home");
        }).catch(() => {

        });

    }

    render(){
        return (
            <div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        resumeSession: () => dispatch(resumeSession())
    }
}

export default connect(null, mapDispatchToProps)(Master);