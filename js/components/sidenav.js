import React from 'react';
import Mailbox from './mailbox';

export default function SideNav(props) {
    var mail = Object.keys(props.mail).map(function(mailboxId, index) {
        return (
            <li key={index}>
                <Mailbox name={mailboxId.toUpperCase()} />
            </li>
        );
    });
    return (
        <div id='mySidenav'>
            <ul>
                {mail}
            </ul>
        </div>
    );
};
