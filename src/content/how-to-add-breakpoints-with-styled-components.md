---
title: How to Add Breakpoints with Styled Components
description: A clean, centralized approach to managing responsive breakpoints in Styled Components using a device object.
date: '2021-09-15'
lastModified: '2026-04-21'
categories:
  - css
  - styled-components
  - react
published: true
---

Handling responsive design in a large React project can get messy fast. If you're using Styled Components, media queries end up scattered across dozens of files with hardcoded pixel values repeated everywhere.

There's a better way.

## The Problem

Imagine you have this in five different components:

```css
@media (max-width: 768px) {
  /* mobile styles */
}
```

Change that breakpoint once, and you're hunting through the entire codebase. Not great.

## The Solution: A Centralized Breakpoints File

Create a file called `breakpoints.js` (or `breakpoints.ts`) at the root of your styles folder:

```js
const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
}
```

The `size` object holds the raw pixel values. The `device` object wraps each size into a complete media query string — ready to drop straight into Styled Components.

## Using It in Your Components

Import `device` into any component file and use it with a template literal:

```js
import styled from 'styled-components'
import { device } from '../styles/breakpoints'

const Hero = styled.section`
  display: flex;
  flex-direction: row;

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobile} {
    padding: 1rem;
  }
`
```

That's it. Clean, readable, and easy to update globally.

## Why This Works

- **Single source of truth** — change a breakpoint value once in `breakpoints.js` and it updates everywhere
- **Named breakpoints** — `device.tablet` is much clearer than `(max-width: 768px)` to a future reader
- **No magic numbers** — your components stay declarative and easy to reason about

## Adding More Breakpoints

Just extend the `size` and `device` objects:

```js
const size = {
  xs: '375px',
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
  wide: '1920px',
}
```

You can also add `min-width` variants if you prefer a mobile-first approach:

```js
export const deviceMin = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
}
```

## Wrapping Up

This pattern is one of those small things that pays dividends over time. A few minutes of setup now means consistent, maintainable breakpoints across your entire project — no more hunting for hardcoded values or wondering which component broke when you changed a pixel value.
