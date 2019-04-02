import React from 'react';
import FontAwesome from 'react-fontawesome';

const Tags = () => (
    <section className="box" id="tags">
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

export default Tags;