import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

import { Input } from '.'

describe('<Input />', () => {
  it('should to render the component', () => {
    const component = render(<Input value="Input" onChange={() => {}} />)
    expect(component.val()).equal('Input')
  })
})
