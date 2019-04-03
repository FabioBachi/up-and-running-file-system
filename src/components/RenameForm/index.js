import React, { Component } from 'react';
import qs from 'qs';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { notify } from 'react-notify-toast';
import { rename } from '../../store/reducers/files';

class RenameForm extends Component {
    constructor(props) {
        super(props);
        let search = qs.parse(window.location.search.replace(/\?/, ''));
        this.state = { filename: search.filename || null };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { filename } = this.state;

        if (!filename.trim()){
            notify.show('Please inform the desired filename.', 'error');
        } else {
            const path = window.location.pathname.split('/');
            this.props.rename(path[path.length - 1], filename).then((response) => {
                notify.show(response.payload.data.message, 'success');
                this.props.history.goBack();
            }).catch(() => {
                notify.show('There was a problem renaming this file.', 'error');
            });
        }
    }

    onChange = (e) => {
        this.setState({ filename: e.target.value });
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render (){
        const { loading } = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <label className="field">
                    <div>Filename:</div>
                    <input type="text" className="input" value={this.state.value} onChange={this.onChange} value={this.state.filename} />
                </label>
                { !loading && <button type="submit" className="submit">Save</button> }
                { !loading && <div onClick={this.goBack} className="backButton">Go back</div> }
                { loading && <div className="filesLoading"><FontAwesome name="refresh" spin /></div> }
            </form>
        );
    }
}

const mapStateToProps = ({ files }) => ({
    loading: files.loadingRename,
});

const mapDispatchToProps = {
    rename
};

const RenameFormRouted = withRouter(RenameForm);

export default connect(mapStateToProps, mapDispatchToProps)(RenameFormRouted);