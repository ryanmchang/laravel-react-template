import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CompStyle = styled.div`
  background-color:black;
  display: flex;
  justify-content: flex-end;
`
const ListStyle = styled.li`
  display: inline-block;
  padding: 10px;
  font-size: 110%;
  color: white;
`


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
            <CompStyle>

              <form>
                  Search    <input type="text" name="firstname"></input>
              </form>

              <Link to="/resource"></Link>

              <ul>
                <ListStyle>Hello</ListStyle>
                <ListStyle>Henlo</ListStyle>
                <ListStyle>Penis</ListStyle>
              </ul>
              <button></button>
            </CompStyle>
        );
    }
}
