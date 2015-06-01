var React = require('react');
var $ = require('jquery');

var Login = React.createClass({

    login: function() {
        // $.ajax({
		// 	type: "POST",
		// 	url: "/login",
		// 	datatype : "json",
		//     contentType: "application/json; charset=utf-8",
		// 	data: JSON.stringify({
		// 		username: this.refs.username.getValue(),
		// 		password: this.refs.pass.getValue()
		// 	}),
		// 	context: this,
		// 	success: function(data) {
		// 		console.log(data);
		// 	},
		// 	error: err => alert(JSON.parse(err.error().responseText).err)
		// });
    },

    render: function() {
        return (
            <div>
                <h1>Login Page</h1>
                <table>
                    <tr>
                        <td>Username</td>
                        <td><input type="text" label="username" ref="username" /></td>
                    </tr>
                    <tr>
                        <td>Pass</td>
                        <td><input type="text" label="pass" ref="pass" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" onClick={this.login} /></td>
                    </tr>
                </table>
            </div>
        );
    }
});

module.exports = Login;
