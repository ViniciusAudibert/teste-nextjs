import './style.scss'

import React from 'react'
import { Layout } from '../../src/components/layout'

class Finalizado extends React.Component {
  render() {
    return (
      <Layout className="finalizado">
        //@ts-ignore
        <marquee direction="down" width="100%" height="200" behavior="alternate" style={{ border: 'solid' }}>
          //@ts-ignore
          <marquee behavior="alternate">
            <h1 className="finalizado-title">Seu Pedido foi concluido com sucesso!</h1>
            //@ts-ignore
          </marquee>
          //@ts-ignore
        </marquee>
      </Layout>
    )
  }
}

export default Finalizado
