import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Rect from '.'
import { toggle, text } from '../../utils'

storiesOf('Rect', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Rect
      rounded={toggle({ label: 'Rounded', value: true })}
      spaced={toggle({ label: 'Spaced', value: true })}
      shadow={toggle({ label: 'Shadow', value: true })}
    >
      {text({ value: 'Rectangle' })}
    </Rect>
  ))
