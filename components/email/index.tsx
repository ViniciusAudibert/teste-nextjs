import './style.scss'

import React from 'react'
import { Button, FormGroup, Label, Input, Form } from 'reactstrap'

interface Props {
  onEmailChange: React.ChangeEventHandler
  onSubmit: React.FormEventHandler
}

export const IdentificacaoEmail = (props: Props) => {
  const { onEmailChange, onSubmit } = props

  return (
    <Form className="identificacao-email" onSubmit={onSubmit}>
      <small className="tip">
        E-MAIL PARA SIMULAR LOGIN: <strong>login@teste.com</strong>
      </small>
      <FormGroup>
        <Label for="exampleEmail">E-mail</Label>
        <Input type="email" onChange={onEmailChange} name="email" id="exampleEmail" placeholder="digite seu e-mail" autoFocus />
      </FormGroup>
      <Button type="submit" color="dark" block>
        Continuar
      </Button>
    </Form>
  )
}
