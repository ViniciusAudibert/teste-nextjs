import React from 'react'

import { storiesOf } from '@storybook/react'

import { Box } from '.'

storiesOf('Box', module).add('default', () => (
  <Box bg="gray" width="100px" height="100px" color="black">
    Box
  </Box>
))
