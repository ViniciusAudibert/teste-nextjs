import './style.scss'

import React from 'react'
import { Text, Button } from 'vv-common'
import { Col, Row } from 'reactstrap'

const CartSeller = ({ ...rest }: any) => {
  return (
    <Row {...rest}>
      <Col>
        <Text variant="display2">Televendas / Dúvidas</Text>
        <div className="cart-seller-content">
          <Text variant="body2">Capitais e regiões metropolitanas</Text>
          <Button variant="primary" block>
            Ligar para 4003-2773
          </Button>
          <Text variant="caption">* Demais localidades ligue: (0xx11) 4003-2773</Text>
          <Text variant="highlight" mt={2}>
            Dúvidas? Acesse o Atendimento
          </Text>
        </div>
      </Col>
    </Row>
  )
}

export { CartSeller }
