import { boolean } from '@storybook/addon-knobs'

const defaultLabel = 'Disabled'
const defaultValue = false

const vars = { value: defaultValue, label: defaultLabel, group: undefined }

export const disabled = (args?: any) =>
  (({ label, value, group } = args) => boolean(label, value, group))({
    ...vars,
    ...args,
  })
