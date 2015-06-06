var React = require('react');
var $ = require('jquery');
var Navigation = require('react-router').Navigation;

var SignUp = React.createClass({displayName: "SignUp",

    mixins: [Navigation],

    signUp: function() {

        var self = this;
        var Firstname = self.refs.firstname.getDOMNode().value;
        var Lastname = self.refs.lastname.getDOMNode().value;
        var Email = self.refs.email.getDOMNode().value;
        var Pass = self.refs.pass.getDOMNode().value;
        var Confirm = self.refs.confirm.getDOMNode().value

        if (Pass != Confirm) {

            alert("Passwords not matching!");
            return;
        } else {

            $.ajax({
                type: "POST",
                url: "/signUpUser",

                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    first: Firstname,
                    last: Lastname,
    				email: Email,
    				pass: Pass
    			}),

                success: function(data) {
                    console.log("Success!");
                    self.transitionTo("/dashboard");
                },

                error: function(err) {
                    alert(err.responseText);
                }
            });
        }
    },

    render: function() {

        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Sign Up Page"), 
                React.createElement("table", null, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "First Name"), 
                        React.createElement("td", null, React.createElement("input", {type: "text", label: "firstname", ref: "firstname"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Last Name"), 
                        React.createElement("td", null, React.createElement("input", {type: "text", label: "lastname", ref: "lastname"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Email"), 
                        React.createElement("td", null, React.createElement("input", {type: "text", label: "email", ref: "email"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Pass"), 
                        React.createElement("td", null, React.createElement("input", {type: "password", label: "pass", ref: "pass"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Confirm Password"), 
                        React.createElement("td", null, React.createElement("input", {type: "password", label: "confirm", ref: "confirm"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null), 
                        React.createElement("td", null, React.createElement("input", {type: "submit", value: "Login", onClick: this.signUp}))
                    )
                )
            )
        );
    }
});

module.exports = SignUp;
