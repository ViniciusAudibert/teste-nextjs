import palette from './palette'

const padding = '8px'
const borderRadius = '4px'

export default {
  primary: {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    padding,
    borderRadius,
  },
  secondary: {
    backgroundColor: palette.secondary.main,
    color: palette.secondary.contrastText,
    padding,
    borderRadius,
  },
  accent: {
    backgroundColor: palette.accent.main,
    color: palette.accent.contrastText,
    padding,
    borderRadius,
  },
}
