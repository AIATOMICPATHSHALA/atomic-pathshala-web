---
name: Atomic Pathshala Design System
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#424656'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#00677f'
  on-secondary: '#ffffff'
  secondary-container: '#00ccf9'
  on-secondary-container: '#005266'
  tertiary: '#006643'
  on-tertiary: '#ffffff'
  tertiary-container: '#008256'
  on-tertiary-container: '#e1ffeb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#4cd6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#6afcb9'
  tertiary-fixed-dim: '#49df9f'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005235'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  bg-light: '#FFFFFF'
  bg-dark: '#0B0E14'
  surface-light: '#F8FAFC'
  surface-dark: '#161B22'
  text-light: '#0F172A'
  text-dark: '#F1F5F9'
  border-subtle: rgba(0, 102, 255, 0.1)
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Geist
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
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
This design system is engineered for a premium EdTech experience that balances the rigor of academic excellence with the sleekness of modern technology. The brand personality is authoritative yet accessible—positioning itself as a high-performance "accelerator" for students targeting competitive exams like NEET and JEE.

The aesthetic follows a **Corporate / Modern** direction with heavy influences from **Glassmorphism**. It utilizes high-contrast surfaces, generous whitespace, and precise geometry to create a sense of organized, goal-oriented learning. The visual language conveys trust through structured layouts while maintaining a "tech-forward" energy through vibrant electric accents and translucent depth.

## Colors
The palette centers on "Atomic Blue," a high-energy primary color used for critical CTAs and brand identifiers. 

- **Primary (Atomic Blue):** Used for primary buttons, active states, and progress indicators.
- **Secondary (Cyan/Electric):** Used for accent highlights, secondary data points in analytics, and decorative flourishes.
- **Tertiary (Success Green):** Retained for "Correct Answer" states, enrollment success, and verified badges.
- **Neutral:** A deep slate-navy used for typography to maintain higher readability than pure black.

For the **Dark Theme**, surfaces should not be pure black but rather `#0B0E14` to allow for subtle depth layering. Glassmorphism effects are achieved using a white or blue-tinted stroke at 10-15% opacity on top of these dark surfaces.

## Typography
The system uses **Geist** for headings to project a technical, precise, and high-performance feel. Its monospaced-influenced tracking at larger sizes evokes a sense of "Atomic" engineering. **Inter** is used for body text and UI labels due to its supreme legibility in data-heavy environments like performance analytics and test interfaces.

- **Headlines:** Should use tight letter-spacing (-0.02em) to appear authoritative.
- **Body Text:** Use a slightly relaxed line-height (1.5x) to prevent fatigue during long reading sessions.
- **Labels:** Use medium or semibold weights for quick scanning in navigation and tags.

## Layout & Spacing
The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Whitespace:** Use aggressive whitespace (stack-lg) between sections to maintain the "minimalist premium" feel. 
- **Alignment:** Content should be center-aligned in containers with a max-width of 1280px.
- **Reflow:** On tablet/mobile, Faculty and Batch cards should transition from a multi-column grid to a horizontal carousel (scroll-snap) to preserve vertical space and encourage exploration.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

- **Level 1 (Surface):** Default background (`#FFFFFF` or `#0B0E14`).
- **Level 2 (Cards):** Slightly elevated. In Light mode, use a 1px border of `#F1F5F9`. In Dark mode, use a 1px border of `rgba(255,255,255,0.1)` with a 12px backdrop-blur.
- **Level 3 (Popovers/Modals):** Use a soft, diffused shadow with a blue tint: `0 20px 40px rgba(0, 102, 255, 0.08)`.
- **Interactive States:** On hover, cards should "lift" by increasing the shadow spread and sharpening the border contrast.

## Shapes
A consistent `rounded-2xl` (1rem) language is applied across all major components to soften the "technical" nature of the brand and make it feel more approachable for students.

- **Standard Radius:** 0.5rem (Buttons, Input fields).
- **Large Radius:** 1rem (Batch Cards, Faculty Cards, Modals).
- **Full Radius:** 9999px (Status chips, tags, and scroll-to-top buttons).

## Components

### Batch Cards
Cards should feature a "glassy" header area for the course title (e.g., "Target NEET 2025"). Include a high-contrast price tag in the bottom right using the Secondary color. Use a "Primary" button for the "Enroll Now" CTA, spanning the full width of the card base.

### Faculty Cards
Faculty images should be high-quality portraits with the background removed, placed on a subtle gradient of Primary to Secondary. Credentials should use `label-sm` with high contrast.

### Performance Analytics
Use "Atomic Blue" for primary data lines and "Electric Cyan" for comparison or "average student" metrics. Widgets should be Level 2 surfaces with 1px borders to separate different data types (e.g., Accuracy vs. Speed).

### Testimonial Sliders
Use a quote-mark icon as a background watermark in 5% opacity Primary color. The student’s rank or achievement should be highlighted in a "Success Green" pill-shaped tag.

### Navigation & Footer
- **Nav:** Sticky glassmorphic bar with 20px backdrop-blur. Use `label-md` for links with an underline transition on hover.
- **Footer:** Deep neutral background (`#0F172A`) with a 4-column layout for links. Include a newsletter signup using a "Soft" rounded input and "Atomic Blue" button.