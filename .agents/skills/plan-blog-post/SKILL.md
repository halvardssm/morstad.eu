---
name: plan-blog-post
description: Load this skill when planning or outlining a new blog post for this site. Use when the user wants to create a blog post plan, outline, or draft structure before writing the full post.
---

# Plan Blog Post

Help the user create a structured plan for a new blog post before writing it.

## Existing posts

Existing blog posts live in `src/content/blog/` as Markdown files named
`YYYY-MM-DD-slug.md`. Read one or two existing posts to match the tone,
structure, and conventions before planning a new one.

## Frontmatter schema

The content collection schema is defined in `src/content.config.ts`. Every
blog post must include this frontmatter:

```yaml
title: <string, required>
date: "<YYYY-MM-DD>"  # quoted, required
tags: [<string>, ...]  # required, at least one
summary: "<string>"  # optional but recommended, default to empty string
codeFolderLink: "<url>"  # optional, for code-heavy posts
disabled: <true|false>  # optional, defaults to false
```

## What a plan should contain

Work with the user to produce a plan that includes:

1. **Working title** — the post title as it will appear in frontmatter.
6. **Outline** — section-by-section breakdown with heading levels. Each
   section should have a one-line description of what it will cover.
7. **Key points** — the main arguments or takeaways the reader should leave
   with.
8. **Audience** — who the post is written for.

## Planning process

1. Read the existing posts in `src/content/blog/` to understand tone,
   depth, and structure conventions used on this site.
2. Ask the user for the topic and target audience if not already provided.
3. Draft the plan covering all eight items above.
4. Present the plan and iterate based on the user's feedback.
5. Once the plan is approved, suggest tags and a slug to the user and iterate over this.
6. Once approved, offer to create the draft file with frontmatter
   and heading skeleton using the naming convention
   `YYYY-MM-DD-slug.md` in `src/content/blog/`. Set `disabled: true` in
   frontmatter for drafts so they don't appear on the site until ready.
   For each section in the outline, add the information as comments using `[//]: # (comment)`


## Tone and style

Posts on this site are direct and practical. They lead with the problem or
context, then build toward the solution. Avoid filler and throat-clearing.
Match the voice of the existing posts you read.
