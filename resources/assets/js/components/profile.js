import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

class Profile extends Component {
    constructor(props){
        super(props);

        this.dispatchExampleAction = this.dispatchExampleAction.bind(this);
    }

    dispatchExampleAction(){
        this.props.sendExampleAction();
    }

    componentWillMount(){
        this.props.resetStore();
    }

    componentDidMount() {
    }


    render(){


        return (
            <div>
                Hi, memes.
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        example: state.example
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendExampleAction: () => dispatch(sendExampleAction()),
        resetStore: () => dispatch(resetStore())
    }
}


//connect allows you to reference the store
export default Profile;
