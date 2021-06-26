![React Avançado](https://raw.githubusercontent.com/React-Avancado/boilerplate/master/public/img/logo-gh.svg)

This is a very simple boilerplate made with [Next.js](https://nextjs.org/) and [GraphQL Request](https://github.com/prisma-labs/graphql-request) to start small projects with GraphQL.

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [GraphQL Request](https://github.com/prisma-labs/graphql-request)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Working with GraphQL

In order to work with GraphQL we have two variables that you need to define in your `.env`. Those are:

- `GRAPHQL_HOST`: your GraphQL API url
- `GRAPHQL_TOKEN`: your token if the API needs authentication

If you need to use authentication, just edit the [src/graphql/client.ts] to use the token part. After that, you're ready to go!

## How to generate your GraphQL Types

We use the amazing [graphql-codegen](https://www.graphql-code-generator.com/) to generate our types based on the API. All you have to do is:

- Define your API inside the [codegen.yml](codegen.yml) file
- Run `yarn codegen` and that's it! All your generated types will be inside [src/graphql/generated](src/graphql/generated) folder.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `codegen`: creates the graphql generated types based in your API
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
