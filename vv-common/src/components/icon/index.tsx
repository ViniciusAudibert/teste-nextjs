import React from 'react'

import { theme } from '../../styles/theme'
import { Container } from './styles'

const { 'light-silver': colorDefault } = theme.colors
const { 0: sizeDefault } = theme.width

function Icon({ children, ...rest }: any) {
  return <Container {...rest}>{children}</Container>
}

Icon.defaultProps = {
  color: colorDefault,
  width: sizeDefault,
}

export { Icon }
