# Tailwind CSS

## install section

- [BrowserSync](https://cly7796.net/blog/other/try-to-use-the-browsersync-to-start-the-local-server/)
- [BrowserSync template](https://akshaykhot.com/tailwind-with-browsersync/)

## init

```
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init
```

```js:tailwind.config.js
  content: ["./public/**/*.{html,js}"]
```

```json:package
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "npx tailwindcss -i ./src/style.css -o ./public/style.css --watch",
    "build": "npx tailwindcss -i ./src/style.css -o ./public/style.css",
    "browser-sync": "browser-sync start --server --files='./public/*.html'"
  }
```
