import React from 'react'
import { MdDone } from 'react-icons/md'

import { Container, Toggle } from './styles'

function Checkbox({ id, checked = false, disabled = false, children, ...rest }: any) {
  return (
    <Container {...rest}>
      <input id={id} type="checkbox" value={checked} disabled={disabled} />
      <Toggle className={checked ? 'active' : ''}>
        <MdDone color="#FFF" size={10} />
      </Toggle>
      <label htmlFor={id}>{children}</label>
    </Container>
  )
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
}

export { Checkbox }
