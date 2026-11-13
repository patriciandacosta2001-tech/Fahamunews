# Fahamu News

Fahamu News is a responsive editorial news website built with Next.js, React, and Keystatic. Its identity follows the supplied brand board: press red (`#97171A`), field sage (`#8FAF72`), ink black (`#171513`), paper (`#E8E1D5`), and signal red (`#C9222B`). The source brand board is in `public/brand/brand-board.svg`.

The site includes a homepage, story archive, individual article pages, About page, and the Keystatic admin at `/keystatic`. Three sample stories are clearly fictional.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Edit articles at <http://localhost:3000/keystatic>. Local development uses Keystatic local storage and needs no GitHub login. Articles are readable Markdoc files in `content/articles/`.

## Deploy to Vercel

1. Import this private GitHub repository into Vercel.
2. The Vercel build uses Keystatic GitHub storage for `patriciandacosta2001-tech/Fahamunews`. Local development stays in local storage.
3. Create a custom GitHub App for Keystatic and install it for this repository. Configure the callback URL shown during Keystatic's setup.
4. Add these values in Vercel Project Settings → Environment Variables. Do not commit them or put them in source files:
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - `KEYSTATIC_SECRET`
   - `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
5. Redeploy after adding the values. Keystatic GitHub mode allows editing by users with write access to the repository.

Publishing through GitHub updates the content files and triggers a Vercel deployment. Vercel's local filesystem is not persistent, so production editing uses GitHub storage.

## Project structure

- `app/` — pages, layouts, and Keystatic API routes
- `components/` — shared header, footer, and story cards
- `content/articles/` — article files managed by Keystatic
- `public/brand/` — supplied brand assets
- `keystatic.config.tsx` — article schema and local/GitHub storage choice

The three included sample stories and all people, places, events, and quotations in them are fictional. They are demonstration content, not reporting.
