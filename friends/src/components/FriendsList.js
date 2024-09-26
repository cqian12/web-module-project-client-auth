import React from 'react';
import axiosWithAuth from '../axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
      this.getData()
  }

  getData = () => {
      axiosWithAuth()
      .getData('/friends')
      .then(res => this.setState({friends:res.data}))
  }

  render() {
      return (
          <div>
              {this.state.map(friend => {
                  return(
                      <div key ={friend.id}>
                          <h2>Name: {friend.name}</h2>
                          <h3>Age: {friend.age}</h3>
                          <h3>Email: {friend.email}</h3>
                        </div>
                  )
              })}
          </div>
      )
  }
}

export default FriendsList