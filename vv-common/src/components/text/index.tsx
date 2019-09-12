import React from 'react'
import { Display1, Display2, Display3, Display4, SubHeading, Title, Body1, Body2, Highlight, Button, Caption, Headline, Accent } from './styles'

function Text({ children, variant, ...rest }: any) {
  function getComponent(variant: any) {
    switch (variant) {
      case 'display1':
      case 'h1':
        return Display1
      case 'display2':
      case 'h2':
        return Display2
      case 'display3':
      case 'h3':
        return Display3
      case 'display4':
      case 'h4':
        return Display4
      case 'subheading':
        return SubHeading
      case 'title':
      case 'strong':
        return Title
      case 'body2':
        return Body2
      case 'highlight':
        return Highlight
      case 'accent':
        return Accent
      case 'button':
        return Button
      case 'caption':
        return Caption
      case 'headline':
        return Headline
      case 'body1':
      default:
        return Body1
    }
  }

  const Component = getComponent(variant)

  return <Component {...rest}>{children}</Component>
}

Text.defaultProps = {
  variant: 'body1',
  transform: 'none',
}

export { Text }
