var React = require('react');
var Sidenav = require('./sidenav');
var MAIL = require('../mail');

var SideNavContainer = function() {
    return(
        <div className='sidenav'>
            <h2>Mailboxes</h2>
            <Sidenav mail={MAIL} />
        </div>
    ) 
};

module.exports = SideNavContainer;