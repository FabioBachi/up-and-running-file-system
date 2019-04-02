import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { getFiles } from '../../store/reducers/files';

class Files extends Component {
    componentDidMount (){
        this.props.getFiles();
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

export default connect(mapStateToProps, mapDispatchToProps)(Files);