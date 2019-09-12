import React from 'react'

import { Container } from './styles'

function Input({ value, ...rest }: any) {
  return <Container value={value} {...rest} />
}

export { Input }
