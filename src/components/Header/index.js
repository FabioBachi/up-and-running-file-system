import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { toggleMenu } from '../../store/reducers/common';

class Header extends Component {
    openMenu = () => {
        this.props.toggleMenu(true);
    }

    render (){
        return (
            <header id="header">
                <button id="menuTrigger" onClick={this.openMenu}><FontAwesome name="bars" /></button>
                <div className="logo">
                    <h1>Up and Running</h1>
                    <span>File System</span>
                </div>
                <a href="https://github.com/fbachi/up-and-running-file-system" target="_blank"><FontAwesome name="github" className="github" /></a>
            </header>
        );
    }
}

const mapStateToProps = ({ }) => ({});

const mapDispatchToProps = {
    toggleMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);