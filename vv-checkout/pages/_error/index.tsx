import './style.scss'

import React from 'react'
import { Layout } from '../../src/components/layout'

interface Props {
  statusCode: number
}

class ErrorPage extends React.Component<Props> {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    return (
      <Layout className="error-page">
        <h1 className="error-page-status">{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
      </Layout>
    )
  }
}

export default ErrorPage
