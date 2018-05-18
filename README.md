# antd-mobile with webpack

basic proj demo with webpack@2 and tree-shaking

### Install & Start

```shell
npm i  
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

前端项目bj_web          react + antd mobile   
移动项目 2个 bj_android bj_ios      
后台服务项目一个   bj_server springboot srping-data-jpa
管理系统一个      springmvc/bootstrap 