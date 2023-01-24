# Testing Rollup build

(and compare it with Webpack)

## Scripts

- Rollup build + serve + watch
  `npm run roll`
- Webpack build
  `npm run build`
- Webpack server
  `npm start`

### Bin script

- Rollup build + serve + watch

`node bin/build.js` (returns build output)

## Components

A component (imports MUI Button and MUI Slider)
B component (imports MUI Button)
C component (imports MUI Button and MUI Slider)

## Folders

Rollup uses 'dist' and 'public rollup'
Webpack - 'build' and 'public'

## \*

For Rollup importing from JSON files doesn't work out of the box. it needs @rollup/plugin-json plugin.
