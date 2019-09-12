import { text as sbText } from '@storybook/addon-knobs'

const defaultLabel = 'Text'
const defaultValue = 'Text'

const vars = { label: defaultLabel, value: defaultValue, group: undefined }

export const text = (args?: any) => (({ label, value } = vars) => sbText(label, value))({ ...vars, ...args })
