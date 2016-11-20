import React from 'react';
import MAIL from '../mail';
import {Link} from 'react-router';

export default function EmailList(props) {
    var mailbox = props.params.mailBox.toLowerCase();
    var mail = Object.keys(MAIL[mailbox]).map(function(mailId, index) {
        return(
            <Link key={index} to={'/mail/' + props.params.mailBox + '/' + MAIL[mailbox][mailId].id}>
                <li>                
                    <div className='mail-tease'>
                        <h3>{MAIL[mailbox][mailId].title}</h3>
                        <p>From: {MAIL[mailbox][mailId].from}</p>
                    </div>                    
                </li>
            </Link>
        )
    });
    return (
        <div id='email-list'>
            <ul>
                {mail}
            </ul>
        </div>
    )
}
