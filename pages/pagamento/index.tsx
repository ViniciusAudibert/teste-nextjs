import React from 'react'
import { Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Button } from 'reactstrap'
import { Layout } from '../../components/layout'
import './style.scss'
import Link from 'next/link'

class Pagamento extends React.Component {
  render() {
    return (
      <Layout className="pagamento">
        <h1 className="pagamento-title">Forma de pagamento</h1>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem tag="a">
                <ListGroupItemHeading>Cartão de crédito</ListGroupItemHeading>
                <ListGroupItemText>Pagar em 1x no cartão de crédito</ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <Link href="/finalizado">
              <Button className="pagamento-finish" color="dark" block>
                Finalizar Compra
              </Button>
            </Link>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Pagamento
