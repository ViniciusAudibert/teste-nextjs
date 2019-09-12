import styled from 'styled-components'
import { space, textAlign } from 'styled-system'

import { theme } from '../../styles/theme'

const { typography } = theme

const transform = (value: any) => ({
  'text-transform': value,
})

const base = (props: any) => ({
  ...(props.transform ? transform(props.transform) : {}),
})

export const Display1 = styled.h1`
  ${space}
  ${textAlign}

  ${base}
  ${typography.display1}
`

export const Display2 = styled.h2`
  ${space}
  ${textAlign}

  ${base}
  ${typography.display2}
`

export const Display3 = styled.h3`
  ${space}
  ${textAlign}

  ${base}
  ${typography.display3}
`

export const Display4 = styled.h4`
  ${space}
  ${textAlign}

  ${base}
  ${typography.display4}
`

export const SubHeading = styled.small`
  ${space}
  ${textAlign}

  ${base}
  ${typography.subheading}
`

export const Title = styled.strong`
  ${space}
  ${textAlign}

  ${base}
  ${typography.title}
`

export const Body1 = styled.p`
  ${space}
  ${textAlign}

  ${base}
  ${typography.body1}
`

export const Body2 = styled.span`
  ${space}
  ${textAlign}

  ${base}
  ${typography.body2}
`

export const Button = styled.span`
  ${space}
  ${textAlign}

  ${base}
  ${typography.button}
`

export const Caption = styled.span`
  ${space}
  ${textAlign}

  ${base}
  ${typography.caption}
`

export const Headline = styled.div`
  ${space}
  ${textAlign}

  ${base}
  ${typography.headline}

  border-bottom: solid 1px #ccc;
  padding-bottom: 4px;
`

export const Highlight = styled.strong`
  ${space}
  ${textAlign}

  ${base}
  ${typography.highlight}
`

export const Accent = styled.strong`
  ${space}
  ${textAlign}

  ${base}
  ${typography.accent}
`
