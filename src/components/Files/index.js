import React from 'react';
import FontAwesome from 'react-fontawesome';

const Files = () => (
    <section className="box" id="files">
        <header className="boxTitle"><FontAwesome name="folder-open" /> Files</header>
        <ul className="fileList">
            {[0, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
                <li key={i}>
                    <div className="fileName">nome do arquivo</div>
                    <a href="/" className="fileButton"><FontAwesome name="pencil" /></a>
                </li>
            )}
        </ul>
    </section>
);

export default Files;