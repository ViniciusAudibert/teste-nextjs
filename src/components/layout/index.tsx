import '../../styles/index.scss'
import './style.scss'

import React from 'react'
import { Header } from '../header'
import { Container, Alert } from 'reactstrap'

interface Props {
  children: React.AllKindOfElements
  className?: string
}

export const Layout = (props: Props) => {
  const { className, children } = props

  return (
    <>
      <Header />
      <Container tag="main" className={`layout-test-main ${className || ''}`}>
        {children}
      </Container>

      <Container>
        <Alert className="not-implemented" color="danger">
          Utilize uma tela de celular, tamanho atual não suportado
        </Alert>
      </Container>
    </>
  )
}
