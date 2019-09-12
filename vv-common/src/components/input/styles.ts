import styled from 'styled-components'

import { theme } from '../../styles/theme'

const { typography } = theme
const { white, gray, 'moon-gray': borderColor } = theme.colors

const background = white
const border = `${theme.borders[1]} ${borderColor}`
const borderRadius = `${theme.radii[2]}px`
const padding = `${theme.space[2]}px`

const base = {
  background,
  border,
  borderRadius,
  padding,
  color: gray,
}

export const Container = styled.input.attrs({
  type: 'text',
})`
  ${base}
  ${typography.input}

  &:disabled {
    opacity: 0.4;
  }
`
