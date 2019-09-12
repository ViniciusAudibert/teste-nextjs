import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

import { Rect } from '.'

describe('<Rect />', () => {
  it('should to render the component', () => {
    const component = render(<Rect>Rectangle</Rect>)
    expect(component.text()).equal('Rectangle')
  })
})
