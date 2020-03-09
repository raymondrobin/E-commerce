import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Card, CardText, CardSubtitle, CardBody, CardImg, CardDeck, Button} from 'reactstrap'
import { Link } from 'gatsby'
import ballonBasket from "../components/assets/ballon_basket.jpg"
import ballonFoot from "../components/assets/ballon_foot.webp"
import ballonRugby from "../components/assets/ballon_rugby.jpg"

const ShopPage = ({path}) => { 
  return (
    <Layout>
      <SEO title="Shop" />
      <h1>Shop page</h1>
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
    </Layout>
  )
}

export default ShopPage
