import React from 'react';

class Logout extends React.Component {
  handleLogout = () => {
    // Perform logout actions (e.g., clear session, local storage)
    console.log('Logged out');
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Logout</button>
    );
  }
}

export default Logout;
