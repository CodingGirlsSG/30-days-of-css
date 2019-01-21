import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './style.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { style: {} }
  }
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props
    if (pathname !== '/') {
      this.setState({
        style: {
          fontSize: '2rem',
          color: '#aaa',
        },
      })
    } else {
      this.setState({ style: {} })
    }
  }
  render() {
    const { siteTitle = '' } = this.props
    return (
      <h1 className="site-title" style={this.state.style}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    )
  }
}

export default Header
