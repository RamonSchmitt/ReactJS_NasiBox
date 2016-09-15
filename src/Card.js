import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="Nasi Goreng"
      subtitle="Chicken, Shrimp or Vegetarian"
      avatar="./src/images/nasi_goreng.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Nasi Goreng" subtitle="Chicken, Shrimp or Vegetarian" />}
    >
      <img src="./src/images/nasi_goreng.jpg" />
    </CardMedia>
    <CardTitle title="Ingredients" />
    <CardText>
      vegetables and spices, usually seasoned with sweet soy sauce
    </CardText>
    <CardActions>
      <FlatButton
        label="Order"
        style={{backgroundColor: '#E00', color: '#FFF'}}
      />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;
