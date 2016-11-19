var React = require('react');
var MAIL = require('../mail');

var Email = function(props) {
    var mailbox = props.params.mailBox.toLowerCase();
    console.log(MAIL[mailbox][props.params.emailId])
    var email = MAIL[mailbox][props.params.emailId]
    return(
        <div id='mail-content'>
            <h2>{MAIL[mailbox][props.params.emailId].title}</h2>
            <p>{MAIL[mailbox][props.params.emailId].content}</p>
        </div>
    ) 
};

module.exports = Email;