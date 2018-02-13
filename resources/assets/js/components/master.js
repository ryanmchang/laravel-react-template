import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import {sendExampleAction, resetStore} from '../actions/exampleActions';
import {Switch, Route} from 'react-router-dom';
import Home from './home'
import Category from './category'
import Resource from './resource'
import Profile from './profile'

class Master extends Component {
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

        const example = this.props.example;
        const exampleList = example.allIds.map(id => <div key={id}> Dispatched: {example.byId[id]} </div>);

        return (
            <div>
                <Navbar/>
                <Switch>

                    <Route exact path='/' component={Home}/>
                    <Route path='/category/:number' component={Category}/>
                    <Route path='/profile/:number' component={Profile}/>
                    <Route path='/resource/:number' component={Resource}/>

                </Switch>
                <button onClick={() => this.dispatchExampleAction()}>CLICK</button>
                {exampleList}
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
export default connect(mapStateToProps, mapDispatchToProps)(Master);
