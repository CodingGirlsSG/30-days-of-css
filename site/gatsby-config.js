module.exports = {
  siteMetadata: {
    title: `30 Days of CSS Girls`,
    author: `CodingGirlsSG`,
    description: `Css with CodingGirls :)`,
    siteUrl: `http://css.codinggirls.sg/`,
    social: {
      twitter: `CodingGirls_SG`,
    },
    mentors: [
      {
        name: 'Wei Gao',
        avatar:
          'https://media.licdn.com/dms/image/C4D03AQE1ZtbaVvpxKQ/profile-displayphoto-shrink_200_200/0?e=1556150400&v=beta&t=0ocx5tLdHDcwq8mug9vumu4xIk7uoy4d9L7QMo26Ols',
        website: 'http://dev.wgao19.cc',
        twitter: 'wgao19',
        github: 'wgao19',
        codepen: 'wgao19',
        intro: `Hi I'm Wei 👩🏻‍🌾 I've been tutoring my classmates since college, where we had a study center with a philosophy that asked us tutors to "share our process of learning". I hope to be learning together with everyone through this CSS challenge!`,
      },
      {
        name: 'Chen Hui Jing',
        avatar: 'https://www.chenhuijing.com/assets/images/headshot@2x.jpg',
        website: 'https://www.chenhuijing.com',
        twitter: 'hj_chen',
        github: 'huijing',
        intro: `Hello! I'm Hui Jing, a front-end designer and developer who believes HTML and CSS are the foundation of the web.`,
      },
      {
        name: 'Michael Cheng',
        avatar:
          'https://media.licdn.com/dms/image/C5103AQFSIZxd47grCA/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=l4Fl0FN6p5GHKQ8PHPeOY1Y_rcB7vzoyNkw4_ed4an0',
        website: 'https://www.linkedin.com/in/miccheng/?originalSubdomain=sg',
      },
      {
        name: 'Jennie Ji',
        github: 'JennieJi',
        avatar: 'https://avatars3.githubusercontent.com/u/1913045?s=460&v=4',
        codepen: 'jennieji',
        intro: `Hi, this is Jennie, a front-end "girl" who started from CSS + HTML years ago and going towards full stack.`,
      },
      {
        name: 'Tuongvan Nguyen',
        github: 'SmokinClove',
        codepen: 'tvan',
        avatar: 'https://s.cdpn.io/profiles/user/2786268/512.jpg?1550824290',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-134348146-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
  pathPrefix: '/site',
};
