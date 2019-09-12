import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { Text } from './'
import { text, typography, transform } from '../../utils'

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Text variant={typography()} transform={transform()}>
      {text()}
    </Text>
  ))
