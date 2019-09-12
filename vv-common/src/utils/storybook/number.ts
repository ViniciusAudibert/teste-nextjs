import { number as sbNumber } from '@storybook/addon-knobs'

const defaultLabel = 'Number'
const defaultValue = 0
const defaultOptions = {
  range: true,
  min: 0,
  max: 9,
  step: 1,
}

const vars = {
  label: defaultLabel,
  value: defaultValue,
  options: defaultOptions,
  group: undefined,
}

export const number = (args: any) => (({ label, value, options, group } = vars) => sbNumber(label, value, options, group))({ ...vars, ...args })
