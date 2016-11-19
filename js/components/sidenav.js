var React = require('react');
var Mailbox = require('./mailbox');

var SideNav = function(props) {
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

module.exports = SideNav;