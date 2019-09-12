import styled from 'styled-components'

import { theme } from '../../styles/theme'

const margin = `${theme.space[2]}px`
const border = theme.borders[1]
const { white, gray, accent: actived } = theme.colors

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  input {
    display: none;
  }

  input:disabled + div,
  input:disabled + div + label {
    opacity: 0.4;
  }

  label {
    margin-left: ${margin};
    width: 100%;

    ${theme.typography.body1}
  }
`

export const Toggle = styled.div`
  background-color: ${white};
  border: ${border};
  border-color: ${gray};
  border-radius: 50%;
  min-width: 16px;
  min-height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    display: none;
  }

  &.active {
    background-color: ${actived};
    border-color: ${actived};

    svg {
      display: block;
    }
  }
`
