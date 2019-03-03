# 30 Days of CSS

30 Days of CSS is a 30 days of CSS coding challenge organized by CodingGirls.

## Links

For general info regarding participating in this challenge, check out our website:

- [Website](http://css.codinggirls.sg)

For general guide to contributing to open source project, check out the following:

- [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) [egghead.io](https://egghead.io/) by [Kent C. Dodds](https://kentcdodds.com/)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/) by [Open Source Guides](https://opensource.guide/)

## Study Notes

To share your study notes on our blog site, create a pull request to merge your post in.

**Contributing Guide**

- Create a directory for your post and write your post in a [markdown](https://guides.github.com/features/mastering-markdown/) file:

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
