---
title: Contributing
date: '2019-03-04'
---

# Contributing

Here's our [GitHub Repo](https://github.com/CodingGirlsSG/30-days-of-css).

## General Guide to OS Contribution

For general guide to contributing to open source project, check out the following:

- [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) [egghead.io](https://egghead.io/) by [Kent C. Dodds](https://kentcdodds.com/)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/) by [Open Source Guides](https://opensource.guide/)

## Study Notes

To share your study notes, create a pull request to merge your post in.

**Contributing Guide**

- Add your post to the following directory:

```
site/content/blog/notes-${title_of_your_notes}/index.md
```

- Add the following front matter to the beginning your file

```
---
title: Hello, Coding Girls (and Guys)!
date: '2019-01-19'
---
```

- If you have posted your notes at your own blog, website, etc, put a link at the beginning of the post, i.e.:

```
Original post by [who](http://link.to/your-website): [title of your post](http://link.to/your-post)
```

- Use markdown syntax for your posts
- To preview your post:

```bash
$ cd site
$ yarn
$ yarn start
```

By default, our blog site should be served at http://localhost:8000/

- Commit & push your changes, and create a pull request to the `master` branch of our repo

## Website

If you see any CSS issue you want to improve, you may contribute to our website, or to our typography project [CodingGirls](https://github.com/CodingGirlsSG/30-days-of-css/tree/master/packages/coding-girls-typography).

All styling is written with pure CSS with an intentional focus on the fundamentals.

**Contributing guide**

- [Create an issue](https://github.com/CodingGirlsSG/30-days-of-css/issues/new) describing what changes you want to make
- Once the changes are agreed upon, create a pull request to our `master` branch
- Write in your pull request describing the following:

  > What does this pull request do?

  > Screenshot (if any) displaying the changes?

  > Is there anything the reviewer should take note of?

- Ask (in our channel) for someone to review your changes
- Once the pull request is reviewed, we'll merge the changes in and you may expect your changes to be up in a few minutes!

## Other Open Source Project

[JSConf.Asia 2019](http://2019.jsconf.asia) is accepting pull requests to add animation to their site for free conference ticket.
Please note that this free ticket is separate than the one we provide.
If your animation is merged, you'll win one ticket from them directly!

[This is the animation](https://github.com/serrynaimo/2019.jsconf.asia/pull/4) that won the ticket on Feb 1st.
