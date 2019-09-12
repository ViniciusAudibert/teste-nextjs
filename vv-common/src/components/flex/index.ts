import styled from 'styled-components'
import { alignContent, alignItems, flexDirection, flexWrap, justifyContent } from 'styled-system'

import { Box } from '../box'

const Flex = styled(Box)`
  display: flex;
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`

export { Flex }
