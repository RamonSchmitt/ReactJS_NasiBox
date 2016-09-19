import React from 'react';
import CardExampleWithAvatar from './Card';

class Menu extends React.Component {
  render(props) {
    const menuList = this.props.dishes.map((dish, index) => {
      return (
        <div key={index}>
          {console.log(dish.title)}
          <CardExampleWithAvatar title={dish.title} index={index} />
        </div>
      );
    });

    return (
      <div>
        {menuList}
      </div>
    );
  }
}

export default Menu;
