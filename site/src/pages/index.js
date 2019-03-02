import React from 'react';
import { Link, graphql } from 'gatsby';
import { parse } from 'query-string';

import Intro from '../components/Intro';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import './style.css';

const excludeFilterPosts = filterExistingPost => ({ node }) => {
  if (!filterExistingPost) return true;
  const dateInString = node && node.frontmatter && node.frontmatter.date;
  return new Date(dateInString) < +new Date();
};

const VIEW_MODE = {
  DEFAULT: 'exclude-future',
  ALL: 'all',
};

class BlogIndex extends React.Component {
  render() {
    const {
      data,
      location: { search },
    } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const { view } = parse(search);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO keywords={[`css`, `coding girls`, `learning`, `coding`]} />
        <Intro />
        {posts
          .filter(excludeFilterPosts(view !== VIEW_MODE.ALL))
          .map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h2 className="title">
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <small>{node.frontmatter.date}</small>
                <p
                  className="excerpt"
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
              </div>
            );
          })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
