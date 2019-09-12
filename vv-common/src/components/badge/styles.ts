import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: middle;
`

export const Num = styled.span`
  background: ${theme.palette.secondary.main};
  color: ${theme.palette.secondary.contrastText};

  border-radius: 50%;
  top: 0;
  right: 0;
  font-size: 0.75rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  padding: 0 4px;
  position: absolute;
  height: 20px;
  min-width: 20px;
  z-index: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

  transform: scale(1) translate(50%, -50%);
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform-origin: 100% 0%;
`
