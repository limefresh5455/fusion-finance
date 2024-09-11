This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Most of the website is there, however when I was given the designs there was no design for mobile, so this has been built for desktop/tablet. The bulk of the work will be optimising for mobile and adding media queries to make everything align on mobile. There needs to be a conversation about how the mobile design should look, as the desktop design is quite complex and won't be suitable for mobile. I'd suggest hamburger icons etc, but that needs to be run past Fusion first. With this in mind, its the home page and the navbar that will probably need the most optimisation for mobile. The other pages will only requitre little tweaks as theyre quite simple.

There are some workarounds that required CSS instead of Tailwind, and I've put notes at the top of files that have CCS counterparts. The main problem area is the image carousel, and getting it to display across different screen sizes, and that required CSS.

Another conversation that needs to happen with Fusion is about how they want the data to be displayed when a quote is requested. The form is there and it works, but the info that comes back wont make sense to a client.

There is an email integration at src/app/api/send/route.ts. Change the email address to your own to test the form.

If you have any questions then feel free to drop me an email at joe_hannis@hotmail.com

NOTES:

- This project is using [Tailwind CSS](https://tailwindcss.com/).
- This project is using [TypeScript](https://www.typescriptlang.org/).
- This project is using [ESLint](https://eslint.org/).
- This project is using [Prettier](https://prettier.io/).
