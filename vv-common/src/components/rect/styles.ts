import styled from 'styled-components'

import { Box } from '../box'
import { theme } from '../../styles/theme'

const { white, blacks, 'moon-gray': gray } = theme.colors

const bg = white
const border = `${theme.borders[1]} ${gray}`
const borderRadius = `${theme.radii[2]}px`
const padding = `${theme.space[2]}px`
const boxShadow = `0 2px 5px ${blacks[4]}`

export const Container = styled(Box)`
  background: ${bg};
  border: ${border};
  border-radius: ${(props: any) => (props.rounded ? borderRadius : 0)};
  padding: ${(props: any) => (props.spaced ? padding : 0)};
  box-shadow: ${(props: any) => (props.shadow ? boxShadow : 0)};
`
