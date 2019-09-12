import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should to render the component', () => {
    const component = render(<Checkbox>Checkbox</Checkbox>)
    expect(component.text()).equal('Checkbox')
  })
})
