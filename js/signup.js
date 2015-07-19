var React = require('react');
var $ = require('jquery');
var Navigation = require('react-router').Navigation;

var SignUp = React.createClass({

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
            <div>
                <h1>Sign Up Page</h1>
                <table>
                    <tr>
                        <td>First Name</td>
                        <td><input type="text" label="firstname" ref="firstname" /></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text" label="lastname" ref="lastname" /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" label="email" ref="email" /></td>
                    </tr>
                    <tr>
                        <td>Pass</td>
                        <td><input type="password" label="pass" ref="pass" /></td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td><input type="password" label="confirm" ref="confirm" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Login" onClick={this.signUp} /></td>
                    </tr>
                </table>
            </div>
        );
    }
});

module.exports = SignUp;
