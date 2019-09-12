import React from 'react'
import { MdAdd } from 'react-icons/md'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { Button } from './'
import { buttons, disabled, text, transform } from '../../utils'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button variant={buttons({ label: 'Variant' })} disabled={disabled()}>
      {text({ value: 'Button' })}
    </Button>
  ))
