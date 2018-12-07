import React from 'react';

const fontAwesomeIcon = ({icon ='ellipsis-h', text=false, onClick }) => {
    return (
        <div onClick={onClick}>
            <span className={`fas fa-${icon}`} />
            {Boolean(text)&&<span> &nbsp; {text} </span>}
        </div>
    );
};

export default fontAwesomeIcon;