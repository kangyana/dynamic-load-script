# dynamic-load-script

[![NPM Package][npm]][npm-url]

English | [简体中文](./README-zh_CN.md)

#### Dynamic loading (CDN / local script)

The aim of the project is to create an easy to use, lightweight, cross-browser, general purpose loading script library.

> Check the code in the `example` if there is a problem in use.
>
> [Try it in CodePen](https://codepen.io/kangyana/pen/rNYyPWB)
>

## Installation

### In a browser

You can use it at ./dist/*

```javascript
<script src="load-script.min.js"></script>
```

### Using npm

```bash
yarn add dynamic-load-script --save
```

## Usage

```javascript
import loadScript from 'dynamic-load-script';

loadScript('yourCDN')
  .then((res) => {
    // success...
  })
  .catch((err) => {
    // fail...
  });
```

## Cloning this repository

Cloning the repo with all its history results in a ~2 MB download. If you don't need the whole history you can use the `depth` parameter to significantly reduce download size.

```bash
git clone --depth=1 https://github.com/kangyana/dynamic-load-script.git
```

### Change log ###

[Releases](https://github.com/kangyana/dynamic-load-script/releases)

## License

[MIT](./LICENSE)

Copyright (c) 2022-present, kangyana


[npm]: https://img.shields.io/npm/v/dynamic-load-script
[npm-url]: https://www.npmjs.com/package/dynamic-load-script
