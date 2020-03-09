import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
      <SEO title="Contact" />
      <Container>
      <h1>Contact</h1>
          <Row>
            <Col xs="6">
                <p>Lorem ipsum dolor sit amet. Nulla ac erat nunc. Praesent vehicula non mauris sit amet consectetur. Fusce tristique euismod dui ut facilisis. Donec quam ligula, pharetra quis arcu sit amet, bibendum tempus orci. Nunc aliquam magna nulla, sed suscipit lorem bibendum vel. Sed ultricies ut ante vestibulum aliquam. Praesent lacus ligula, pulvinar et accumsan ut, finibus porta orci. Pellentesque viverra, enim aliquet suscipit mollis, massa lacus faucibus nulla, eu porttitor metus augue non ex. Phasellus tincidunt, est at eleifend sodales, mauris velit vestibulum nulla, id ullamcorper nisi massa vitae tellus.</p>
              </Col>
              <Col xs="6">
                <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="toto@example.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="exapleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button color="white" className="btn btn-outline-primary">Submit</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  </Layout>
)

export default ContactPage