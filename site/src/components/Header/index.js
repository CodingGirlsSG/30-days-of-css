import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './style.css'

const Header = ({ siteTitle = '' }) => (
  <Link to="/" className="site-title">
    <h1>{siteTitle}</h1>
  </Link>
)

export default Header
