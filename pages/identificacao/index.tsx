import './style.scss'

import React from 'react'
import { Row, Col } from 'reactstrap'
import { Layout } from '../../components/layout'
import { IdentificacaoRegister } from '../../components/register'
import { IdentificacaoPassword } from '../../components/password'
import { IdentificacaoEmail } from '../../components/email'

enum StepKey {
  EMAIL,
  PASSWORD,
  REGISTER,
}

type Step = { [key in keyof typeof StepKey]: () => JSX.Element }

interface State {
  step: () => JSX.Element
  email: string
}

class Identificacao extends React.Component<{}, State> {
  private readonly STEPS: Step = {
    EMAIL: () => this.renderEmailStep(),
    PASSWORD: () => this.renderPasswordStep(),
    REGISTER: () => this.renderRegisterStep(),
  }

  state: State = {
    step: this.STEPS.EMAIL,
    email: '',
  }

  private handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    this.setState(() => ({
      email: value,
    }))
  }

  private handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const step = this.state.email.includes('login') ? this.STEPS.PASSWORD : this.STEPS.REGISTER

    this.setState(() => ({
      step,
    }))
  }

  private renderEmailStep() {
    return <IdentificacaoEmail onSubmit={this.handleEmailSubmit} onEmailChange={this.handleEmailChange} />
  }

  private renderPasswordStep() {
    return <IdentificacaoPassword />
  }

  private renderRegisterStep() {
    const { email } = this.state
    return <IdentificacaoRegister email={email} />
  }

  render() {
    return (
      <Layout className="identificacao">
        <Row>
          <Col>{this.state.step()}</Col>
        </Row>
      </Layout>
    )
  }
}

export default Identificacao
