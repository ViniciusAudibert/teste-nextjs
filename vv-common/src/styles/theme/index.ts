import bahia from './bahia'
import pontofrio from './pontofrio'

import shared from './shared'

const getThemeStyle = (client: any) => {
  switch (client) {
    case 'bahia':
      return bahia
    case 'pontofrio':
      return pontofrio
    default:
      return bahia
  }
}

const env = process.env.REACT_APP_CLIENT || process.env.STORYBOOK_REACT_APP_CLIENT

const getTheme = (): any => {
  const custom = getThemeStyle(env)

  const keys = Object.keys(custom)

  keys.forEach(key => {
    if ({}.hasOwnProperty.call(custom, key)) {
      // @ts-ignore
      shared[key] = { ...(shared[key] || {}), ...custom[key] }
    }
  })

  return shared
}

export const theme = getTheme()
