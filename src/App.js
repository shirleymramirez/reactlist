import React, { Component } from 'react';
import User from './components/User/User';
import UniqueId from 'react-html-id';

import './App.css';

class App extends Component {
  constructor() {
    super(); 
    UniqueId.enableUniqueIds(this)
    this.state = {
      users: [
        {id: this.nextUniqueId(), name: 'John', age: 20},
        {id: this.nextUniqueId(), name: 'Peter', age: 30},
        {id: this.nextUniqueId(), name: 'Jill', age: 25},
      ]
    };
    console.log(this.state)
  }

  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({users: users})
  }

  changeUserName = (id, e ) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === id
    });

    const user = Object.assign({}, this.state.users[index])
    user.name = e.target.value;

    const users = Object.assign([], this.state.users);
    users[index] = user;

    this.setState({users:users})
  }

  changeUserAge = (id, e) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === id
    });

    const user = Object.assign({}, this.state.users[index])
    user.age = e.target.value;

    const users = Object.assign([], this.state.users);
    users[index] = user;

    this.setState({users:users})

  }



  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index)=> {
              return(
                <div key={user.id}>
                  <User 
                    age={user.age}
                    delEvent={this.deleteUser.bind(this, index)}
                    changeNameEvent={this.changeUserName.bind(this, user.id)}
                    changeAgeEvent={this.changeUserAge.bind(this, user.id)}
                  >{user.name} 
                  </User>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


export default App;
