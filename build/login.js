var React = require('react');
var $ = require('jquery');

var Login = React.createClass({displayName: "Login",

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
            React.createElement("div", null, 
                React.createElement("h1", null, "Login Page"), 
                React.createElement("table", null, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Username"), 
                        React.createElement("td", null, React.createElement("input", {type: "text", label: "username", ref: "username"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Pass"), 
                        React.createElement("td", null, React.createElement("input", {type: "text", label: "pass", ref: "pass"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null), 
                        React.createElement("td", null, React.createElement("input", {type: "submit", onClick: this.login}))
                    )
                )
            )
        );
    }
});

module.exports = Login;
