var React = require('react');
var $ = require('jquery');
var Router = require('react-router');

var Login = React.createClass({
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
            <div>
                <h1>Login Page</h1>

                <table>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" label="email" ref="email" /></td>
                    </tr>
                    <tr>
                        <td>Pass</td>
                        <td><input type="text" label="pass" ref="pass" /></td>
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
