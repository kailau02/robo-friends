import React from 'react';
import '../containers/App.css';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '800px', margin: '10px', marginBottom: '5 0px', border: '5px solid black', borderRadius:'10px', backgroundColor: 'rgba(255, 255, 255, 0.5)'   }}>
            {props.children}
        </div>
    )
};

export default Scroll;