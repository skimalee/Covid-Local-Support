import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Image, Button } from "semantic-ui-react";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      term: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  handleSearchSubmit = () => {
    this.props.searchRequest(this.state.term);
  };

  responsiveNav = () => {};

  render() {
    return (
      <div>
        {/* SUB NAV BAR BELOW */}

        <div className="ui attached stackable menu">
          <div className="ui container subNav">
            <div>
              <Image href="https://imgur.com/a/94NTL1H" size="tiny" />
            </div>
            <Link
              to="/howtohelp"
              className="item"
              onClick={this.props.clearYelpGrabs}
            >
              How To Help
            </Link>
            <Link to="/stayingsafe" className="item">
              Staying Safe
            </Link>
            <Link to="/registerrestaurant" className="item">
              Register restaurant
            </Link>
            <div className="right item">
              <Link to="/login" onClick={this.props.clearYelpGrabs}>
                Log In
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/signup" onClick={this.props.clearYelpGrabs}>
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default NavBar;
