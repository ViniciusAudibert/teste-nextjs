import { darken } from 'polished'
import palette from './palette'

import baseTheme from '../shared/index'

const { white, gray } = baseTheme.colors

const base = {
  backgroundColor: white,
  borderColor: gray,
  color: gray,
}

const effect = (palette: any) => ({
  ...base,

  backgroundColor: palette.main,
  borderColor: palette.main,
  color: palette.contrastText,

  '&:active': {
    backgroundColor: palette.main,
    borderColor: palette.main,
  },
  '&:hover': {
    backgroundColor: darken(0.05, palette.main),
    borderColor: darken(0.05, palette.main),
  },
  '&:disabled': {
    opacity: 0.75,
  },
})

export default {
  primary: {
    ...effect(palette.primary),
  },
  secondary: {
    ...effect(palette.secondary),
  },
  accent: {
    ...effect(palette.accent),
  },
  success: {
    ...effect(palette.success),
  },
  info: {
    ...effect(palette.info),
  },
  warning: {
    ...effect(palette.warning),
  },
  danger: {
    ...effect(palette.danger),
  },
  link: {
    ...effect(palette.link),
  },
}
