import React from 'react';
import AppBarExampleIcon from './AppBar';
import Menu from './Menu';

var dishes = [
  {
    title: 'Nasi Goreng',
    subtitle: 'chicken, shrimp or vegetarian',
    avatar: './src/images/nasi_goreng.jpg',
    ingredients: 'vegetables and spices, usually seasoned with sweet soy sauce',
    image: './src/images/nasi_goreng.jpg'
  },{
    title: 'Gado Gado',
    subtitle: 'vegetarian',
    avatar: './src/images/gado_gado.jpg',
    ingredients: 'various vegetables in peanut sauce topped with krupuk',
    image: './src/images/gado_gado.jpg'
  },{
    title: 'Rendang',
    subtitle: 'beef',
    avatar: './src/images/rendang.jpg',
    ingredients: 'Beef, coconut milk, chilli, ginger, galangal, turmeric, lemongrass, garlic, shallot',
    image: './src/images/rendang.jpg'
  },{
    title: 'Satay',
    subtitle: 'pork, beef or goat',
    avatar: './src/images/satay.jpg',
    ingredients: 'Skewered and grilled meats with various sauces, mainly peanut sauce',
    image: './src/images/satay.jpg'
  }
];

class Home extends React.Component {
  constructor() {
  super();
    this.state = {
      dishes: dishes
    };
  }

  render() {
    return (
      <div>
        <AppBarExampleIcon />
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default Home;
