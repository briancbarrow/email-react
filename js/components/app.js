var React = require('react');
var SideNavContainer = require('./sidenav-container');

var App = function(props) {
    return (
        <div>
            <SideNavContainer />
            <div id='main'>
                <h1>
                    Mail App
                </h1>
                {props.children}
            </div>
        </div>
    );
};

module.exports = App;