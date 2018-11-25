import React, { Fragment } from 'react';

const FontAwesomeIcon = ({icon ='ellipsis-h', text=false}) => {
    return (
        <Fragment>
            <span className={`fas fa-${icon}`}></span>
            {Boolean(text)&&<span>&nbsp;{text}</span>}
        </Fragment>
    );
};

export default FontAwesomeIcon;