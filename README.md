# Real Estate Leads

A deploy-ready Next.js + Tailwind CSS web app for real estate lead generation.

## Features

- Responsive landing page with real estate hero/value proposition
- Lead capture form with fields:
  - Name (required)
  - Email (required)
  - Phone Number (optional)
  - Budget (optional)
  - Message (required)
- Netlify Forms integration (submissions appear in Netlify dashboard and can trigger email notifications)
- Thank-you confirmation page after submission

## Run locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Lint and build

```bash
npm run lint
npm run build
```

## Deploy to Netlify

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site** → **Import an existing project**.
3. Select this repository.
4. Netlify should auto-detect Next.js. If prompted, use:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy.

### Netlify Forms notes

- The form on `/` is configured with `data-netlify="true"`, a `form-name` hidden input, and a honeypot field.
- `public/form.html` contains a static Netlify form declaration required by `@netlify/plugin-nextjs@5` during build-time form detection.
- After deployment, submit the form once to verify entries in **Netlify Dashboard → Forms**.
- In Netlify, you can enable email notifications for form submissions under **Forms → Settings & usage**.
