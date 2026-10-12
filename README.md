# Paradise Nursery

A responsive plant shop built with React, Redux Toolkit, and Vite. Explore houseplants by category, add plants to a cart, adjust quantities, remove products, and see live item counts and totals.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to check the production build.

## Features

- Landing page with a plant background, company introduction, and Get Started button
- Product listing grouped into three categories, each with images, descriptions, prices, and Add to Cart buttons
- Cart icon with live total quantity; adding a product disables its Add to Cart button
- Cart page with line prices, quantity controls, remove buttons, total quantity and cost, Continue Shopping and Checkout buttons
- Checkout is a demonstration placeholder; no payment is collected

Project files requested for review are in `src/`: `AboutUs.jsx`, `App.css`, `App.jsx`, `CartSlice.jsx`, `ProductList.jsx`, and `CartItem.jsx`.
