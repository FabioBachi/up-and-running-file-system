import React, { Component } from 'react';
import qs from 'qs';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { getFiles } from '../../store/reducers/files';
import { toggleMenu } from '../../store/reducers/common';
import { Pagination } from "./../";

class Files extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params: {
                page: 1,
                tag: null
            }
        };
    }

    componentDidMount (){
        this.getFiles();
    }

    componentDidUpdate (prevProps){
        // Test if URL's changed. If it did, reload files with new search params
        if (this.props.location.pathname !== prevProps.location.pathname || this.props.location.search !== prevProps.location.search){
            this.getFiles();
        }
    }

    getFiles = async () => {
        let search = this.props.location.search;
        const searchParams = qs.parse(search.replace(/\?/g, ''));

        this.props.toggleMenu(false);
        await this.setState({
            params: {
                page: searchParams.page ? parseInt(searchParams.page) : 1,
                tag: searchParams.tag || null,
            }
        });

        const params = this.state.params;
        this.props.getFiles(params);

    }

    render (){
        const { files, loading, total } = this.props;

        return (
            <section className="box" id="files">
                <header className="boxTitle"><FontAwesome name="folder-open" /> Files</header>
                <ul className="fileList">
                    {files.map((el, i) =>
                        <li key={el.id}>
                            <Link to={`/rename/${el.id}?filename=${el.name}`} className="fileWrapper">
                                <div className="fileName">{el.name}</div>
                                <div className="fileButton"><FontAwesome name="pencil" /></div>
                            </Link>
                        </li>
                    )}
                </ul>
                { !loading && <Pagination params={this.state.params} total={total} /> }
                { loading && <div className="filesLoading"><FontAwesome name="refresh" spin /></div> }
            </section>
        );
    }
}

const mapStateToProps = ({ files }) => ({
    files: files.files,
    loading: files.loading,
    total: files.total,
});

const mapDispatchToProps = {
    getFiles,
    toggleMenu
};

const FilesRouted = withRouter(Files);

export default connect(mapStateToProps, mapDispatchToProps)(FilesRouted);