import React from 'react'
import { Button, FormGroup, Label, Input, Form } from 'reactstrap'
import Link from 'next/link'

export const IdentificacaoPassword = () => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <FormGroup>
        <Label for="examplePassword">Senha</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="digite sua senha" autoFocus />
      </FormGroup>

      <Link href="/endereco">
        <Button color="dark" block>
          Entrar
        </Button>
      </Link>
    </Form>
  )
}
