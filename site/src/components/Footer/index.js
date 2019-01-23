import React from 'react'
import './style.css'

export default () => (
  <footer className="footer">
    <div className="content">
      © {new Date().getFullYear()}, built with ❤ and
      {` `}
      <a href="http://codinggirls.sg">
        <img alt="codinggirls" src="http://codinggirls.sg/img/logo.png" />
      </a>
    </div>
  </footer>
)
