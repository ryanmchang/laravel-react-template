import React from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Link to="/">
                Navbar
                </Link>
            </div>
        );
    }
}