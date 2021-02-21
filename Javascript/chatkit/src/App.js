import React, { Component } from 'react';
import ChatMessage from './Components/ChatMessage';
import Signup from './Components/Signup';
import ChatApp from './Components/ChatApp';

import { default as Chatkit } from '@pusher/chatkit-server';

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:4f8751df-a51a-4d04-8017-4be43be8d155",
  key: "f9ad34e4-399e-4df0-bd22-ff52824f241a:WHVz6UAnRB+D9P41jo4C47XgY3N9PD9Kdxz8n2rVo00="
})


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: '',
      currentId: '',
      currentView: 'signup'
    }
    this.changeView = this.changeView.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  createUser(username) {
    chatkit.createUser({
      id: username,
      name: username,
    })
      .then((currentUser) => {
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: 'chatApp'
        })
      }).catch((err) => {
        if (err.status === 400) {
          this.setState({
            currentUsername: username,
            currentId: username,
            currentView: 'chatApp'
          })
        } else {
          console.log(err.status);
        }
      });
  }

  changeView(view) {
    this.setState({
      currentView: view
    })
  }

  render() {
    let view = '';

    if (this.state.currentView === "ChatMessage") {
      view = <ChatMessage changeView={this.changeView} />
    } else if (this.state.currentView === "signup") {
      view = <Signup onSubmit={this.createUser} />
    } else if (this.state.currentView === "chatApp") {
      view = <ChatApp currentId={this.state.currentId} />
    }
    return (
      <div className="App">
        {view}
      </div>
    );
  }
}
export default App;