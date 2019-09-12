import './style.scss'

import React from 'react'
import { Text, Button } from 'vv-common'
import { Col, Row } from 'reactstrap'
import { MdArrowForward } from 'react-icons/md'
import Link from 'next/link'

const CartContinue = ({ value, apply, ...rest }: any) => {
  return (
    <div className="cart-continue" {...rest}>
      <Row noGutters>
        <Col xs={6} sm={6} md={7}>
          <div className="cart-resume">
            <Text variant="body1" transform="uppercase">
              Valor total
            </Text>
            <Text variant="highlight">R$ 13.568,00</Text>
          </div>
        </Col>
        <Col xs={6} sm={6} md={5}>
          <div className="cart-continue-content">
            <Link href="/identificacao">
              <Button variant="accent" rounded={false} block height="100%" iconBefore={<MdArrowForward />}>
                Fechar Pedido
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export { CartContinue }
