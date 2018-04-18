# antd-mobile with webpack

basic proj demo with webpack@2 and tree-shaking

### Install & Start

```shell
npm i  # npm i --save-dev webpack@2 webpack-dev-server@2 extract-text-webpack-plugin
npm start
```

open http://localhost:8000/

### Build

```sh
npm run build  # then see dist dir
# Note: you should remove `webpack-visualizer-plugin / webpack-bundle-analyzer` code in webpack.config.js file for production environment.
```

bundle analyzer tools:
[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) /
[webpack-visualizer-plugin](https://www.npmjs.com/package/webpack-visualizer-plugin)
(Note: [just for dist bundle file analyse](https://github.com/th0r/webpack-bundle-analyzer/issues/86))

web app    react + antd mobile   
部分改动成混合

github管理

前端项目          react + antd mobile   
移动项目 2个      
后台服务项目一个   springboot srping-data-jpa
管理系统一个      springmvc/bootstrap 