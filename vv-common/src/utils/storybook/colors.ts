import { select } from '@storybook/addon-knobs'
import { variants as options } from '../variants/colors'

const defaultLabel = 'Color'
const { 'light-silver': defaultValue } = options

const vars = { label: defaultLabel, group: undefined }

export const colors = (args?: any) =>
  (({ label, group } = vars) => select(label, options, defaultValue, group))({
    ...vars,
    ...args,
  })
