import React from 'react'
import PropTypes from 'prop-types'

import { variantValues as buttons } from '../../utils/variants/buttons'
import { variantValues as transform } from '../../utils/variants/transform'

import { Container } from './styles'

const renderIcon = (element: any) => <>{element}</>

function Button({ children, iconBefore, iconAfter, ...rest }: any) {
  return (
    <Container {...rest}>
      {iconBefore && renderIcon(iconBefore)}
      <span>{children}</span>
      {iconAfter && renderIcon(iconAfter)}
    </Container>
  )
}

Button.defaultProps = {
  variant: 'default',
  block: false,
  rounded: true,
  transform: 'none',
}

export { Button }
