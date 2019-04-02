import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { toggleMenu } from '../../store/reducers/common';
import { getTags } from '../../store/reducers/files';

class Tags extends Component {
    componentDidMount (){
        this.props.getTags();
    }

    closeMenu = () => {
        this.props.toggleMenu(false);
    }

    render (){
        const { loading, tags } = this.props;

        return (
            <section className={`${'box' + (this.props.menuOpen ? ' menuOpen' : '')}`} id="tags">
                <button className="tagsClose" onClick={this.closeMenu}><FontAwesome name="times" /></button>
                <header className="boxTitle"><FontAwesome name="tags" /> Tags</header>
                <ul className="tagList">
                    {tags.map((el, i) =>
                        <li key={i}><Link to={`/?tag=${el.tag}`}>{el.tag} <span>({el.files})</span></Link></li>
                    )}
                </ul>
                { loading && <div className="filesLoading"><FontAwesome name="refresh" spin /></div> }
            </section>
        );
    }
}

const mapStateToProps = ({ common, files }) => ({
    menuOpen: common.menuOpen,
    tags: files.tags
});

const mapDispatchToProps = {
    getTags,
    toggleMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);