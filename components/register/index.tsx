import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import Link from 'next/link'

interface Props {
  email: string
}

export const IdentificacaoRegister = (props: Props) => {
  const { email } = props

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <FormGroup>
        <Label for="exampleEmail">E-mail</Label>
        <Input type="email" name="email" defaultValue={email} id="exampleEmail" placeholder="Digite seu e-mail" />
      </FormGroup>
      <FormGroup>
        <Label for="nomeCompleto">Nome Completo</Label>
        <Input type="text" name="nomeCompleto" id="nomeCompleto" placeholder="Digite seu nome completo" autoFocus />
      </FormGroup>
      <FormGroup>
        <Label for="cpf">CPF</Label>
        <Input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Senha</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Digite sua senha" />
      </FormGroup>

      <Link href="/endereco">
        <Button color="dark" block>
          Próximo
        </Button>
      </Link>
    </Form>
  )
}
