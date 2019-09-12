import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { Checkbox } from '.'
import { actions, disabled, text } from '../../utils'

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Checkbox id="checkbox" checked={disabled({ label: 'Checked', value: false })} disabled={disabled({ value: false })} onChange={actions.onChange}>
      {text({ value: 'Checkbox' })}
    </Checkbox>
  ))
