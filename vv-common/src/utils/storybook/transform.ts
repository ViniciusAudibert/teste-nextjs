import { select } from '@storybook/addon-knobs'
import { variants as options } from '../variants/transform'

const defaultLabel = 'Transform'
const defaultValue = options.None

const vars = { label: defaultLabel, group: undefined }

export const transform = (args?: any) =>
  (({ label, group } = vars) => select(label, options, defaultValue, group))({
    ...vars,
    ...args,
  })
