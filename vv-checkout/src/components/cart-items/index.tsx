import React, { useState } from 'react'
import { MdDelete, MdLocalShipping } from 'react-icons/md'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Button, Checkbox, Icon, Text, Box } from 'vv-common'

import { CartItem } from './partials/item'
import { CartItemBox } from './partials/box'
import { CartItemDescription } from './partials/description'
import { CartItemInfo } from './partials/info'
import { CartItemSellerAmount } from './partials/seller-amount'
import { CartItemShipping } from './partials/shipping'
import { CartItemShippingContent } from './partials/shipping-content'
import { CartItemPrices } from './partials/prices'
import { CartType } from '../../@types/cart'

interface Props {
  cart: CartType
  mb: number
}

export const CartItems = ({ cart, ...rest }: Props) => {
  const [amountOpen, setAmountOpen] = useState(false)
  const [deliveryOpen, setDeliveryOpen] = useState(false)

  function handleAmount() {
    setAmountOpen(false)
  }

  function handleDelivery() {
    setDeliveryOpen(false)
  }

  return (
    <Box {...rest}>
      <ul className="cart-items">
        {cart.items.map((item, index) => {
          const { productInfo, price, delivery, services } = item

          return (
            <CartItem key={index}>
              <CartItemBox>
                {/* Info */}
                <CartItemInfo>
                  <CartItemDescription>
                    <img className="product-info-image" src={productInfo.image} alt={productInfo.name} />
                    <Text className="product-info-name" variant="title">
                      {productInfo.name}
                    </Text>
                  </CartItemDescription>
                  <CartItemSellerAmount>
                    <div className="product-info-seller">
                      <Text variant="caption">
                        Vendido e entregue por <Text variant="highlight">{productInfo.seller}</Text>
                      </Text>
                    </div>
                    <div className="product-info-amount">
                      <Dropdown isOpen={deliveryOpen} toggle={() => setDeliveryOpen(!deliveryOpen)}>
                        <DropdownToggle caret>{productInfo.amount}</DropdownToggle>
                        <DropdownMenu>
                          {[1, 2, 3, 4, 5, 6].map((num, numIndex) => (
                            <DropdownItem key={numIndex} onClick={() => handleDelivery()}>
                              {num}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                      <Button>
                        <Icon color="light-silver">
                          <MdDelete size={20} />
                        </Icon>
                      </Button>
                    </div>
                  </CartItemSellerAmount>
                  <CartItemPrices>
                    <li>
                      <Text variant="caption">Valor unitário</Text>
                      <Text variant="highlight">{price.price}</Text>
                    </li>
                    <li>
                      <Text variant="caption">Frete</Text>
                      <Text variant="highlight">{delivery.freight}</Text>
                    </li>
                    <li>
                      <Text variant="caption">Sub-Total</Text>
                      <Text variant="highlight">{price.subtotal}</Text>
                    </li>
                  </CartItemPrices>
                </CartItemInfo>

                {/* Shipping */}
                <CartItemShipping>
                  <Dropdown isOpen={amountOpen} toggle={() => setAmountOpen(!amountOpen)}>
                    <DropdownToggle caret>
                      <CartItemShippingContent>
                        <MdLocalShipping />
                        <Text variant="caption">Entrega:</Text>
                        <Text variant="body2">{delivery.name}</Text>
                      </CartItemShippingContent>
                    </DropdownToggle>
                    <DropdownMenu>
                      {[1, 2, 3, 4, 5, 6].map((num, numIndex) => (
                        <DropdownItem key={numIndex} onClick={() => handleAmount()}>
                          {num}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </CartItemShipping>

                {/* Services */}
                <div style={{ paddingTop: '10px' }}>
                  <ul className="cart-item-services">
                    {services.map((service: any, serviceIndex: number) => (
                      <li className="item" key={serviceIndex}>
                        <ul>
                          <li>
                            <div className="service-item-content">
                              <Checkbox checked={service.enable}>{service.name}</Checkbox>
                              <Text variant="body2" className="service-price">
                                {service.price}
                              </Text>
                            </div>
                          </li>
                          {service.hint && (
                            <li>
                              <Text>{service.hint.description}</Text>
                            </li>
                          )}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </CartItemBox>
            </CartItem>
          )
        })}
      </ul>
    </Box>
  )
}
