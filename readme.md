<figure><img src="https://raw.githubusercontent.com/suren-atoyan/monaco-react/HEAD/playground/logo.svg" alt="" style="background:white"> </figure> 


# Decoder

Decoder is a versatile platform designed to enhance your coding experience by integrating GitHub repository search with an AI-driven code explanation feature.

## Features

- **GitHub Repository Search:** Quickly find and access GitHub repositories directly within the platform.
- **Code Editor Integration:** Open repositories in an integrated code editor for seamless browsing and exploration.
- **AI Code Explanation:** Get detailed explanations for any code segment using advanced AI capabilities.
- **User Authentication:** Securely manage user accounts with authentication functionalities.
- **Responsive Design:** Ensures a smooth experience across various devices and screen sizes.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** Prisma
- **AI Services:** OpenAI and Github
## Testing

Decoder has been thoroughly tested using React Testing Library and Jest to ensure code quality and reliability. Unit tests have been implemented to cover critical functionalities and fix numerous bugs throughout development.

### Running Tests Locally

To run tests locally, 


   ```bash
   npm run test
   ```


## Contributing

Contributions are welcome! If you'd like to contribute to Decoder, please follow these guidelines:
- Fork the repository and create your branch from `main`.
- Make sure your code follows the established coding style and conventions.
- Test your changes thoroughly.
- Create a pull request detailing the changes made and any relevant information.




## Decoder - Project Structure
```

├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ readme.md
├─ server
│  ├─ auth.mjs
│  ├─ env.mjs
│  ├─ index.mjs
│  ├─ prisma
│  │  ├─ client.mjs
│  │  ├─ dev.db
│  │  ├─ migrations
│  │  │  ├─ 20221219191221_init
│  │  │  │  └─ migration.sql
│  │  │  └─ migration_lock.toml
│  │  └─ schema.prisma
│  ├─ routes.mjs
│  └─ validators.mjs
├─ src
│  ├─ App.js
│  ├─ components
│  │  ├─ auth
│  │  │  ├─ AuthButtons.js
│  │  │  ├─ AuthButtons.test.js
│  │  │  ├─ SignInForm.js
│  │  │  └─ SignUpForm.js
│  │  ├─ editor
│  │  │  ├─ Breadcrumbs.js
│  │  │  ├─ Editor.js
│  │  │  ├─ EditorPanel.js
│  │  │  ├─ ExplanationList.js
│  │  │  └─ ExplanationPopup.js
│  │  ├─ electron-1.svg
│  │  ├─ forms
│  │  │  ├─ Button.js
│  │  │  ├─ Checkbox.js
│  │  │  ├─ FormError.js
│  │  │  ├─ Input.js
│  │  │  └─ Label.js
│  │  ├─ Header.js
│  │  ├─ hero.css
│  │  ├─ Hero.js
│  │  ├─ repositories
│  │  │  ├─ RepositoriesListItem.js
│  │  │  ├─ RepositoriesListItem.test.js
│  │  │  ├─ RepositoriesSummary.js
│  │  │  ├─ RepositoriesSummary.test.js
│  │  │  └─ RepositoriesTable.js
│  │  ├─ search
│  │  │  └─ SearchBar.js
│  │  └─ tree
│  │     ├─ File.js
│  │     ├─ FileIcon.js
│  │     ├─ Folder.js
│  │     ├─ TreeEntry.js
│  │     └─ TreePanel.js
│  ├─ hooks
│  │  ├─ useEntry.js
│  │  ├─ useExplanation.js
│  │  ├─ useFile.js
│  │  ├─ useRepositories.js
│  │  ├─ useSignIn.js
│  │  ├─ useSignOut.js
│  │  ├─ useSignUp.js
│  │  └─ useUser.js
│  ├─ index.css
│  ├─ index.js
│  ├─ routes
│  │  ├─ EditorRoute.js
│  │  ├─ HomeRoute.js
│  │  ├─ HomeRoute.test.js
│  │  ├─ NotFoundRoute.js
│  │  ├─ RepositoriesSearchRoute.js
│  │  ├─ RootRoute.js
│  │  ├─ SignInRoute.js
│  │  ├─ SignOutRoute.js
│  │  ├─ SignUpRoute.js
│  │  └─ TestRoute.js
│  ├─ setupTests.js
│  ├─ test
│  │  └─ server.js
│  └─ util
│     └─ getLangFromPath.js
├─ tailwind.config.js
├─ .gitignore
├─ npm-shrinkwrap.json
├─ package.json

```
