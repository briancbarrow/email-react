var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Mailbox = function(props) {
    return (
        <Link className="mailbox" to={'/mail/' + props.name}>
            {props.name}
        </Link>
    );
};

module.exports = Mailbox;