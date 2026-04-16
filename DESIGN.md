# Design Brief: True Fit

**Category**: Premium minimalist ecommerce  
**Tone**: Editorial sophistication, luxury through restraint, curated collection aesthetic  
**Differentiation**: Serif body typography (Lora) paired with geometric sans headers (General Sans) creates high-end editorial quality rare in fashion ecommerce

## Palette

| Token | Light OKLCH | Dark OKLCH | Usage |
|-------|-------------|-----------|-------|
| background | 0.98 0.01 70 | 0.13 0.02 280 | Cream/near-white light, deep charcoal dark |
| foreground | 0.12 0.02 280 | 0.95 0.01 70 | Near-black text, off-white text dark |
| primary | 0.52 0.15 25 | 0.68 0.18 25 | Warm terracotta — buttons, links, active states |
| accent | 0.58 0.16 25 | 0.68 0.18 25 | Highlight accent, same warm terracotta family |
| muted | 0.92 0.01 70 | 0.22 0.02 280 | Inactive states, subtle backgrounds |
| border | 0.88 0.01 70 | 0.28 0.02 280 | Card and section dividers |

## Typography

| Tier | Font | Usage | Scale |
|------|------|-------|-------|
| Display | General Sans (geometric) | Hero headers, product names, page titles | 32px–56px |
| Body | Lora (serif) | Product descriptions, long-form text, editorial copy | 16px–18px |
| Mono | JetBrains Mono | Admin panel inputs, code blocks, meta info | 12px–14px |

## Structural Zones

| Zone | Light bg | Dark bg | Treatment |
|------|----------|---------|-----------|
| Header/Nav | bg-card, border-b | bg-card, border-b | Sticky, minimal elevation, logo on left |
| Hero | gradient-subtle overlay | gradient-subtle overlay | Full-width, centered text, accent gradient accent |
| Content cards | bg-card shadow-card | bg-card shadow-card | Minimal radius (rounded-sm), hover lift, 2px top border accent |
| Footer | bg-muted/50 | bg-muted/50 | Muted background, section dividers with border-t |

## Spacing & Rhythm

- Grid: 8px base unit, 4px for fine control
- Content width: max-w-6xl with px-6 on mobile, px-8 on desktop
- Product grid: 3 columns (lg), 2 columns (md), 1 column (sm)
- Card padding: p-6 (product cards), p-4 (small components)
- Section gaps: space-y-16 for major sections, space-y-8 for subsections

## Component Patterns

**Buttons**: Primary (bg-primary text-primary-foreground), Secondary (bg-muted), Destructive (bg-destructive)  
**Cards**: bg-card with shadow-card, rounded-sm, hover:shadow-elevated + translate-y-[-2px]  
**Inputs**: bg-input border-border rounded-sm focus:ring-2 ring-primary  
**Links**: text-primary hover:underline transition-smooth  

## Motion

| Element | Animation | Duration | Timing |
|---------|-----------|----------|--------|
| Fade-in on load | fadeIn | 0.6s | ease-out |
| Scroll trigger | slideUp + stagger | 0.5s | ease-out (per item) |
| Button hover | scale-105 + shadow-elevated | 0.2s | ease-out |
| Page transitions | fadeIn | 0.3s | ease-out |

**Constraints**: No bouncing animations, no over-the-top parallax, no looping animations. Motion supports, never distracts.

## Signature Details

- Warm terracotta accent used sparingly: buttons, hover states, active navigation items
- Serif body text signals editorial quality and fashion credibility
- Generous whitespace (min 60% of content area negative space)
- Soft shadows only on cards, never on text
- All interactive elements: transition-smooth (0.3s ease-out)
