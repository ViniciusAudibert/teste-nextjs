import React from 'react'
import PropTypes from 'prop-types'

import { Container, Num } from './styles'

interface Props {
  children: any
  badge: any
}

function Badge({ children, badge, ...rest }: Props) {
  const numBadge = badge && parseInt(badge, 10) > 0 ? badge : undefined
  // console.log('badge', numBadge);

  return (
    <Container {...rest}>
      {numBadge && <Num>{numBadge}</Num>}
      {children}
    </Container>
  )
}

Badge.propTypes = {
  badge: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export { Badge }
