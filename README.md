This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and configured with **essential libraries and settings**. It is tailored to expedite the initialization phase by offering a pre-configured setup with indispensable tools, eliminating the need for manual configuration.

Designed as a comprehensive starter project, its objective is to streamline the process of starting new projects by providing a solid foundation. Leveraging the efficiency of pnpm as the default package manager, it remains adaptable to various preferred package managers for seamless integration.

[`Working Demo`](https://nextjs-starter-basic.vercel.app/)

Furthermore, this project comes equipped with a thoughtfully curated selection of additional libraries and configurations to enhance development efficiency and ensure a robust starting point for projects of any scale and complexity. Added libraries & configurations are as follows-

- [`EditorConfig`](https://editorconfig.org/) to maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
- [`VSCode` Configurations](https://code.visualstudio.com/) configurations & extensions to maintain consistency accross developers on the same project. The VSCode extensions used are -
  - [`Auto Close Tag`](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text does.
  - [`Better Comments`](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - The Better Comments extension will help you create more human-friendly comments in your code.
  - [`DotENV`](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - A port of [`DotENV`](https://github.com/zaynali53/DotENV) for vscode.
  - [`EditorConfig for VS Code`](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - This plugin attempts to override user/workspace settings with settings found in .editorconfig files.
  - [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates [ESLint](http://eslint.org/) into VS Code. If you are new to ESLint check the [documentation](http://eslint.org/).
  - [`formate: CSS/LESS/SCSS formatter`](https://marketplace.visualstudio.com/items?itemName=MikeBovenlander.formate) - VSCode plugin to format your CSS / LESS and SCSS files which can **vertical align** properties.
  - [`Git History`](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) - Git History, Search and More (including  _git log_)
  - [`GitLens — Git supercharged`](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - GitLens supercharges your Git experience in VS Code.
  - [`Import Cost`](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - This extension will display inline in the editor the size of the imported package.
  - [`Javascript Booster`](https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster) - This VS Code extension provides various code actions (quick fixes) when editing code in JavaScript (or TypeScript/Flow).
  - [`npm Intellisense`](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) - Visual Studio Code plugin that autocompletes npm modules in import statements.
  - [`PostCSS Language Support`](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) - PostCSS Language Support adds support for modern and experimental CSS within Visual Studio Code.
  - [`Prettier Code Formatter`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Prettier Formatter for Visual Studio Code.
  - [`Tailwind CSS IntelliSense`](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind CSS IntelliSense enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.
  - [`Tailwind Documentation`](https://marketplace.visualstudio.com/items?itemName=alfredbirk.tailwind-documentation) - Instant search in Tailwind docs.
  - [`Todo Tree`](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) - This extension quickly searches (using [`ripgrep`](https://github.com/BurntSushi/ripgrep)) your workspace for comment tags like TODO and FIXME, and displays them in a tree view in the activity bar.
  - [`Turbo Console Log`](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log) - This extension make debugging much easier by automating the operation of writing meaningful log message.
  - [`VSCode React Refactor`](https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor) - This simple extension provides JSX refactor code actions for React developers.
  - [`Package Json Upgrade`](https://marketplace.visualstudio.com/items?itemName=codeandstuff.package-json-upgrade) - Shows available updates in package.json. Offers quick actions to guide you in your updating.
- [`ESLint`](https://nextjs.org/docs/pages/building-your-application/configuring/eslint) - Recomended configs for ESlint for NextJS with Prettier integration.
- [`Prettier`](https://prettier.io/) - Extended Prettier configs integrated with ESLint.The prettier plugins used in the configs are-
  - [`Prettier Plugin Sort Imports`](https://github.com/trivago/prettier-plugin-sort-imports) - A prettier plugin to sort import declarations by provided Regular Expression order.
  - [`Prettier Plugin Tailwind CSS`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - A Prettier v3+ plugin for Tailwind CSS v3.0+ that automatically sorts classes based on [`our recommended class order`](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)`.
- [`Tailwind CSS`](https://tailwindcss.com/) - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- [`Next Themes`](https://github.com/pacocoursey/next-themes) - An abstraction for themes in your Next.js app.
- [`Next JS + Webpack Bundle Analyzer`](https://www.npmjs.com/package/@next/bundle-analyzer) - Use webpack-bundle-analyzer in your Next.js project.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Feedback

We highly value feedback and contributions concerning libraries or any aspect of this project. Your insights and suggestions are immensely appreciated and welcomed. Our aim is to continually enhance and refine this project, ensuring it remains a valuable and adaptable resource for developers. Your input plays a crucial role in shaping its evolution, and we encourage active participation to further elevate its quality and utility.

With ❤️ from Qrati Labs
