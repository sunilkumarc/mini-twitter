var React = require('react');
var $ = require('jquery');
var Navigation = require('react-router').Navigation;

var Login = React.createClass({

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
            <div>
                <h1>Login Page</h1>

                <table>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" label="email" ref="email" /></td>
                    </tr>
                    <tr>
                        <td>Pass</td>
                        <td><input type="password" label="pass" ref="pass" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Login" onClick={this.login} /></td>
                    </tr>
                </table>

            </div>
        );
    }
});

module.exports = Login;
