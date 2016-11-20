import React from 'react';
import SideNavContainer from './sidenav-container';

export default function App(props) {
    return (
        <div>
            <SideNavContainer />
            <div id='main'>
                <h1>
                    Mail App
                </h1>
                {props.children}
            </div>
        </div>
    );
};
