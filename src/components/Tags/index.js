import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { toggleMenu } from '../../store/reducers/common';

class Tags extends React.Component {
    closeMenu = () => {
        this.props.toggleMenu(false);
    }

    render (){
        return (
            <section className={`${'box' + (this.props.menuOpen ? ' menuOpen' : '')}`} id="tags">
                <button className="tagsClose" onClick={this.closeMenu}><FontAwesome name="times" /></button>
                <header className="boxTitle"><FontAwesome name="tags" /> Tags</header>
                <ul className="tagList">
                    <li className="on"><a href="/">termo de pesquisa <span>(100)</span></a></li>
                    <li><a href="/">termo de pesquisa <span>(100)</span></a></li>
                    <li><a href="/">termo de pesquisa <span>(100)</span></a></li>
                    <li><a href="/">termo de pesquisa <span>(100)</span></a></li>
                    <li><a href="/">termo de pesquisa <span>(100)</span></a></li>
                    <li><a href="/">termo de pesquisa <span>(100)</span></a></li>
                </ul>
            </section>
        );
    }
}

const mapStateToProps = ({ common }) => ({
    menuOpen: common.menuOpen
});

const mapDispatchToProps = {
    toggleMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);