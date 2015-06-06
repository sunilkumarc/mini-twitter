var React = require('react');
var $ = require('jquery');
var Router = require('react-router');

var Login = React.createClass({displayName: "Login",
    mixins: [Router.Navigation],

    login: function() {

        $.ajax({
            type: "POST",
            url: "/loginUser",

            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
				email: this.refs.email.getDOMNode().value,
				pass: this.refs.pass.getDOMNode().value
			}),

            success: function(data) {
                console.log("Success!");
                this.transitionTo("/");
            },

            failure: function(err) {
                console.log("Error Occured : ");
            }
        });
    },

    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Login Page"), 

                React.createElement("table", null, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Email"), 
                        React.createElement("td", null, React.createElement("input", {type: "text", label: "email", ref: "email"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Pass"), 
                        React.createElement("td", null, React.createElement("input", {type: "text", label: "pass", ref: "pass"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null), 
                        React.createElement("td", null, React.createElement("input", {type: "submit", value: "Login", onClick: this.login}))
                    )
                )

            )
        );
    }
});

module.exports = Login;
