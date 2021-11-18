# fxhash-r3f-template

This is a quickstart template based on create-react-app for creating fxhash tokens using react-three-fiber + typescript.

## Development

`npm i` or `yarn` to install dependencies.

`npm run start` - begin live-reload local development

### fxhash

The fxhash host exposes two useful functions, `fxhash` and `fxrand`, which are easily accessed via `fxhash.ts` which exports `fxhash()` and `fx-rand()`.

See the [fxhash guide](https://www.fxhash.xyz/articles/guide-mint-generative-token).

We also expose a method to register features of your token via `registerFeatures({"feat-a": true})` in the same module.

### index.html

The root `html` file (located in the `public/` folder) can be edited freely so long as you preserve the `fxhash` snippet and the filepaths.

## Packaging + Release

`npm run release` will build & package into `fxhash-release.zip`, ready to upload to the site.