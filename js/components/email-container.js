var React = require('react');
var MAIL = require('../mail')

var EmailList = function(props) {
    var mail = MAIL[props.params.mailBox]
    return <Email mail={MAIL}
}

module.exports = EmailList;