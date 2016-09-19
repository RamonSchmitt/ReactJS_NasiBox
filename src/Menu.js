import React from 'react';
import CardExampleWithAvatar from './Card';

class Menu extends React.Component {


  render() {
    var menuList = this.props.dishes.map((dish, index) => (
      <div key={index}>
        <CardExampleWithAvatar title="test" index={index} />
      </div>
    ))
    return (
      <div>
        {menuList}
      </div>
    )
  }
}

export default Menu;
