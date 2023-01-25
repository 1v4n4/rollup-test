# Testing Rollup build

(and compare it with Webpack)

## Scripts

- Rollup build + serve + watch
  `npm run roll`
- Webpack build
  `npm run build`
- Webpack server
  `npm start`

### Bin scripts

- Rollup build + serve + watch, single input/output

`node bin/build.js` (returns build output)

- Rollup build + serve + watch, multiple inputs/outputs

`node bin/build2.js` (returns build output)

## Components

A component (imports MUI Button and MUI Slider)
B component (imports MUI Button)
C component (imports MUI Button and MUI Slider)

## Folders

Rollup single input/output uses 'dist' and 'public-rollup'
Rollup multiple inputs/outputs uses 'dist2' and 'public-rollup2'
Webpack - 'build' and 'public'

## \*

For Rollup importing from JSON files doesn't work out of the box. it needs @rollup/plugin-json plugin.
