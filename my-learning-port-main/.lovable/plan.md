# Personal Portfolio — Plan

A single-page portfolio at `/` with sticky nav, smooth scroll, dark mode toggle, scroll-reveal animations, and a working JS calculator. Soft blue / white / dark gray palette, rounded cards, subtle shadows, mobile-first.

## Structure

Everything lives under `/` as one scrollable page with in-page anchors (Home, About, Learning, Project, Skills, Contact). This is the documented exception to the "separate routes per section" rule — the user explicitly asked for a single portfolio page with smooth-scroll nav.

```text
src/
  routes/
    index.tsx           # renders <Portfolio />, sets SEO head()
  components/portfolio/
    Navbar.tsx          # sticky, smooth-scroll links, dark mode toggle
    Hero.tsx            # section id="home"
    About.tsx           # section id="about" + strength cards
    Learning.tsx        # section id="learning" (6 concept cards)
    Calculator.tsx      # working add/sub/mul/div calculator
    Project.tsx         # section id="project" wraps Calculator + explainer
    Skills.tsx          # section id="skills" animated progress bars
    Contact.tsx         # section id="contact"
    Footer.tsx
    SectionReveal.tsx   # IntersectionObserver wrapper for fade-in-up
  hooks/
    useDarkMode.ts      # toggles `dark` class on <html>, persists in localStorage (read in useEffect to avoid SSR mismatch)
  content/
    portfolio.ts        # ALL editable text: name, age, city, bio, goals, skills[], learning[], contact
  assets/
    profile.jpg         # single file to replace for profile photo
```

All copy (name placeholder, intro, skill percentages, learning cards, contact info) lives in `src/content/portfolio.ts` as typed exports so the user edits one file. Skill bar values are `{ label, value }` entries.

## Design tokens (src/styles.css)

Extend the existing `:root` / `.dark` with a soft-blue palette:
- Light: background `#f8fafc`-ish white, foreground dark gray `#1f2937`-ish, primary soft blue `#3b82f6`-ish, cards white with `shadow-sm`/`shadow-lg` hover.
- Dark: background dark gray `#0f172a`-ish, foreground near-white, primary lighter blue.
Values written in oklch per project convention; keep existing shadcn tokens intact.

## Sections

1. **Hero** — full-height, centered, gradient soft-blue background, welcome + name + intro paragraph, "Learn More" button that scrolls to `#about` via `scrollIntoView({ behavior: 'smooth' })`.
2. **About** — two-column grid (`grid-cols-1 md:grid-cols-2`), left = large circular `<img src={profile}>` (import from `assets/profile.jpg`), right = name / age / city / bio / goals. Below: 4 strength cards (Problem Solving, Creativity, Teamwork, Continuous Learning) with Lucide icons.
3. **What I'm Learning** — responsive grid of 6 cards (Computer, HTML, CSS, JS, How websites work, Git/GitHub) with icon + title + short beginner explanation.
4. **My First Project** — working calculator built with `useState` (expression + result), buttons for digits, `+ - × ÷`, `=`, `C`. Safe evaluator (tokenize + compute, no `eval`). Responsive grid layout. Explainer paragraph beneath.
5. **Skills** — animated progress bars. On reveal (IntersectionObserver), width transitions from 0 → target %. Values in `content/portfolio.ts`.
6. **Contact** — cards with email / phone / location placeholders and social icon links (GitHub, LinkedIn, Twitter) using Lucide.
7. **Footer** — copyright line as specified.

## Nav & UX

- `Navbar` fixed top, translucent backdrop-blur, links use `<a href="#section">` + `onClick` smooth scroll; active section highlighted via IntersectionObserver.
- Dark mode toggle (Sun/Moon icon) — `useDarkMode` reads `localStorage` inside `useEffect` (not `useState` initializer) to avoid SSR hydration mismatch, toggles `dark` class on `document.documentElement`.
- Global smooth scroll via `html { scroll-behavior: smooth }` in `styles.css` and `scroll-mt-20` on each section for sticky-nav offset.
- `SectionReveal` wraps sections and adds `opacity-0 translate-y-4` → `opacity-100 translate-y-0` with `transition` when intersecting.
- Hover: `hover:-translate-y-1 hover:shadow-lg transition` on cards.

## SEO

`index.tsx` sets `head()` with real title ("My Learning Journey — Portfolio"), description, og:title/description/type, twitter:card. Single H1 in Hero. Semantic `<section>`, `<nav>`, `<header>`, `<footer>`. Alt text on profile image.

## Out of scope

No backend, no forms submission (contact is display-only placeholders), no routing beyond `/`.