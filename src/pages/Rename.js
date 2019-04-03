import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Header, RenameForm } from './../components';
import './../styles/App.scss';

const Rename = () => (
    <div className="App">
        <Header />
        <div className="wrapper">
            <div className="limiter">
                <section className="box renameBox">
                    <header className="boxTitle"><FontAwesome name="pencil" /> Renaming file</header>
                    <RenameForm />
                </section>
            </div>
        </div>
    </div>
);

export default Rename;
