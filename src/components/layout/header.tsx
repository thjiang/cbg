import React from "react";
import logo from "../../assets/logo.svg";
import "./header.scss";

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-name">天下贰藏宝阁</h1>
            </header>
        );
    }
}

export default Header;
