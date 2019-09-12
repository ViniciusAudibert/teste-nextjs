import { select } from '@storybook/addon-knobs'
import { variants as options } from '../variants/buttons'

const defaultLabel = 'Button'
const defaultValue = options.Primary

const vars = { label: defaultLabel, group: undefined }

export const buttons = (args: any) =>
  (({ label, group } = vars) => select(label, options, defaultValue, group))({
    ...vars,
    ...args,
  })
