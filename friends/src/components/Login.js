import React from 'react';
import axios from 'axios';
import '../index.css';
import { Button, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './login.scss';


class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        };
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials);
        // axios
        //     .post('http://localhost:5000/api/login', this.state.credentials)
        //     .then(res => {
        //         localStorage.setItem('token', res.data.payload);
        //          this.props.history.push('/protected');
        //     })
        //     .catch(err => console.log(err.response));
    };

    render() {
        return (
            <div className="loginForm">
            <Form onSubmit={this.login}>
            {/* <div className="login-form-wrapper"> */}
                {/* <form onSubmit={this.login}> */}
                    <Form.Field>
                        <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                    <Button>Log in</Button>
                    {this.props.error && <p className="error">{this.props.error}</p>}
                {/* </form> */}
            {/* </div> */}
                </Form>
            </div>
        );
    }
}

export default Login;
