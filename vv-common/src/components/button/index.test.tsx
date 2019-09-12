import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

import { Button } from '.'

describe('<Button />', () => {
  it('should to render the component', () => {
    const component = render(<Button color="primary">Button</Button>)
    expect(component.text()).equal('Button')
  })
})
