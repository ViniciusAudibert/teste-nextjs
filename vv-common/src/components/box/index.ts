import styled from 'styled-components'
import {
  borderColor,
  borderRadius,
  border,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  flexBasis,
  flexDirection,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  right,
  space,
  textAlign,
  top,
  width,
  zIndex,
  background,
  typography,
} from 'styled-system'

const Box = styled.div`
  ${display}
  ${space}
  ${width}
  ${minWidth}
  ${maxWidth}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${color}
  ${textAlign}
  ${boxShadow}
  ${borderRadius}
  ${borderColor}
  ${flexBasis}
  ${flex}
  ${position}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${border}
  ${flexDirection}
  ${background}
  ${typography}
`

export { Box }
