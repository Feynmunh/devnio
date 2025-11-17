## Devnio — Dark Agency Site

Devnio is a single-brand agency experience inspired by vercel.com aesthetics. It includes a high-contrast landing page (hero, services, pricing, portfolio, FAQ) plus dedicated About and Contact screens.

### Tech Stack

- Next.js 14 (App Router, React Server Components)
- TypeScript + ESLint
- Tailwind CSS v4

### Running Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` for the main page, `http://localhost:3000/about`, and `http://localhost:3000/contact` for supporting pages.

### Available Scripts

- `npm run dev` – start the local dev server with HMR
- `npm run lint` – run Next.js linting
- `npm run build` – create a production build
- `npm run start` – serve the production build

### Customization Notes

- Update copy and pricing inside `app/page.tsx` arrays.
- Replace placeholder metadata image URLs in `app/layout.tsx` before shipping.
- Wire the contact form (`app/contact/page.tsx`) to your backend or CRM; it is non-functional by default.

### Deployment

The project is ready to deploy on Vercel or any Next.js-compatible host. Run `npm run build` locally before shipping to ensure assets compile correctly.
