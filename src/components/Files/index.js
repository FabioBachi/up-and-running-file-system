import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { getFiles } from '../../store/reducers/files';
import { withRouter } from "react-router-dom";
import qs from 'qs';

class Files extends Component {
    componentDidMount (){
        this.getFiles();
    }

    componentDidUpdate (prevProps){
        if (this.props.location.pathname !== prevProps.location.pathname || this.props.location.search !== prevProps.location.search){
            this.getFiles();
        }
    }

    getFiles = () => {
        let search = this.props.location.search;
        const searchParams = qs.parse(search.replace(/\?/g, ''))

        const params = {
            page: searchParams.page || 1,
            tag: searchParams.tag || null,
        };

        this.props.getFiles(params);

    }

    render (){
        const { files, loading } = this.props;

        return (
            <section className="box" id="files">
                <header className="boxTitle"><FontAwesome name="folder-open" /> Files</header>
                <ul className="fileList">
                    {files.map((el, i) =>
                        <li key={el.id}>
                            <div className="fileName">{el.name}</div>
                            <a href="/" className="fileButton"><FontAwesome name="pencil" /></a>
                        </li>
                    )}
                </ul>
                { loading && <div className="filesLoading"><FontAwesome name="refresh" spin /></div> }
            </section>
        );
    }
}

const mapStateToProps = ({ files }) => ({
    files: files.files,
    loading: files.loading,
});

const mapDispatchToProps = {
    getFiles
};

const FilesRouted = withRouter(Files);

export default connect(mapStateToProps, mapDispatchToProps)(FilesRouted);