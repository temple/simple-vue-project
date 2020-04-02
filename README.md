# VUE Simple Project
## Metadata

| Vue Simple Project | A vue simple template project for training |
| :--- | :--- |
| **Description** | This is a training project with the goal of learning the _basics_ of a [_vue_](https://vuejs.org) _simple_ project. |
| **Languages** | This project is written purely over [_HTML 5_](https://html.spec.whatwg.org/multipage/) and [_ES6 Javascript_](http://es6-features.org/),[_JSON_](https://www.json.org/json-en.html) | 
| **Techs & Tools** | This project involves the use of [_git_](https://git-scm.com/downloads), [_nodejs_](https://nodejs.org/) and its packages [_lite-server_](https://github.com/johnpapa/lite-server), [_@vue/cli_](https://cli.vuejs.org/) (with its _addon_ [_@vue/cli-init_](https://www.npmjs.com/package/@vue/cli-init). It also has required the use of _node_ packages [_webpack_](https://webpack.js.org/), [_webpack-cli_](https://www.npmjs.com/package/webpack-cli), [_@babel/core_](https://babeljs.io/), [_@babel/cli_](https://babeljs.io/docs/en/babel-cli), [_babel-loader_](https://www.npmjs.com/package/babel-loader),  [_@babel/preset-env_](https://babeljs.io/docs/en/babel-preset-env) and [_vue-loader_](https://www.npmjs.com/package/vue-loader)
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
1. **babel preset-env**  
  This package can be summarized as "a babel preset for each environment". In other words this mean that this package allows to use the latest javascript without needing to manage syntax transforms needed by _target environment_. _Target environments_ are just browsers and user-agents; so this package is capable to choose in an automated manner which syntax must be transpiled depending on the [scope of targets](https://github.com/browserslist/browserslist) set up. Installation goes as follows
    ```
    npm install @babel/preset-env
    ```
1. **babel-loader**  
  `vue-loader` is a [loader](https://webpack.js.org/loaders/) for `webpack` what uses `@vue/component-compiler-utils` under the hood. We can assume `vue-loader` as a _loader_ what loads _Vue's SFC_ code and compiles it to Vanilla Javascript. Installation goes as follows:  
    ```
    npm install vue-loader
    ```
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

Later on, git may be initialized, and remote master branch have to be created and tracked by local master branch
```
git init
git remote add origin git@github.com:temple/simple-vue-project.git
git add README.md
git commit -m "Initial README.md"
git push --set-upstream origin master
```

#### Development tools test
Because `lite-server` has been the chosen server for testing the project, we should consider creating a [`bs-config.json` file](https://www.browsersync.io/docs/options) as told in [`lite-server` github page](https://github.com/johnpapa/lite-server#custom-configuration) once the server is tested

This file should contain code [like this](../5e5e4e7/bs-config.json):
```
{
  "files": [ "./**/*.{html,htm,css,js,mjs}" ],
  "watchOptions": { "ignored": "node_modules" }
}
```

`lite-server` has to be run this way, from project root folder:
```
npx lite-server
```

After that, the file may become this [version](../8e0b972/bs-config.json)  

#### Project dependencies provision
Having our environment ready for development, the last set of tools we might acquire are the above related tools the following way:
```
npm install webpack webpack-cli @babel/core @babel/cli babel-loader @babel/preset-env
```

#### Main entry Module
Because we used `@vue/cli` to create an `index.html` file [which loads the _vue_ javascript library](../5ae524f/index.html#L5) and includes a sample _Vue_ application, we may want to develop a main javascript module using a [_Vue_ instance](https://vuejs.org/v2/guide/instance.html) which may replace the inline code in that `index.html` file.  
For just conventions, we will call our main entry module `main.mjs`, where `mjs` is recommended for those javascript files containing an ES6 javascript module.  
So we proceed in `main.js` with some [initial code copied from index.html](../713540a/src/main.mjs).  

#### Vue Component
Because our application is using some data wrapped with html tags, such `{{ greeting }}` (which is wrapped with an `<h1>` tag), we wonder to use a [_Vue component_](https://vuejs.org/v2/guide/components.html) instead of it. Our component will be [registered locally](https://vuejs.org/v2/guide/components-registration.html#Local-Registration) in our _Vue instance_.  
So, we've got an adapted [`index.html` file](../2a59468/index.html#L10) including a `<greetings>` tag for our new component, [which has beed created](../2a59468/src/components/greetings.mjs) and imported in our [new version of `main.mjs` file](../2a59468/src/main.mjs#L1), from where [its registration inside our _Vue instance_ is done](../2a59468/src/main.mjs#L5-L7), by the `components` key.  
Finally, in order to let the browser understand the `import` directive, which belongs to the "_modular ES6 Javascript world_", we have to add the attribute `type` to the `<script>` tag at the end of [our `index.html`](../2a59468/index.html#L33).

#### Webpack and Babel enter the game

##### Minimal Babel Configuration
If we think our project has reached a stage that allows us deploy a pre-release, then we should consider building a distribution able to run in the greater part of browsers.  
That's why we may use _Babel_ transpiler and it's options, [taken from official documentation](https://babeljs.io/docs/en/options), into a [new project file called `babel.config.js`](../6249832/babel.config.js), as [recommended by _Babel_ official sources](https://babeljs.io/docs/en/configuration).  
This is how our file may look like for the first time:  
```
module.exports = function(api){
  api.cache(true);

  const presets = ["@babel/preset-env"];
  const plugins = [];

  return {
    presets,
    plugins
  }
}
```

The idea behind the scene is to specify minimal configuration options according to current project needs, and it comes from the ["Babel Configuration Examples" repo](https://github.com/babel/babel-configuration-examples).  
When just using the `@babel/preset-env` preset, _Babel_ will transpile our individual javascript files from `ES6` version onto `ES5`.  
  
So, let's check it. If we run..
```
./node_modules/.bin/babel --out-dir dist/ES5 ./src
```
..[our files will be transpiled in the `dist/ES5` folder](../../commit/61657f7).

##### Minimal Webpack Configuration
As we can see when checking generated [transpiled files](../../commit/61657f7), they still use the `require` statement which is not a part of [`ES5` specification](https://es5.github.io/).  
So, **¿how could we face this?**  
  
As [explained in this article](https://blog.jakoblind.no/babel-preset-env/) when dealing with several module files what have to be packaged into a single bundled javascript, tools such [_Webpack_](https://webpack.js.org/), [_Rollup_](https://rollupjs.org/) or [_Parcel_](https://parceljs.org/) are required to succeed.  
  
In our case _webpack_ has been the chosen one, because is so popular currently.  
_Webpack_ needs a brief configuration to get ready for "bundling". This configuration initially may look like this:
```
const path = require('path');

module.exports = {
  entry: './src/main.mjs',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'es6.bundle.js'
  }
};
```
Previous configuration is stored in the main _webpack_ configuration file, [called `webpack.config.js`](../1da5732/webpack.config.js), as stated in the [official _webpack_ documentation](https://webpack.js.org/concepts/).  
  
After running webpack with:
```
./node_modules/.bin/webpack
```
  
Our bundle is ready as [`dist/es6.bundle.js`](../dc6dce8/dist/es6.bundle.js).

**BUT, ¿DOES IT MAKE OUR APPLICATION WORK WITH OLDER BROWSERS, EVEN WITH MODERN ONES?**

##### Checking the bundle
Arrived here, we got a `dist/es6.bundle.js` javascript file with our application. We may wonder to test it using `lite-server`, but have to use it from our `index.html` [applying this minor change](../../commit/9b4ca3e).  
After that we can launch `npx lite-server` and test manually our application in different browsers.

##### Placing it all together
Our project seem to run correctly in common browsers, event MS IExplorer 11. That's why we are not using any other ES6 feature rather than the use of `import`, `export` or `require` directives.  
If we really wonder to check our project can include [ES6 features](http://es6-features.org/) having no worries about it can be run on old browsers, our challenge is to effectively add some of this features in our javascript files before bundling.  
By the way, in our `src/main.mjs` there is a variable we can declare with `let` operator instead of `var`, and there is an anonymous function we can declare using the _arrow function_ syntax. [Here is the result](../../commit/26c7cac).    
If we bundle our application again using webpack, [some slightly differences](../../commit/2a51b9a) will appear on `es6.bundle.js` file. These differences are just the features we've used in the `src/main.mjs`.  
  
If we test the result in old browsers, such IE Explorer 11, we will see syntax errors appear on the console.  
Then, we must combine _webpack_ and _babel_ facilities in order to get a bundle compatible with browsers not supporting ES6.  
  
Then we need to use `babel-loader`, which is a "babel module loader for webpack". Using this _loader_ is easy as adding some webpack configuration entries:  
```
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```
  
Previous entries, are based on _Usage_ section in the [_babel-loader_ front documentation page at github.com][babel-loader-usage], and fit perfectly our needs!
[babel-loader-usage]: https://github.com/babel/babel-loader#usage
  
Then, we can adjust our `webpack.config.js` introducing [this "module" entry](../d14dd48/webpack.config.js#L9-L22), and changing the [_output filename_](../d14dd48/webpack.config.js#L7). After that, a minimal change is required in our [`index.html` file](../d14dd48/index.html#L34), using the [new `es5.bundle.js`](../d14dd48/dist/es5.bundle.js) instead of `es6.bundle.js`.

##### Checking the ES5 bundle & removing trash
If we check our new bundled file by testing `index.html` with `lite-server`, we may see our project serving a _Vue_ application.  
Then, we won't need (by the moment) our `es6.bundle.js`, `babel.config.js` and `/ES5` javascript files, and [remove them from the project](../../commit/3767386) with `git`, this way:  

```
git rm dist/es6.bundle.js babel.config.js dist/ES5/main.js dist/ES5/components/greetings.js
```

#### Vue Single File Component
As described in the project's summary, our intention is to build a SAP using Vue components. If we take an outlook at [Vue documentation](https://vuejs.org/v2/guide/single-file-components.html), it is recommended to use SFCs (Single-File Components) to face minor-sized application common problems.  

So let's [start renaming](../../commit/0591b8d) our `greetings.mjs` component file onto `greetings.vue`, with:
```
git mv src/components/greetings.mjs src/components/greetings.vue
```
  
After that, [our component code must suffer an inner conversion](../63c591a/src/components/greetings.vue#L1-L9), wrapping all its javascript code with a `<script>` tag, this way:  
```
<script>
const GreetingComponent = {
    template: `
    <h1>{{ this.$parent.greeting }}</h1>
    `
}

export default GreetingComponent
</script>
```

Then, our `main.mjs` has to update its corresponding [import instruction](../8a096c0/src/main.mjs#L1).

#### Loading our SFC
As explained in the [`vue-loader` documentation](https://vue-loader.vuejs.org/#what-is-vue-loader) it is necessary to use this specific _loader_.  
_vue-loader_ is known to depend on a _NodeJS_ enviroment and is strictly designed for _webpack_; but initially, we want to check our project without the need of _webpack_.  

##### Loading via http-vue-loader
Therefore there is an **unofficial** version of _vue-loader_ called `http-vue-loader` ([visit here its github repo](https://github.com/FranckFreiburger/http-vue-loader)), what frees us from building our component and can help us check our SFC component is running.

So we need just a [few changes in our `index.html`](../../commit/e81eaa6#diff-eacf331f0ffc35d4b482f1d15a887d3b),  in [our `greetings.vue`](../e81eaa6/src/components/greetings.vue#L8) and also to [our `main.mjs`](../../commit/e81eaa6#diff-2679527f6e24e0cc7252aa29f829f274). 

##### Loading via vue-loader
Once checked (via `lite-server`) our component still working, is time to think officially (by using `vue-loader` instead of `http-vue-loader` which ain't official at all).  
  
Our first step must be installing `vue-loader` along with `vue-template-compiler` ([As stated in the _Vue_ official documentation](https://vue-loader.vuejs.org/guide/#installation)) this way:  
```
npm install vue-loader vue-template-compiler
```

If we read the advisory from _Vue_'s _vue-loader_ page saying .. 
> _**every time you upgrade `vue` in your project, you should upgrade `vue-template-compiler` to match it as well**_

.. we'll soon notice that we **must** check which version has our new `vue-template-compiler`. Let's  check this way:  
```
npm list vue-template-compiler
```

Previous command revealed us the `vue-template-compiler` version in use.  
> At the time of writing these lines it was `2.6.11`
  
So following the advisory recommendations we must ensure that match between project's `vue` version in use and `vue-template-compiler`.  
In our case, our need is to force the `<script>` tag in `index.html` to acquire that matching version.
It is easy as following `unpkg.com/vue` with `@{version number}`; so we've [updated our `index.html`](../5f1c948/index.html#L5).


After that, we can include `vue-loader` in the _bundling_ rules performed by _webpack_. This following entry has to be placed as a _module rule_ [in the `webpack.config.js` file](../f5457d8/webpack.config.js#L21-L27), according to [_vue-loader_ official docs](https://vue-loader.vuejs.org/guide/#webpack-configuration):
```
  {
    test: /\.vue$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'vue-loader'      
    }
  }
```

and also the following _plugin_ [must be loaded too](../6c979eb/webpack.config.js#L32-L34), in order to apply the rest of matching rules to javascript code comming from _vue's component compilation_:
```
 new VueLoaderPlugin()
```

This plugin requires the import of `vue-loader/lib/plugin` which must be [added as an instruction](../6c979eb/webpack.config.js#L2) at the beginning of `webpack.config.js`.  
  
Once we have included `vue-loader` to our _webpack bundling process_, we don't  longer need the old `http-vue-loader` code remains. So we will [recover our old code on `src/main.mjs`](../../commit/3ff3938#diff-2679527f6e24e0cc7252aa29f829f274).

Also, previous [modifications done in `index.html` are no longer necessary](../../commit/2291c0b#diff-eacf331f0ffc35d4b482f1d15a887d3b). Furthermore, we may disable the use of `src/main.mjs` in favor of `dist/es5.bundle.js`.

#### Separating concerns in our SFC
As explained perfectly in the [official _Vue_ documentation](https://vuejs.org/v2/guide/single-file-components.html#What-About-Separation-of-Concerns), Single File Components carry a separation of concerns by [dividing in language blocks the code what a SFC is compound of](https://vue-loader.vuejs.org/spec.html).  

In consequence [few minor changes](../../commit/0127af3#diff-c60fbef0c98b7e426a482e8e0e37fec2) are desirable in our _greetings_ SFC, including reusing `exports` instead of `module.export` as we don't need `http-vue-loader` anymore (which required it).

#### Major improvements in our project

##### Reducing Vue footprint
Currently we are using the full production _Vue_ library. But, **is it really necessary?**.  
The answer is **NO**, as we can deduce from this [README explanations](https://unpkg.com/browse/vue@2.6.11/dist/README.md).  
We might have enough just with the production _runtime_ version of _Vue_ library file.  
Then, _Vue_'s footprint [may be reduced by replacing our `<script>` source](../8995183/index.html#L5) in the `index.html`.

But, as [warned in the Vue's API `el` entry](https://es.vuejs.org/v2/api/#el):
> If this option is available at instantiation, the instance will immediately enter compilation; otherwise, the user will have to explicitly call `vm.$mount()`` to manually start the compilation.

Moreover documentation states that:
> If neither render function nor template option is present, the in-DOM HTML of the mounting DOM element will be extracted as the template. In this case, Runtime + Compiler build of Vue should be used.

So, we may refuse using `el` option when creating the _Vue_ instance.
In this case, there is a unique exit way, which passes by calling `$mount` after [creating the instance in our `main.mjs`](../a13bfe6/src/main.mjs#L20).  
But this change is not enough because we haven't defined how our application has to be rendered. Therefore,[`render` option may be defined](../a13bfe6/src/main.mjs#L14) this way:
```
  render(h){ return h(App);}
```

With this previous `render` definition, [according to _Vue_'s documentation](https://vuejs.org/v2/guide/render-function.html), we're telling _Vue_ to use a component called _App_ for application rendering.  
That's why we won't use anymore the _html_ code inside the `<div id="app">` at the `index.html` for rendering our application, because ain't no longer possible due the new _Vue_ build we are using currently (which is not able to compile that _html_ at runtime).  
  
Then, in order to retain the original _html_ code which was used to render our application, [we have to move it](../../commit/7c64223#diff-eacf331f0ffc35d4b482f1d15a887d3b) into a [new _Application SFC_ called `App.vue`](../7c64223/src/App.vue#L2-L25).  
This new _SFC_ may have the original _html_ code inside its `<template>` part, and need the following `javascript` code:  
```
<script>
export default {
  name: "App"
}
</script>
```

###### Accessing "components" from new App SFC
But because our `App.vue` _html_ code (inside `<template>`) [includes the _greetings SFC_ component tag](../7c64223/src/App.vue#L4) (`<greetings>`) we need to make it available to our new _App SFC_.  
There are two different approaches:  
1. Pass the component from `main.mjs` _Vue_ instance to _App_ by using properties ([learn about on the official _Vue_'s website](https://vuejs.org/v2/guide/components-props.html))
1. Access to _Vue_ instance `components` property from _App_ component.

I our case, and just for learning purposes, second option is chosen.  
Then, next question is **How?**.  
Answer is easy, once you've read about the [_Vue_'s instance _lifecycle_](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram) (which also applies to _Vue_'s components and _SFC_s).  
Now we know [we can use _lifecycle hooks_ such `created`](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) for running code after our component instance is created, what will happen after _Vue_'s instance creation, as we'll discuss below.  
  
Consequently, we [may define a `created` function](../7c64223/src/App.vue#L30-L32) which feeds our _App_ component `components` property with the _Vue_ instance `components` one using the following code:  
```
<script>
export default {
  name: "App",
  created(){
    this.$options.components = this.$parent.$options.components
  }
}
</script>
```

> In previous snippet, `created` function syntax allows use to refer `this` expecting it to be the _App_ component itself rather than _node_'s `Module` or _browser_'s `Window` objects.

Finally, our `App.vue` _html_ code what has some [_Vue_'s template syntax](https://vuejs.org/v2/guide/syntax.html) which comes from `index.html` [require it's code references to be updated](../../commit/7c64223#diff-c60fbef0c98b7e426a482e8e0e37fec2) by using the same kind of _chain_ what has been used in the `created` function.

###### Passing "components" to new App SFC
I we want to try the first approach, "_Pass the component from `main.mjs`_  Vue _instance to_ App _by using properties_", the first thing what comes into mind is using properties to pass values from top-level _Vue_'s object instances to their children.  

In our application the bottom-level instance is the _Greetings SFC_. And this component is using `this.$root.greeting` reference in its `<template>` code for accessing the _greeting_ data defined in `main.mjs`.  
Under current approach, this is not what we pursuit. Our steps may pass across defining necessary properties for the component to be rendered autonomously.  
Then a [new `greeting` property may be defined in `greetings.vue`](../cf0a973/src/components/greetings.vue#L7-12) this way:
```
  props:{
      "greeting":{
          required: true,
          type: String
      }
  }
```
And therefore, [its template may use this new property](../cf0a973/src/components/greetings.vue#L2) instead of accessing _Vue's_ data.

Because of our _Greetings_ component may be considered plenty autonomous, ¿how can `main.mjs` pass to `App.vue` in a formal manner?  
One possible answer in by [using _slots_](https://vuejs.org/v2/guide/components-slots.html), whose allow components receive _html_ and even _components_ as content to be rendered in their `<templates>`.  
  
If we explore this way of passing a component, we should open an slot on _App SFC_ template where previously the `<greetings>` tag was. So, [this tag would be replaced with](../76f00ce/src/App.vue#L4):
```
<slot name="greetings"></slot>
```
  
Furthermore, because our _App SFC_ will receive the _Greetings_ component via _slot_, we no longer need to initialize the `components` option at creation time. So [`created` function has to be removed](../../commits/76f00ce#diff-ea994a51b0d9884f4fc046eca11a5c99).  
  
Finally, the remaining challenge it to effectively pass the component from _Vue_'s main instance to the _App SFC_. This task might be performed when rendering _Vue_, because we are not providing any main template.  
That's why our `render` function may now receive [an optional second argument](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth), containing the slot what we are gonna fill.  
This is how `render` looks like now:  
```
  render(h){
    let greeting = this.greeting
    return h(App, {
                    scopedSlots:{
                      greetings: function(){
                        return h(greetings,{props:{greeting:greeting}})
                      }
                  }
            });
  },
```

As we can see, [what in the past was just `return h(App)`, has evolved onto a 2 arguments call](../../commit/d055c21#diff-2679527f6e24e0cc7252aa29f829f274), where the second argument refers the `<slot>` named greetings and provides a function for filling it. This function creates a _Greetings SFC_ and passes the `greeting` onto the component `greeting` property.