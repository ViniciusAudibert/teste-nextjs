import './style.scss'

import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <img src="https://m.casasbahia.com.br/assets/images/casasbahia-logo.png" />
      </Link>
    </header>
  )
}
