import React from 'react'
import { Link } from 'gatsby'
import {Card, CardText, CardSubtitle, CardBody, CardImg, CardDeck, Button} from 'reactstrap'
import ballonBasket from "./assets/ballon_basket.jpg"
import ballonFoot from "./assets/ballon_foot.webp"
import ballonRugby from "./assets/ballon_rugby.jpg"

const Post = ({path}) => {
    return (
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={ballonBasket} alt="Card image cap" />
          <CardBody>
            <CardSubtitle><Link to={path}>Basket Ball</Link></CardSubtitle>
            <CardText>45€</CardText>
            <Button color="white" className="btn btn-outline-success">Buy it</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={ballonFoot} alt="Card image cap" />
          <CardBody>
          <CardSubtitle><Link to={path}>Foot Ball</Link></CardSubtitle>
            <CardText>35€</CardText>
            <Button color="white" className="btn btn-outline-success">Buy it</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={ballonRugby} alt="Card image cap" />
          <CardBody>
          <CardSubtitle><Link to={path}>Rugby Ball</Link></CardSubtitle>
            <CardText>45€</CardText>
            <Button color="white" className="btn btn-outline-success">Buy it</Button>
          </CardBody>
        </Card>
      </CardDeck>
    );
  };
  

export default Post