import { action } from '@storybook/addon-actions'

export const actions = {
  onClick: action('clicked'),
  onChange: () => action('changed'),
}
