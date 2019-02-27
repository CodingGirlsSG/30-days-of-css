import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import './style.css';

class Mentors extends React.Component {
  render() {
    const { data } = this.props;
    const { title: siteTitle, topics } = data.site.siteMetadata;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          pageTitle="Study Notes"
          keywords={[`css`, `coding girls`, `learning`, `coding`]}
        />
        <h1>Study Notes</h1>
        <div className="topics">
          {topics.map((topic, idx) => {
            const { subject, notes } = topic;
            return (
              <React.Fragment key={`topic-${idx}`}>
                <h2>{topic.subject}</h2>
                {notes && (
                  <ul>
                    {notes.map((note, idx) => (
                      <li>
                        <a href={note.link}>{note.title}</a> by{' '}
                        {note.author_link ? (
                          <a href={note.author_link}>{note.author}</a>
                        ) : (
                          <span>{note.author}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            );
          })}
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
        topics {
          subject
          notes {
            author
            author_link
            link
            title
          }
        }
      }
    }
  }
`;
