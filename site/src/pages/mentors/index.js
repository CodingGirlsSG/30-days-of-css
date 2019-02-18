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
              <div className="mentor-intro">
                <span className="mentor-profile">
                  <a
                    href={mentor.website}
                    target="_blank"
                    className="name-link"
                  >
                    {mentor.name}
                  </a>
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
                    >
                      <img
                        width="16"
                        src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                      />
                    </a>
                  )}
                </span>
                <p>{mentor.intro}</p>
              </div>
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
        }
      }
    }
  }
`;
