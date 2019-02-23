import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import './style.css';

class Mentors extends React.Component {
  render() {
    const { data } = this.props;
    const { title: siteTitle, mentors } = data.site.siteMetadata;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          pageTitle="Meet Our Mentors"
          keywords={[`css`, `coding girls`, `learning`, `coding`]}
        />
        <h1>Meet Our Mentors</h1>
        <div className="mentors">
          {mentors.map((mentor, idx) => (
            <React.Fragment key={`mentor-${idx}`}>
              <img src={mentor.avatar} className="avatar" />
              <div className="mentor-links">
                {mentor.website ? (
                  <a
                    href={mentor.website}
                    target="_blank"
                    className="mentor-name"
                  >
                    {mentor.name}
                  </a>
                ) : (
                  <span className="mentor-name">{mentor.name}</span>
                )}
                {mentor.twitter && (
                  <a
                    target="_blank"
                    href={`https://twitter.com/${mentor.twitter}`}
                    className="logo-link"
                  >
                    <img
                      width="16"
                      src="https://cdn.worldvectorlogo.com/logos/twitter.svg"
                    />
                  </a>
                )}
                {mentor.github && (
                  <a
                    target="_blank"
                    href={`https://github.com/${mentor.github}`}
                    className="logo-link"
                  >
                    <img
                      width="16"
                      src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                    />
                  </a>
                )}
                {mentor.codepen && (
                  <a
                    target="_blank"
                    href={`https://codepen.io/${mentor.codepen}`}
                    className="logo-link"
                  >
                    <img
                      width="16"
                      src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png"
                    />
                  </a>
                )}
              </div>
              <p className="mentor-intro">{mentor.intro}</p>
            </React.Fragment>
          ))}
        </div>
      </Layout>
    );
  }
}

export default Mentors;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        mentors {
          name
          website
          avatar
          intro
          twitter
          github
          codepen
        }
      }
    }
  }
`;
