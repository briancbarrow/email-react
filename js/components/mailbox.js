import React from 'react';
import {Link} from 'react-router';

export default function Mailbox(props) {
    return (
        <Link className="mailbox" to={'/mail/' + props.name}>
            {props.name}
        </Link>
    );
};
