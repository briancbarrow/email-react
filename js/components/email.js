import React from 'react';
import MAIL from '../mail';

export default function Email(props) {
    var mailbox = props.params.mailBox.toLowerCase();
    var email = MAIL[mailbox][props.params.emailId]
    return(
        <div id='mail-content'>
            <h2>{MAIL[mailbox][props.params.emailId].title}</h2>
            <p>{MAIL[mailbox][props.params.emailId].content}</p>
        </div>
    ) 
};
