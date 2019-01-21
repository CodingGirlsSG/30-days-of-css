import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../Header'
import Footer from '../Footer'
import './style.css'

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
          <Footer />
        </div>
      </>
    )}
  />
)

export default Layout
