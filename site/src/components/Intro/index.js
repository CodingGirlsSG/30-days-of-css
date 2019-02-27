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
          <div className="intro-links">
            <a
              href="https://codepen.io/collection/XJJoBY/"
              target="_blank"
              className="intro-link"
            >
              Challenge Collection
            </a>
            <a
              href="https://codepen.io/collection/XmwwGK/"
              target="_blank"
              className="intro-link"
            >
              Show Room
            </a>
            <a href="/study-notes" className="intro-link">
              Study Notes
            </a>
            <a href="/mentors" className="intro-link">
              Meet Our Mentors
            </a>
            <a
              target="_blank"
              href="https://twitter.com/hashtag/30DaysOfCSSGirls"
              className="logo-link"
            >
              <img
                width="16"
                src="https://cdn.worldvectorlogo.com/logos/twitter.svg"
              />
            </a>
            <a
              target="_blank"
              href="https://codepen.io/tag/30DaysOfCSSGirls"
              className="logo-link"
            >
              <img
                width="16"
                src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png"
              />
            </a>
          </div>
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
