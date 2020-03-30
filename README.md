# VUE Simple Project
## Metadata

| Vue Simple Project | A vue simple template project for training |
| :--- | :--- |
| **Description** | This is a training project with the goal of learning the _basics_ of a [_vue_](https://vuejs.org) _simple_ project. |
| **Languages** | This project is written purely over [_HTML 5_](https://html.spec.whatwg.org/multipage/) and [_ES6 Javascript_](http://es6-features.org/),[_JSON_](https://www.json.org/json-en.html) | 
| **Techs & Tools** | This project involves the use of [_git_](https://git-scm.com/downloads), [_nodejs_](https://nodejs.org/) and its packages [_lite-server_](https://github.com/johnpapa/lite-server), [_@vue/cli_](https://cli.vuejs.org/) (with its _addon_ [_@vue/cli-init_](https://www.npmjs.com/package/@vue/cli-init). It also has required the use of _node_ packages [_webpack_](https://webpack.js.org/), [_webpack-cli_](https://www.npmjs.com/package/webpack-cli), [_@babel/core_](https://babeljs.io/), [_@babel/cli_](https://babeljs.io/docs/en/babel-cli), [_babel-loader_](https://www.npmjs.com/package/babel-loader) and [_@babel/preset-env_](https://babeljs.io/docs/en/babel-preset-env)
| **Thanks to** | [Juan Andrés Núñez (@wmedia)](https://github.com/juanwmedia), for [his wonderful podcast on youtube](https://www.youtube.com/playlist?list=PLM-Y_YQmMEqDS5u_O4xB651Mli0ShWyfh)  |
| **Credits** | [temple](https://github.com/temple) | 

## Summary
This project is supposed to be a SPA built on the top of an `index.html` file what loads the _CDN_ "production-ready" _Vue_ library using an `<script>` html tag.  
The `dist` folder may contain version of the project ready for deployment, which is compatible with old-browsers whose run _Javascript_ not compatible with _ES6_ version.  

### A brief of history
After [watching this video playlist](https://www.youtube.com/playlist?list=PLM-Y_YQmMEqDS5u_O4xB651Mli0ShWyfh) got the chance of starting a _vue_ project in a home development environment. So **I started!**.  

## How it was build

### _Tools_ and _Techs_
Before creating this project it was necessary to install several tools for handling _frontend_ processes.  

#### System requirements
Following requirements are those binaries what have been used for building and versionning projects like this one, so they are considered essential tools for a project build and deploy processes.   

1. **git**
  The git binary allows us to manage commits addressed to current repository.
  > `git` installation instructions are described in [it's official website](https://git-scm.com)  

1. **nodeJS**  
  This is an engine what comes bundled with `npm` and `npx` tools, what helped me during project creation.  
  > `nodejs` installation instructions are described in [it's official website](https://nodejs.org/)


#### Global requirements
Those requirements are tools what may be reused across projects, that's why they are installed system-wide by using "global" flags.

1. **vue-cli**  
  This "node package" provides the `vue` command what lets us invoke _vue_ instructions. It has to be installed using the `npm` tool as:  
  ```
  npm -g install @vue/cli
  ```
1. **vue-cli init**  
  Despite of this ain't in deed a package, it add `vue-cli` the capability to build a project skeleton based on a given template ([available as a github repo](https://github.com/vuejs-templates)). It has to be installed with:  
  ```  
  npm -g install @vue/cli-init
  ```
1. **lite-server**  
  As described by its author, _lite-server_ is a "simple customized wrapper around BrowserSync to make it easy to serve SPAs". So we will use it for development purposes, running this server in order to check our development results. It has to be installed with:  
  ```
  npm -g install lite-server
  ```

#### Project requirements
At last, those requirements match those tools intended to power-up our project. They could be considered global requirements but, it is strongly recommended to consider the medium and long term difficulties what should raise whenever a dependent project requires a requirement version update. In that case, all projects using one of these tools will be compromised unnecessarily; that's why installing them as a project dependencies let the project become autonomous with its dependencies version management.  

1. **webpack**  
  `webpack` is the engine what will help us packaging all javascript and additionally assets this project depends on, into optimized bundles. `webpack` may be installed with:  
  ```
  npm install webpack
  ```

1. **webpack-cli**  
  `webpack-cli` is a set of commands what help developers setting up a project `webpack` custom configuration. Webpack-cli may be installed with:  
  ```
  npm install webpack-cli
  ```

1. **babel**  
  `babel` is the package containing the core functions for the Babel transpiler, what will let us transform our _ES6 Javascript_ code onto previous versions, compatible with old browsers. It may be installed with:  
  ```
  npm install @babel/core
  ```

1. **bable-cli**
  `babel-cli` is the perfect mate for `babel`, because lets transpile files directly from the command line. It may be installed with:  
  ```
  npm install @babel/cli
  ```

1. **babel-loader**  
  `babel-loader` is a [loader](https://webpack.js.org/loaders/) for `webpack` what uses `@babel/core` and `@babel/cli` under the hood. We can assume `babel-loader` as a _loader_ what loads ES6 code and transpiles it to ES5 using _babel_. Installation goes as follows:  
  ```
  npm install babel-loader
  ```

1. **@babel/preset-env**  
  This package can be summarized as "a babel preset for each environment". In other words this mean that this package allows to use the latest javascript without needing to manage syntax transforms needed by _target environment_. _Target environments_ are just browsers and user-agents; so this package is capable to choose in an automated manner which syntax must be transpiled depending on the [scope of targets](https://github.com/browserslist/browserslist) set up. 

### Development from scratch
#### System and Global Requirements
These requirements, described above, have to be installed before starting this project. So, once `git` and `nodejs` are installed, and their binaries are added to `PATH` we can proceed with Global requirements using a terminal, with:

```
npm install -g @vue/cli @vue/cli-init lite-server
```

#### Project bootstrap
This project was created in a new empty folder by using `@vue/cli` and `@vue/cli-init` tools with:
```
vue init simple vue-simple
cd vue-simple
```

Later on, git may be initialized
```
git init
git remote add origin git@github.com:temple/simple-vue-project.git
```

