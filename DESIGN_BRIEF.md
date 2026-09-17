# DESIGN BRIEF (source of truth)

- Lead ID: `3d5f38933b864b0580bf79c5dd50f678`
- Schema: `genesis_brief/v1`
- Brief hash: `d3c83ee47437d95a`
- Generated: `2026-09-17T16:51:08+00:00`

Agents MUST follow this brief. If a change contradicts it, update this file
and note why in TASKS.md before shipping.

## Contact
- Name: JT Prospect
- Email: info@jtcustombuilders.com
- Phone: 240-651-4200
- Company: JT Custom Builders

## Existing site
- Has site: yes
- URL: https://jtcustombuilders.com/
- Preference: `verbatim_migrate`

## Brand
- Brand name: JT Custom Builders
- Tagline: Relationship-focused home builder serving central Maryland

### About
CONTENT PARITY 100%: Recreate JT Custom Builders from https://jtcustombuilders.com/ — keep ALL of their real copy, phone 240-651-4200, email info@jtcustombuilders.com, Facebook/Instagram, Central Maryland positioning, custom homes + remodeling, Revival Design + Build mention, awards (Energy Star, Maryland Builders, HERS, EPA RRP, 2-10). Do NOT invent Casa membership, $199/mo, Bay Area, or other brands. LOOK: match visual quality of getcasa.com and nor.ma (premium builder site), not their current WordPress theme. Analyze JT for content/photos/nav; analyze look refs for design only. Core pages only (not blog/employment/full sitemap).

## Visual references
1. https://getcasa.com
2. https://nor.ma

## Style
- Chips: modern, sophisticated
- Notes: Visual refs = Casa + NOR.MA. Source of copy/photos/services = jtcustombuilders.com only. Multipage core UI: Home, Custom Homes, Additions, Garages, Remodel, Projects, About, Start/Estimate. Include real project photography from JT. GitHub repo of the code required.

## Colors
- Mode: `designer_choose`
- Palette: (designer choose)

## Scope
- Mode: `multipage`
- Pages: /, /custom-home-building-in-maryland/, /additions/, /garages/, /remodeling/, /category/projects/, /about/, /estimate/

## Product constraints (Genesis)
- Factory stack: Next 15 / React 19 / TypeScript / Tailwind v4 / free shadcn / GSAP
- Deploy to Vercel; report DEPLOY_URL when verify passes
- Personalized to this brief — no generic template look
- If reference URLs are clones/rebuilds: run analyze_reference and follow identical_clone playbook
