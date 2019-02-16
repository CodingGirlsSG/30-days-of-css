import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './style.css';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <>
            <div className="intro">
              Join a 30-day CSS challenge with{' '}
              <a href="http://codinggirls.sg/" target="_blank">
                CodingGirls
              </a>
              !!!
            </div>
            <div>
              <a
                href="https://goo.gl/forms/ZQCns05vrHjMqt662"
                target="_blank"
                className="sign-up-link"
              >
                Sign Up
              </a>
              <a
                href="https://codepen.io/collection/XJJoBY/"
                target="_blank"
                className="sign-up-link"
              >
                Challenge Collection
              </a>
            </div>
          </>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
