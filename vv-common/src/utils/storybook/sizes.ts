import { select } from '@storybook/addon-knobs'
import { variants as options } from '../variants/sizes'

const defaultLabel = 'Size'
const defaultValue = options[0]

const vars = { label: defaultLabel, group: undefined }

export const sizes = (args?: any) =>
  (({ label, group } = vars) => select(label, options, defaultValue, group))({
    ...vars,
    ...args,
  })
