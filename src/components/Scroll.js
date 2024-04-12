import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', msOverflowStyle: 'none', scrollbarWidth: "none", height: '82vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;