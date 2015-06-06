var React = require('react');
var $ = require('jquery');
var Navigation = require('react-router').Navigation;

var Login = React.createClass({displayName: "Login",

    mixins: [Navigation],

    login: function() {

        var self = this;

        $.ajax({
            type: "POST",
            url: "/loginUser",

            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
				email: self.refs.email.getDOMNode().value,
				pass: self.refs.pass.getDOMNode().value
			}),

            success: function(data) {
                self.transitionTo("/dashboard");
            },

            error: function(err) {
                alert(err.responseText);
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
                        React.createElement("td", null, React.createElement("input", {type: "password", label: "pass", ref: "pass"}))
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
