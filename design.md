# Design System Document: The Oceanic Curator
 
## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Oceanic Curator."** This concept moves away from the "commodity" feel of standard e-commerce and into the realm of high-end editorial experiences. We are not just selling seafood; we are presenting rare, oceanic treasures. 
 
The aesthetic is driven by **Atmospheric Minimalist Hyper-Contrast**. By utilizing expansive white space (the "Crisp White") against the weight of the "Deep Ocean Blue," we create a sense of vastness and luxury. To break the "template" look, layouts must employ intentional asymmetry—such as images overlapping container edges and typography that breaks traditional grid gutters—mimicking the layout of a luxury lifestyle magazine.
 
---
 
## 2. Colors & Surface Architecture
This system utilizes a sophisticated Material-inspired palette to create depth through tonal shifts rather than lines.
 
### The Palette
*   **Primary (`#001e40`):** The Abyssal Blue. Used for hero backgrounds, primary CTAs, and high-level branding.
*   **Secondary (`#755b00`):** The Gilded Accent. Reserved for moments of luxury: price points, premium badges, and active states.
*   **Surface Hierarchy:** We utilize the `surface-container` tiers to create a "Physicality of Light."
 
### Key Color Rules
*   **The "No-Line" Rule:** We strictly prohibit the use of 1px solid borders for sectioning. Boundaries between content blocks must be defined solely through background color shifts. For example, a section using `surface-container-low` (`#f3f3f6`) sitting atop a `surface` (`#f9f9fc`) background.
*   **The "Glass & Gradient" Rule:** To provide visual "soul," use subtle linear gradients on Primary CTAs transitioning from `primary` (`#001e40`) to `primary_container` (`#003366`). For floating navigation or over-image menus, use **Glassmorphism**: a semi-transparent `surface` color with a 20px backdrop-blur.
*   **Surface Nesting:** Treat the UI as stacked sheets of fine paper. A `surface-container-lowest` card should be nested within a `surface-container-low` section to provide a soft, natural lift.
 
---
 
## 3. Typography
The typographic pairing is a dialogue between heritage and modernity.
 
*   **Display & Headlines (notoSerif):** This serif provides the "Editorial Voice." Use `display-lg` (3.5rem) for hero statements and `headline-lg` (2rem) for product categories. Always use a high-contrast color (`primary`) against `surface` to ensure an expensive feel.
*   **Body & Labels (manrope):** This sans-serif provides the "Functional Voice." It is clean, modern, and highly legible. Use `body-lg` (1rem) for descriptions to maintain a sense of premium breathing room.
*   **Hierarchy Note:** Use wide letter-spacing (0.05em) for `label-md` and `label-sm` when they appear in all-caps to denote secondary metadata or "Member Only" tags.
 
---
 
## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not structural rigidity.
 
*   **The Layering Principle:** Avoid shadows where background shifts can do the work. If a `surface-container-highest` element sits on a `surface` background, the 4-step difference in lightness provides sufficient "lift."
*   **Ambient Shadows:** When a floating element (like a modal or a floating cart) is required, use extra-diffused shadows. 
    *   *Values:* `0px 20px 40px rgba(26, 28, 30, 0.06)` (using the `on-surface` color for the tint).
*   **The "Ghost Border" Fallback:** If a container requires definition against a photograph, use a "Ghost Border": `outline-variant` (`#c3c6d1`) at 15% opacity. Never use 100% opaque borders.
 
---
 
## 5. Components
 
### Buttons
*   **Primary:** Background `primary`, text `on_primary`. Roundedness: `md` (0.375rem). Transition: Subtle scale up (1.02x) on hover with a slight gradient shift.
*   **Secondary (Luxury):** Background `secondary`, text `on_secondary`. Used sparingly for "Order Now" or "Reserve" actions.
*   **Tertiary:** Text-only using `primary` with a 1px `primary` underline that expands from center on hover.
 
### Cards & Lists
*   **The Divider Forbid:** No horizontal rules `
`. Use 48px or 64px of vertical whitespace (from the spacing scale) to separate list items.

*   **Product Cards:** Use `surface-container-lowest` for the card body. Images should have a slight `0.25rem` (DEFAULT) radius and fill the top half of the card. Titles should use `title-lg`.
 
### Input Fields
*   **Styling:** Minimalist approach. Only a bottom border using `outline` (`#737780`) at 30% opacity. Upon focus, the border becomes `primary` and shifts to 2px.
*   **Floating Labels:** Use `label-md` for labels that animate 8px upward on focus.
 
### Editorial Components (App-Specific)
*   **The "Provenance" Badge:** A small, circular `secondary_container` chip with `on_secondary_container` text, used to denote the origin of the seafood (e.g., "Wild Caught - Hokkaido").
*   **Image Overlays:** Large-scale professional photography must use a `primary` color overlay at 10-20% opacity to ensure text readability while maintaining brand tone.
 
---
 
## 6. Do's and Don'ts
 
### Do
*   **Do** use asymmetrical layouts where images are slightly offset from the text columns.
*   **Do** prioritize `surface` as the primary background color to keep the "Crisp White" luxury feel.
*   **Do** use `secondary` (Gold) strictly as a highlight color (less than 5% of the screen).
 
### Don't
*   **Don't** use 1px solid borders to separate sections; it creates a "cheap" or "templated" grid look.
*   **Don't** use standard black (`#000000`). Always use `on_surface` (`#1a1c1e`) for text to maintain a softer, more premium contrast.
*   **Don't** crowd elements. If a section feels "full," increase the padding by 1.5x. Luxury is the luxury of space.
*   **Don't** use sharp corners. Stick to the `md` (0.375rem) roundedness for a sophisticated, approachable feel.