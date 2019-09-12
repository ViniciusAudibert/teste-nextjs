import React from 'react'
import { MdAdd } from 'react-icons/md'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { Icon } from '.'
import { actions, colors, sizes } from '../../utils'

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Icon width={sizes()} color={colors()} onClick={actions.onClick}>
      <MdAdd />
    </Icon>
  ))
