import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../Header'
import Footer from '../Footer'
import './style.css'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="layout__main">
          <Header
            location={location}
            siteTitle={data.site.siteMetadata.title}
          />
          <div className="layout__content">{children}</div>
          <Footer />
        </div>
      </>
    )}
  />
)

export default Layout
