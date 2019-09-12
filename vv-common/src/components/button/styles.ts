import styled, { css } from 'styled-components'
import { space, layout, variant, compose } from 'styled-system'

import { theme } from '../../styles/theme'

const { buttons: variants, typography } = theme
const { white, gray, 'moon-gray': borderColor } = theme.colors

const bg = white
const border = `${theme.borders[1]} ${borderColor}`
const borderRadius = `${theme.radii[2]}px`
const padding = `${theme.space[2]}px`

const transformed = css`
  text-transform: ${(props: any) => props.transform};
`

const rounded = css`
  border-radius: ${(props: any) => ((props.rounded === undefined ? true : props.rounded) ? borderRadius : 0)};
`

const blocked = css`
  width: ${(props: any) => (props.block ? '100%' : 'auto')};
`

const base = css`
  background: ${bg};
  border: ${border};
  padding: ${padding};
  color: ${gray};

  text-align: center;
  outline: none;

  svg {
    display: inline-block;
    font-size: inherit;
  }
  svg + span,
  span + svg {
    margin-left: 10px;
  }

  &:active,
  &:hover,
  &:focus,
  &:visited {
    outline: none;
  }
`

const system = compose(
  layout,
  space,
  variant({
    variants,
  })
)

export const Container = styled.button`
${base}
${typography.button}
${system}

${rounded}
${transformed}
${blocked}
`
