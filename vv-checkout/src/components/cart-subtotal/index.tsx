import './style.scss'

import React from 'react'
import { Text, Rect } from 'vv-common'

export const CartSubtotal = ({ ...rest }: any) => {
  return (
    <Rect rounded={false} spaced={false} shadow {...rest}>
      <ul className="cart-subtotal">
        <li className="item">
          <Text variant="body1" transform="uppercase">
            Sub-total
          </Text>
          <Text variant="highlight">R$ 12.680,00</Text>
        </li>
        <li className="item">
          <Text variant="body1" transform="uppercase">
            Frete
          </Text>
          <Text variant="highlight">R$ 12.680,00</Text>
        </li>
        <li className="item">
          <Text variant="body1" transform="uppercase">
            Cupom
          </Text>
          <Text variant="accent">R$ 12.680,00</Text>
        </li>
        <li className="item">
          <Text variant="highlight" transform="uppercase">
            Total da compra
          </Text>
          <Text variant="highlight">R$ 12.680,00</Text>
        </li>
      </ul>
    </Rect>
  )
}
