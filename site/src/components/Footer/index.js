import React from 'react'
import Img from 'gatsby-image'
import './style.css'

export default props => {
  const { data } = props

  return (
    // <StaticQuery
    //   query={footerQuery}
    //   render={({ text }) => {
    // return (
    <footer className="footer">
      <div className="content">
        <span className="footer-text">
          © {new Date().getFullYear()}, built with ❤ and
        </span>
        <a href="http://codinggirls.sg">
          <img src="https://i.imgur.com/su3cVx8.png" />
        </a>
      </div>
    </footer>
    // )
    // }}
    // />
  )
}

// TODO: move to using gatsby
// const footerQuery = graphql`
//   query FooterQuery {
//     logo: file(relativePath: { eq: "logo.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 172) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
