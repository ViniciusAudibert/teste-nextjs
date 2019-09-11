import './style.scss'

import React from 'react'

interface Props {
  items: CartItemType[]
}

export const CartItems = (props: Props) => {
  return (
    <ul className="cart-items">
      {props.items.map(item => {
        const { id, imgSrc, name } = item

        return (
          <li className="cart-items-product" key={id}>
            <img src={imgSrc} className="image" />
            <p className="name">{name}</p>
          </li>
        )
      })}
    </ul>
  )
}
