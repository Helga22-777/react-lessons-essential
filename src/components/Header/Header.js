import React from "react";

const elemHeader = React.createElement('h2', {className: 'site-header'}, "Yes, it's great!");

function Header (props) {
    return (
        <div className="site-header">
            <h1>React</h1>
            {elemHeader}
            {props.color}
        </div>
    );
}

export default Header;