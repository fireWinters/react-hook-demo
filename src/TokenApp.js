import React, { Component } from 'react';

class TokenForm extends Component {
    handleSubmit = event => {
        event.preventDefault();
        const { setToken } = this.props;
        const token = this.tokenInput.value;
        if (token) {
            setToken(token);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="token"
                    placeholder="Enter your Github token"
                    ref={input => {
                        this.tokenInput = input;
                    }}
                />
            </form>
        )
    }
}

export default class TokenApp extends Component {
    state = {
        token: null
    }

    componentDidMount() {
        this.setState({ token: sessionStorage.getItem("token") });
    }

    setToken = token => {
        sessionStorage.setItem("token", token);
        this.setState({ token });
    }

    render() {
        const { token } = this.state;
        return (
            <div>
                <h1>Hello</h1>
                { token ? token : <TokenForm setToken={this.setToken} />}
            </div>
        )
    }
}