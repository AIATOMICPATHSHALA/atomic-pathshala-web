---
name: Atomic Pathshala Mobile
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#44e2cd'
  on-secondary: '#003731'
  secondary-container: '#03c6b2'
  on-secondary-container: '#004d44'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#ca8100'
  on-tertiary-container: '#3e2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-sm:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  touch-target-min: 48px
  margin-mobile: 1.25rem
  gutter-mobile: 1rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style
This design system is built for intensive mobile learning environments where focus, clarity, and a sense of technical precision are paramount. The brand personality is scholarly yet cutting-edge, balancing the rigor of education with a futuristic, "atomic" digital aesthetic.

The visual style utilizes **Glassmorphism** as its primary structural driver. By using frosted surfaces and translucent layers, the UI maintains a sense of depth and hierarchy on constrained mobile screens without the visual clutter of traditional heavy shadows. High-contrast elements ensure that even during long night-time study sessions, the content remains legible and accessible. The overall feel is premium, responsive, and highly technical.

## Colors
The palette is optimized for a dark-mode-first experience to enhance the glowing properties of glassmorphic components.

- **Primary (Electric Indigo):** Used for primary actions, active progress states, and brand-critical iconography.
- **Secondary (Mint Crystal):** Used for success states, completed lessons, and secondary highlights.
- **Tertiary (Amber Energy):** Reserved for alerts, streak indicators, and high-priority notifications.
- **Neutral:** A deep navy-slate base provides the necessary contrast for white text and semi-transparent overlays.

For mobile, layering is achieved through increasing the opacity of the "glass" fill as elements rise in the Z-axis, ensuring that foreground content is always the most prominent.

## Typography
Typography is tuned for high-density information. **Manrope** provides a modern, authoritative feel for headings. **Inter** handles the bulk of the educational content, offering maximum legibility across all mobile brightness levels. **JetBrains Mono** is utilized for metadata, such as lesson timestamps or technical identifiers, reinforcing the "atomic" precision of the system.

On mobile, heading sizes are slightly reduced to prevent awkward line breaks, while body text maintains a generous 16px-18px base to ensure comfort during long reading sessions.

## Layout & Spacing
This design system employs a **Fluid Grid** specifically optimized for mobile aspect ratios. 

- **Safe Zones:** All critical interactions are kept within the thumb-zone (bottom 60% of the screen).
- **Touch Targets:** A strict minimum of 48x48px for all interactive elements to accommodate mobile users on the go.
- **Margins:** A standard 20px (1.25rem) side margin ensures content does not feel cramped against device edges.
- **Rhythm:** An 8px linear scale is used for all internal padding and spacing to maintain a consistent mathematical harmony.

## Elevation & Depth
In this design system, depth is communicated through **Backdrop Blurs** and **Tonal Translucency** rather than traditional drop shadows.

- **Level 0 (Base):** Deep neutral background (#0F172A).
- **Level 1 (Cards):** Surface with 10% white opacity, 12px backdrop blur, and a 1px white border at 10% opacity (the "inner glow").
- **Level 2 (Modals/Overlays):** Surface with 20% white opacity, 20px backdrop blur, and a more prominent stroke.
- **Interaction:** When a user taps an element, its backdrop blur increases, and its stroke opacity doubles, providing tactile visual feedback.

## Shapes
Shapes are defined by **Rounded (0.5rem base)** geometry. This provides a friendly, approachable aesthetic that softens the "technical" feel of the typography and glass effects. 

- Large containers (Cards, Modals) use `rounded-xl` (1.5rem).
- Small elements (Buttons, Chips) use `rounded-lg` (1rem).
- Progress bars and focus indicators use pill-shaped rounding for maximum fluidity.

## Components

- **Buttons:** Primary buttons use a solid gradient of Primary to Secondary colors. Secondary buttons are "ghost" glass cards with a subtle border. All buttons must meet the 48px height requirement.
- **Chips/Tags:** Used for categorizing subjects. These use the `label-sm` font with a solid 5% white fill and no blur to distinguish them from larger interactive cards.
- **Interactive Cards:** The core of the learning experience. They feature a 1px "glass stroke" on the top and left edges to simulate a light source, enhancing the premium feel.
- **Input Fields:** Semi-transparent fields with a bottom-only border that glows Indigo when focused.
- **Progress Indicators:** High-contrast Teal bars that sit inside a recessed glass track.
- **Course Lists:** Items are separated by subtle 1px translucent dividers with 16px of vertical padding for easy tapping.