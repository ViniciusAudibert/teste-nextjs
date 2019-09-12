import './style.scss'

import { Rect } from 'vv-common'

export const CartItemBox = (...props: any) => {
  return <Rect className="cart-item-box" shadow rounded {...props} />
}
