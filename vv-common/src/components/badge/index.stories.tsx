import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { MdShoppingCart } from 'react-icons/md'

import { Badge } from './'

import { theme } from '../../styles/theme'

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Badge badge={12}>
      <MdShoppingCart color={theme.palette.primary.main} size={30} />
    </Badge>
  ))
