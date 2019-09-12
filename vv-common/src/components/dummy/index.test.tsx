import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { Dummy } from '.'

describe('<Dummy />', () => {
  it('should to render the component', () => {
    const component = shallow(<Dummy />)
    expect(component.text()).equal('I am a dummy react npm module')
  })
})
