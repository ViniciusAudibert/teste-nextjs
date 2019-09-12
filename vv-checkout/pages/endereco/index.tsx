import React from 'react'
import { Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row } from 'reactstrap'
import { Layout } from '../../src/components/layout'
import './style.scss'

interface State {
  activeItemId: string | null
}

class Endereco extends React.Component {
  private readonly ENDERECOS = [
    {
      id: '12dd-213',
      identificacao: 'Minha Casa',
      endereco: 'Rua do jordão, 23 - RS',
    },
    {
      id: '13dd-213',
      identificacao: 'Casa Pai',
      endereco: 'Rua do teste, 65 - SP',
    },
    {
      id: '14dd-213',
      identificacao: 'Casa Mãe',
      endereco: 'Rua miami, 3007 - MG',
    },
  ]

  state: State = {
    activeItemId: null,
  }

  private renderItem(id: string, title: string, description: string) {
    const { activeItemId } = this.state
    const isActive = activeItemId === id

    return (
      <ListGroupItem
        key={id}
        tag="a"
        action
        active={isActive}
        color={isActive ? 'dark' : undefined}
        href="/pagamento"
        onClick={() => this.setState(() => ({ activeItemId: id }))}
      >
        <ListGroupItemHeading>{title}</ListGroupItemHeading>
        <ListGroupItemText>{description}</ListGroupItemText>
      </ListGroupItem>
    )
  }

  render() {
    return (
      <Layout className="endereco">
        <h1 className="endereco-title">Escolha o endereço de entrega</h1>
        <Row>
          <Col>
            <ListGroup>{this.ENDERECOS.map(e => this.renderItem(e.id, e.identificacao, e.endereco))}</ListGroup>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Endereco
