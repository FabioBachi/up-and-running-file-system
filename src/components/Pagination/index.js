import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Pagination = ({ params, total }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(total / 10); i++){
        pages.push(<Link key={i} to={`/?page=${i}${params.tag ? ('&tag=' + params.tag) : ''}`}>
            <button className={`page ${i == params.page ? 'on' : ''}`}>{ i }</button>
        </Link>);
    }

    return (
        <div id="pagination">
            { total > 10 && <Fragment>
                { pages }

            </Fragment> }
        </div>
    );
};

export default Pagination;