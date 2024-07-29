## Getting Started

First, install the packages:

```bash
pnpm install
```

Rename the `.env.example` file to `.env` and fill in the environment variables.

```bash
# Ecommerce Store Url (Use for redirecting to the store)
STOREFRONT_URL=

# Clerk (Authentication)
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

# Database
DATABASE_URL=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

# Stripe
STRIPE_WEBHOOK_SECRET=
STRIPE_API_KEY=
```

For first time setup, run the following command to create the database schema:

```bash
pnpm run db:generate
pnpm run db:push
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_source=github.com&utm_medium=referral&utm_campaign=turborepo-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
