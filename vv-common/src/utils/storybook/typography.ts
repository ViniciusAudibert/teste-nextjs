import { select } from '@storybook/addon-knobs'

const label = 'Typography'

const options = {
  Body1: 'body1',
  Body2: 'body2',
  Title: 'title',
  Display1: 'display1',
  Display2: 'display2',
  Display3: 'display3',
  Display4: 'display4',
  Button: 'button',
  Caption: 'caption',
  Subheading: 'subheading',
  Headline: 'headline',
  Highlight: 'highlight',
}

const defaultValue = options.Body1

export const typography = () => select(label, options, defaultValue)
