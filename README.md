This is the DietFlow documentation site, built with
[Fumadocs](https://github.com/fuma-nama/fumadocs) and Next.js.

Run development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Structure

- `lib/source.ts`: Content source adapter
- `lib/layout.shared.tsx`: Shared layout options
- `content/docs/`: MDX documentation files

| Route                     | Description                                |
| ------------------------- | ------------------------------------------ |
| `app/(home)`              | Landing page                               |
| `app/docs`                | Documentation layout and pages             |
| `app/api/search/route.ts` | Search API route handler                   |
