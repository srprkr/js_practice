---
name: code-audit
description: Audit the current diff or working tree for refactor-worthy issues — cascade/specificity bugs, dead code, duplicated logic, inconsistent patterns. Use when the user asks for a "code audit," "what should we refactor," or a general health check that isn't focused on a single bug.
---

Run a focused audit and report findings as a flat list, most-severe first. Don't fix anything unless asked — this is a report, not an edit pass.

## What to look for

1. **Cascade/specificity bugs** (relevant to this project's Tailwind + daisyUI + hand-rolled CSS stack): any place a daisyUI or Tailwind utility class shares equal specificity with a plain-CSS rule (e.g. `[hidden]` vs `.btn { display: ... }`) and could lose depending on stylesheet load order. This codebase has hit this class of bug multiple times (`.carousel` colliding with daisyUI's carousel component, `h3` losing to Preflight, `.tags` losing to injected styles) — actively grep for daisyUI class names on elements that also carry `hidden`, inline `style`, or other display-toggling mechanisms.
2. **Dead code**: CSS custom properties, classes, or JS functions/variables defined but no longer referenced, especially after a refactor (e.g. a class renamed in HTML but its old CSS rule left behind).
3. **Duplicated logic**: near-identical blocks (e.g. the same class-toggle pattern repeated across multiple event handlers) that could be one shared helper.
4. **Inconsistent patterns**: places where a fix was applied in one spot but an equivalent spot elsewhere wasn't updated the same way.
5. **JS/HTML/CSS sync issues**: HTML elements referenced by class/id in JS or CSS that no longer exist, or vice versa.

## Process

1. Read the actual current file contents — don't rely on memory or prior conversation context, since files may have changed since they were last read.
2. For each suspected finding, verify it directly (grep for all usages, check both sides of a rename/removal) before reporting it. Don't report a hunch as a finding.
3. Report each finding as: file, line, one-sentence summary, and a concrete failure scenario (what breaks, under what condition).
4. If nothing significant is found, say so plainly rather than padding the list with nitpicks.

## Output format

Flat list, most severe first:

```
1. [file:line] Summary of the issue
   Failure scenario: concrete description of what breaks and when.

2. [file:line] Summary of the issue
   Failure scenario: ...
```

After listing findings, ask whether the user wants any of them fixed now — don't fix automatically.
