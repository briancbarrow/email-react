import React from 'react';
import Sidenav from'./sidenav';
import MAIL from '../mail';

export default function SideNavContainer() {
    return(
        <div className='sidenav'>
            <h2>Mailboxes</h2>
            <Sidenav mail={MAIL} />
        </div>
    ) 
};
