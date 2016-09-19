import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card>
    <CardMedia>
      <img src="./src/images/nasi_goreng.jpg" />
    </CardMedia>
    <CardTitle title="nasi" />
    <CardText>
      <h3>
        Ingredients
      </h3>
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
