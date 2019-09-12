import './style.scss'

import React from 'react'
import { Row, Col } from 'reactstrap'
import { MY_BASKET } from '../src/mocks/my-basket'
import { Layout } from '../src/components/layout'
import { CartItems } from '../src/components/cart-items'
import { CartSubtotal } from '../src/components/cart-subtotal'
import { Coupon } from '../src/components/coupon'
import { CartContinue } from '../src/components/cart-continue'
import { CartSeller } from '../src/components/cart-seller'

class MyBasket extends React.Component {
  render() {
    return (
      <Layout className="my-basket">
        <Row>
          <Col ms={12} md={7}>
            <CartItems cart={MY_BASKET} mb={3} />
          </Col>

          <Col ms={12} md={5}>
            <Coupon mb={3} apply={(value: any) => console.log(value)} />
            <CartSubtotal mb={3} />
          </Col>
        </Row>

        <Row noGutters>
          <Col sm={12}>
            <CartContinue />
          </Col>
        </Row>

        <CartSeller mt={30} />
      </Layout>
    )
  }
}

export default MyBasket
