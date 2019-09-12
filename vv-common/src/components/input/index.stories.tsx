import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { Input } from '.'
import { actions, disabled, text } from '../../utils'

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('default', () => <Input onChange={actions.onChange} disabled={disabled()} value={text({ value: '' })} />)
