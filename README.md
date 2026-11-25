# UI/UX Framework

Reusable [Agent Skills](https://code.claude.com/docs/en/skills) and agents for design, copy, motion and premium landing pages, distilled from real sessions with Claude Code. Part of the [framework](https://github.com/chawkitariq/framework) family, next to [dev-framework](https://github.com/chawkitariq/dev-framework) and [ops-framework](https://github.com/chawkitariq/ops-framework).

## Skills

| Skill | Use it when |
|---|---|
| [`premium-landing-workflow`](skills/premium-landing-workflow/SKILL.md) | Building a premium static landing page: measured reference audit, copy first, parallel section writers, quality loop, independent review, sign-off |

Technical SEO lives in dev-framework (`technical-seo` skill, `seo-specialist` agent).

## Agents

| Agent | Model | Role |
|---|---|---|
| [`art-director`](agents/art-director.md) | opus | Ruthless independent review of rendered captures |
| [`ux-motion-designer`](agents/ux-motion-designer.md) | opus | Numeric animation score |
| [`premium-copywriter`](agents/premium-copywriter.md) | opus | All public text, fixed register |
| [`compliance-reviewer`](agents/compliance-reviewer.md) | sonnet | Absolutes, commitments, banned terms; ready-to-paste fixes |
| [`section-developer`](agents/section-developer.md) | sonnet | Builds 1-2 named sections, own files only |

## Install (Claude Code)

```bash
git clone https://github.com/chawkitariq/uiux-framework.git
cp -r uiux-framework/skills/* ~/.claude/skills/
cp uiux-framework/agents/*.md ~/.claude/agents/
```

Use `<project>/.claude/` instead of `~/.claude/` to scope to one project.

## License

MIT
