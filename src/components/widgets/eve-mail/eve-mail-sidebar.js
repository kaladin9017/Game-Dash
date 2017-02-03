import React, { Component } from 'react';

class EveMailSidebar extends Component {
  render() {
    return (
      <div>
        <button>Inbox</button>
        <button>Alliance</button>
        <button>Corporation</button>
        <button>Sent</button>
        <button>Trash</button>
      </div>
    );
  }
}

export default EveMailSidebar;
