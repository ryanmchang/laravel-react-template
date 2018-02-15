import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';



const CompStyle = styled.div`
  height: 80px;
  background-color: white;
  border-bottom: solid;
  border-color: gray;
  border-bottom-width: 1px;
`
const ListStyle = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  align-items: center;
  justify-content: space-between;
`

const IconStyle = styled.img`
  height: 75px;
  width: 75px;
  margin: 5px 5px 5px 35px;
`

const ProfIconStyle = styled.img`
  height: 50px;
  width: 50px;
  margin: 5px 35px 5px 5px;
`

const SearchStyle = styled.form`
  width: 100%;
  padding: 10px;
`
const InputStyle = styled.input`
  width: 100%;
  height: 46px;
  font: 15px arial, sans-serif;
  padding: 8px 12px;
  background-color: white;
  box-sizing: border-box;
  border-color: gray;
  border-style: solid;
  border-radius: 9px;
`

const MidStyle = styled.li`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.routeHome = this.routeHome.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    routeHome() {
      history.push('/');
    }

    routeProfile() {
      history.push('/profile');
    }


    render() {
        return (
            <CompStyle>
              <ListStyle>
                <li><IconStyle onClick={this.routeHome} src="https://image.flaticon.com/icons/svg/638/638001.svg"></IconStyle></li>

                <MidStyle>
                  <SearchStyle> <InputStyle type="text" name="firstname" placeholder="Search for Resources"></InputStyle>  </SearchStyle>
                </MidStyle>

                <li><ProfIconStyle onClick={this.routeProfile} src="https://image.flaticon.com/icons/svg/149/149452.svg"></ProfIconStyle></li>

              </ListStyle>
            </CompStyle>
        );
    }
}
