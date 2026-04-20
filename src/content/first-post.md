---
title: From Gatsby to SvelteKit — Rebuilding My Portfolio
description: Why I migrated my portfolio from Gatsby to SvelteKit and what I learned along the way.
date: '2026-04-20'
categories:
  - sveltekit
  - webdev
published: true
---

## Why I Rebuilt My Portfolio

After several years running my portfolio on Gatsby, I decided it was time for a fresh start. Gatsby served me well, but the ecosystem had grown complex and the build times were getting long. SvelteKit offered everything I needed: fast builds, file-based routing, and a development experience that felt genuinely enjoyable.

## What Changed

The new stack is straightforward:

- **SvelteKit** for routing and SSG
- **Tailwind CSS** for styling
- **mdsvex** for markdown blog posts
- **bits-ui** for accessible UI primitives
- **mode-watcher** for dark/light mode

The design uses a dock-style navigation inspired by macOS, with smooth blur-fade animations on scroll.

## What I Learned

Migrating from Gatsby forced me to rethink how I structured content. Instead of GraphQL queries and MDX plugins, content is now just markdown files with frontmatter. Simpler, faster, and easier to reason about.

SvelteKit's file-based routing is intuitive for anyone coming from Next.js, and Svelte's reactivity model is a pleasure to work with after years of React.

The result is a portfolio that loads fast, looks clean, and is easy to maintain.
