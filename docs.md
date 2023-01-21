- I didn't manage to create (public)/index.html automatically. There is @rollup/plugin-html plugin and it creates an index.html.file, but with an error:
  `Uncaught Error: createRoot(...): Target container is not a DOM element.
  React 3
  <anonymous> index.js:5
  <anonymous> bundle.js:7972`

- Importing from JSON files doesn't work out of the box. it needs @rollup/plugin-json plugin
