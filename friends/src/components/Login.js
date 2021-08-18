import React from 'react'
import axiosWithAuth from '../axiosWithAuth'

class Login extends React.Component {
    state = {
        creds: {
            username: '',
            password:''
        }
    }


    handleChange = (event) => {
        this.setState({
            credentials: {...this.state.credentials,[event.target.name]: event.target.value}
        })
    }

    login = (e) => {
        e.preventDefault()

        axiosWithAuth().post('/login', this.state.creds)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/friends')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.creds.username}
                        onChange={this.handleChange} />
                    <input
                        type='text'
                        name='password'
                        value={this.state.creds.password}
                        onChange={this.handleChange} />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login