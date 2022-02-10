# dynamic-load-script

[![NPM Package][npm]][npm-url]

[English](https://github.com/kangyana/dynamic-load-script/blob/master//README.md) | 简体中文

#### 动态加载CDN或本地脚本

该项目的目标是创建一个易于使用、轻量级、跨浏览器、通用的加载脚本库。  

> 使用中有问题查看 `example` 中的代码
>
> 有问题可以QQ联系 564469630，备注 dynamic-load-script
>
> [在 CodePen 中尝试一下](https://codepen.io/kangyana/pen/rNYyPWB)

## 安装

### 在.html中

你可以在 ./dist/* 找到并使用它

```javascript
<script src="load-script.min.js"></script>
```

### 使用 npm

```bash
npm install dynamic-load-script --save
```

### 使用 yarn

```bash
yarn add dynamic-load-script --save
```

## 用法

```javascript
import loadScript from 'dynamic-load-script';

loadScript('你的cdn')
  .then((res) => {
    // 成功后代码...
  })
  .catch((err) => {
    // 失败后代码...
  });
```

## 克隆这个库

克隆repo和它的所有历史结果在一个约2 MB的下载。 如果你不需要完整的历史记录，你可以使用“depth”参数来显著减少下载大小。  

```bash
git clone --depth=1 https://github.com/kangyana/dynamic-load-script.git
```

## 变更日志

[Releases](https://github.com/kangyana/dynamic-load-script/releases)

## 许可证

[MIT](https://github.com/kangyana/dynamic-load-script/blob/master/LICENSE)

Copyright (c) 2022-present, kangyana


[npm]: https://img.shields.io/npm/v/dynamic-load-script
[npm-url]: https://www.npmjs.com/package/dynamic-load-script
