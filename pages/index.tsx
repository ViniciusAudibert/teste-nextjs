import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import { MY_BASKET } from '../src/mocks/my-basket'
import { Layout } from '../src/components/layout'
import { CartItems } from '../src/components/cart-items'
import Link from 'next/link'

class MyBasket extends React.Component {
  render() {
    const { items } = MY_BASKET
    return (
      <Layout>
        <Row>
          <Col>
            <CartItems items={items} />
          </Col>
        </Row>

        <Row>
          <Col className="cart-actions">
            <Link href="/identificacao">
              <Button color="dark" block>
                Fechar Pedido
              </Button>
            </Link>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default MyBasket
