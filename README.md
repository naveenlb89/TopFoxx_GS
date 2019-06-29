## Getting Started
1. `` npm install ``
2. `` npm run start``

## Framework Notes
1. HTML files are located in dist folder
2. The webserver uses dist folder as it's root 
3. It runs at http://localhost:8080/
4. This project uses a [CSS Linter](#CSS Linter), if it detects an error 
it will display a compile failed message with the rule violation. 
The page will not automatically refresh until the error is fixed. 
You can always manually click refresh too see changes.

## Webpack Dev Server Pages
1. http://localhost:8080/ = dist/index.html
2. http://localhost:8080/product.html = dist/product.html

## Commands
Start - Starts dev server. Watches for changes and builds project. Run this when working on project.
    
`` npm run start``

Watch - Watches for changes and builds project.

`` npm run watch``

Build - Builds project once.

`` npm run build``

Lint CSS - Checks scss for errors and best practices.

`` npm run lint:css``

Fix CSS - Checks scss for errors and best practices. Automatically fixes simple errors like line endings

`` npm run fix:css``

## Folders
1. dist - compiled scss/js and html files will be here
    1. images - all images used (src = /images/image-name)
    2. partials
         1. nav.html
         2. footer.html

3. scripts - all javascript files
4. styles - all scss files

## Guidelines
- Use BEM syntax, guides for reference:
  - [BEM Overview](http://getbem.com/introduction/)
  - [Detailed BEM Guide](https://en.bem.info/methodology/quick-start/)
- Framework is based on [BEM Skel](http://bemskel.com/) 
- Use [media-query](#responsive-mixins) mixin for all breakpoints

## Responsive Mixins
Use the media-query mixin provided for all breakpoints, example:

```scss
@include media-query($medium-up) {
  // Responsive styles here
}
```

## Grid System - 12 column fluid grid
All columns become full width below 540px

`.col + --width`

`.col--1` = Column with 1/12 width

```$scss
.col--1
.col--2
.col--3
```

## Responsive Grid System - < 768px
Grid system is located in `styles/tools/_grid.scss`

.small + --width

.small--1 = Column with 1/12 width
```$scss
.small--1
.small--2
.small--3
```

## Commits
1. Commit a minimum of once per page or day
2. Push changes often so we can see progress

## CSS Linter
This project uses stylelint and prettier for checking css. 
When compiling code it will check for errors and display them similar to the image below.
If you see an error, example `selector-max-specificity` you can check style lint's 
website or easily google "stylelint + error". For the example error I would search 
"stylelint selector-max-specificity".

![linter](https://github.com/stylelint/stylelint/raw/master/example.png?raw=true)

- [style lint](https://stylelint.io/)
- [prettier](https://github.com/prettier/stylelint-prettier)


## Plugins
Helpful plugins for stylelint depending on code editor you use
1. [VSCode StyleLint](https://github.com/shinnn/vscode-stylelint)
2. [Sublime StyleLint](https://github.com/SublimeLinter/SublimeLinter-stylelint)
3. [WebStorm StyleLint](https://www.jetbrains.com/help/webstorm/using-stylelint-code-quality-tool.html)

### Important Rules
1. All files must use unix (LF) line endings
2. No more than 1 blank line outside of rules
3. No blank lines inside rules
4. `!important` is not allowed

 


