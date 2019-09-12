import './style.scss'

import React, { useState } from 'react'
import { Text, Input, Button, Rect } from 'vv-common'

const Coupon = ({ value, apply, ...rest }: any) => {
  const [coupom, setCoupom] = useState(value)
  function handleApplyCoupom() {
    apply(coupom)
  }

  return (
    <Rect className="cart-coupon" rounded spaced shadow {...rest}>
      <Text variant="body2">Cupom</Text>
      <Input type="text" value={coupom} onChange={(e: any) => setCoupom(e.target.value)} />
      <Button variant="primary" onClick={handleApplyCoupom} disabled={!coupom}>
        Validar
      </Button>
    </Rect>
  )
}

Coupon.defaultProps = {
  value: '',
  apply: () => {},
}

export { Coupon }
