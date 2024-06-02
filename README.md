# Getting started

### Developing in GitHub Codespaces (recommended)

The codespace will run `npm install` and `npm run dev` automatically. It may take a minute or two, but once it has started up, click "Open in Browser" to open the site in a new tab. It will hot reload (automatically update) as you make changes. See the video below for reference.


https://github.com/FirstPrinciplesDevelopment/stellmarfarm/assets/38818928/3c26eebc-9a62-48dc-bede-6874c0ef0893


### Developing Locally


1. Install [Node.js 20](https://nodejs.org/en), [git](https://git-scm.com/downloads), and an editor such as [VS Code](https://code.visualstudio.com/).

2. Clone this git repository and open it in your editor.
    ```sh
    git clone https://github.com/FirstPrinciplesDevelopment/stellmarfarm.git
    ``` 

3. Install dependencies.
    ```sh
    npm install
    ```
    
4. Use parcel to build and start development server.

    ```sh
    npm run dev
    ```

5. Browse to [localhost:1234](http://localhost:1234). As you make edits, parcel will rebuild and hot reload the page.



# More Information

### Parcel

[Parcel](https://parceljs.org/) is used to
- copy all your HTML, CSS and JS from src/ to dist/,
- use tailwindcss to scan your source code and compile the minimal CSS for tailwind classes you use, see [the docs](https://tailwindcss.com/docs/guides/parcel),
- start a development server that rebuilds and hot reloads the page in your browser when you make changes in src/.

### Directory Structure

```
.github/
src/
.gitignore
.postcssrc
package-lock.json
package.json
README.md
tailwind.config.js
```

- **.github/** contains definitions of ***workflows*** also called ***actions*** that can, among other things, deploy every time you push new code to GitHub.
- **src/** contains the HTML, JS and CSS that you can edit.

