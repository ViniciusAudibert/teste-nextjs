import React from 'react'
import { Layout } from '../../src/components/layout'
import './style.scss'

class Finalizado extends React.Component {
  render() {
    return (
      <Layout className="finalizado">
        <h1 className="finalizado-title">Seu Pedido foi concluido com sucesso!</h1>
      </Layout>
    )
  }
}

export default Finalizado
