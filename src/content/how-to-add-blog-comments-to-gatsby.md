---
title: How to Add Blog Comments to Gatsby
description: Add a free, GitHub-powered comment system to your Gatsby blog in about 10 minutes using Utterances.
date: '2021-10-20'
lastModified: '2026-04-21'
categories:
  - gatsby
  - react
published: true
---

Adding comments to a static site feels like it should be complicated. It doesn't have to be. [Utterances](https://utteranc.es/) is a lightweight widget that stores comments as GitHub Issues — free, ad-free, and surprisingly easy to set up.

## What is Utterances?

Utterances is an open-source GitHub app. When a visitor leaves a comment on your blog, it creates a GitHub Issue in a repository you choose. Comments are stored there, rendered with Markdown, and displayed on your page via a small script.

Requirements:
- The repository must be **public**
- The Utterances GitHub App must be installed on that repo

## Step 1: Install the Utterances App

Go to [utteranc.es](https://utteranc.es/) and click **Install**. Authorize it for your GitHub account and select the repository where comments will be stored (can be your portfolio repo or a dedicated one like `my-blog-comments`).

## Step 2: Create the Comments Component

Create a new file `Comments.js` in your components folder:

```js
import React, { useEffect, useRef } from 'react'

const Comments = ({ issueTerm }) => {
  const ref = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')

    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('repo', 'YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME')
    script.setAttribute('issue-term', issueTerm)
    script.setAttribute('theme', 'github-dark')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true)

    ref.current.appendChild(script)
  }, [])

  return <div ref={ref} />
}

export default Comments
```

Replace `YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME` with your actual repo (e.g., `DomVournias/portfolio-comments`).

The `issueTerm` prop determines how issues are matched to posts. Using the post slug is a safe choice — it keeps things predictable.

## Step 3: Add It to Your Blog Post Template

Open your blog post template (usually `src/templates/blog-post.js` or similar) and import the component:

```js
import Comments from '../components/Comments'
```

Then add it at the bottom of your post, passing the slug as the issue term:

```js
const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <article>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Comments issueTerm={post.fields.slug} />
    </article>
  )
}
```

## Choosing a Theme

Utterances ships with several themes out of the box:

- `github-light`
- `github-dark`
- `github-dark-orange`
- `icy-dark`
- `dark-blue`
- `photon-dark`
- `boxy-light`
- `gruvbox-dark`

Set it via the `theme` attribute on the script element. If you want to match your site's dark/light mode, you can conditionally switch themes by re-mounting the component when the theme changes.

## How It Looks

Once set up, visitors see a standard comment box at the bottom of each post. They sign in with GitHub to comment, and each comment maps to a GitHub Issue thread. You get notifications, can moderate comments directly in GitHub, and the whole thing costs nothing.

## Wrapping Up

Utterances is one of the better solutions for static-site comments. It's fast (just a small script), private-ish (GitHub login required, which filters out most spam), and keeps your content infrastructure simple. No databases, no third-party comment platforms, no ads.

For a developer blog, having comments stored as GitHub Issues is actually a feature — your readers are probably already on GitHub.
