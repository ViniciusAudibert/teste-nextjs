import React from 'react'

import { Container } from './styles'

const Rect = ({ children, ...rest }: any) => {
  return <Container {...rest}>{children}</Container>
}

Rect.defaultProps = {
  rounded: false,
  spaced: false,
  shadow: false,
}

export { Rect }
