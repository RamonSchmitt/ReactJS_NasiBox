import React from 'react';
import AppBarExampleIcon from './AppBar';
import CardExampleWithAvatar from './Card';

class Home extends React.Component {
  render() {
    return (
      <div>
        <AppBarExampleIcon />
        <CardExampleWithAvatar />
        <CardExampleWithAvatar />
      </div>
    );
  }
}

export default Home;
