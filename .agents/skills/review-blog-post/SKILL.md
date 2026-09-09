---
name: review-blog-post
description: Load this skill when reviewing or editing a blog post for this site. Use when the user wants a spelling, grammar, or editorial review of a blog post draft.
---

# Review Blog Post

Act as an editor. Review a blog post draft for spelling, grammar, clarity,
structure, and tone before it is published.

## What to review

1. **Spelling and grammar** — Catch typos, misspellings, and grammatical
   errors. Flag them with the exact location (line or quoted text).
2. **Clarity and readability** — Flag unclear sentences, awkward phrasing,
   and jargon that the target audience may not understand. Suggest
   concrete rewrites, not just "make this clearer."
3. **Structure and flow** — Check that sections follow a logical order,
   headings are consistent in level and style, and transitions between
   sections are smooth. Flag missing sections or abrupt jumps.
4. **Tone and voice** — Posts on this site are direct and practical. They
   lead with the problem or context, then build toward the solution. Flag
   filler, throat-clearing, and unnecessary hedging.
5. **Frontmatter** — Verify frontmatter against the schema in
   `src/content.config.ts`:
   - `title` (string, required)
   - `date` (string, required, quoted ISO date matching the filename)
   - `tags` (string array, required, at least one, suggest adjustments depending on the content)
   - `summary` (string, if not set or empty, suggest a summary)
   - `codeFolderLink` (string, optional)
   - `disabled` (boolean, defaults to false)
6. **Consistency** — Check heading capitalization, code block language
   tags, link formatting, and footnote style against existing posts in
   `src/content/blog/`.

## Review process

1. Read the blog post file end to end.
2. Read one or two existing published posts in `src/content/blog/` to
   calibrate tone, depth, and conventions if not already familiar.
3. Produce a review with two sections:
   - **Issues** — Numbered list of specific problems with quoted text and
     suggested fixes. Group by category (spelling/grammar, clarity,
     structure, frontmatter).
   - **Summary** — One or two sentences on the overall state of the draft
     and what is needed before publishing.
4. Do not edit the file unless the user asks. Present the review and let
   the user decide what to apply.

## Scope

Only review the content the user points to. Do not rewrite the post or
impose a different argument or structure. The goal is to polish what is
there, not to reimagine it.
