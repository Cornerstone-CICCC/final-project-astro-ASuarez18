  # Final Project — Product Listing Website

  Build a product listing website using **Astro**, **TypeScript**, and **OOP**.

  You are given:

  - `products.json` — your only data source
  - This README

  ---

  ## What to Build

  A site that displays all products and provides an individual detail page for each one. The exact structure, styling, and routing approach are up to you — there is more than one valid way to build this.

  At minimum, your project must include:

  - A product listing page
  - A detail page per product
  - Reusable components (e.g. card, grid, layout)
  - TypeScript classes that model the data
  - At least one interactive feature (Astro island)

  Examples of interactive features: filter by category, sort by price, toggle wishlist, hide out-of-stock items.

  ---

  ## TypeScript Requirements

  - Define an **`interface`** for the product shape (do not use `type` aliases or `any` for this).
  - Add explicit **type annotations** on:
    - All class fields and constructor parameters
    - All method parameters and return types
    - All component `Props` definitions
  - Function bodies and local variables can rely on inference — annotate boundaries, not internals.

  ---

  ## OOP Requirements

  You must **not** use raw JSON directly inside UI components. Load JSON through your classes.

  You should create at least:

  ### `Product`
  Wraps a single product. Suggested methods: `getFormattedPrice()`, `getSlug()`, `isInStock()`.

  ### `ProductCatalog`
  Wraps the full dataset. Suggested methods: `getAllProducts()`, `getProductBySlug(slug)`, `getProductsByCategory(category)`.

  ---

  ## Individual Product Pages

  Choose **one** approach and commit to it. Options include:

  - Dynamic routes via `[slug].astro` with `getStaticPaths()`
  - Category-based routes
  - Manually authored static pages
  - Any other Astro-supported approach

  ---

  ## Reflection (`reflection.md`)

  Include a `reflection.md` file at the project root. A few short paragraphs covering:

  - Which approach you chose for the product pages
  - Why you chose it
  - The benefit over the alternatives
  - Any limitations or trade-offs
  - **The hosted link** to your deployed site (see below)

  This is where we evaluate your understanding — be honest and specific.

  ---

  ## Deployment

  Deploy your project and include the **live hosted URL** at the top of `reflection.md`. Any free static host works — Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc. Since the site is static (`npm run build` produces a `dist/` folder), most hosts will pick it up with zero config.

  Make sure the live link actually works before submitting.

  ---

  ## Technical Rules

  - Use Astro + TypeScript + OOP
  - Use components, props, and layouts
  - Use the provided JSON file as your only data source
  - No external APIs, no backend fetching, no hardcoded product data in pages
  - **No React, Vue, Svelte, or any UI framework.** This is a vanilla project — interactive features must be built with plain TypeScript / DOM APIs inside an Astro `<script>` tag
  - **No reactive state libraries or hooks** (no `useState`, no signals, no stores). Hold state in plain variables and update the DOM directly. Functional/declarative UI patterns are out of scope for this course

  ---

  ## Styling & Allowed Libraries

  Style the site however you like — plain CSS, scoped `<style>` blocks, a global stylesheet, or a utility framework. You are free to make it look however you want; design and polish are part of the deliverable.

  You **may** add:

  - **Tailwind CSS** — via `npx astro add tailwind`
  - **jQuery** — for DOM manipulation inside your `<script>` tags, if you prefer it over vanilla DOM APIs

  You are also free to organize your own folders (e.g. `src/components/`, `src/layouts/`, `src/styles/`, `src/utils/`, `public/images/`) and split your code and assets however makes sense to you. The suggested structure is a starting point, not a rule.

  ---

  ## Evaluation

  | Area | Weight |
  |---|---|
  | Code structure & TypeScript (interfaces, annotations, reusability) | 35% |
  | OOP implementation (classes transform JSON into typed objects) | 25% |
  | Astro implementation (routing, props, layouts, chosen strategy) | 25% |
  | Explanation & `reflection.md` | 15% |

  > Good luck!
