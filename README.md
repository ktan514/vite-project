# vite-project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


___


# Setup manual.

## 1. 導入

**yarn**を使ってVueプロジェクを作成する。

```
$ vue create vite-project
```

質問の回答を入力しつつ作成を進める。  
プロジェクトに必要な機能にカーソル(">")を合わせて<space>キーでチェックを入れる。  
選択が終わったら<enter>を押下する。  
```
Vue CLI v5.0.4
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and
<enter> to proceed)
 (*) Babel
 (*) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 ( ) Vuex
 ( ) CSS Pre-processors
>(*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```
 
 プロジェクトで使用するVueのバージョンを選択する。
 本プロジェクトはVue3.xを使用する。
```
 Vue CLI v5.0.4
? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
> 3.x
  2.x
```

TypeScriptで`Class style`(y)と、`Object style`(n)のどちらを使用するかを選択する。  
最新環境での推奨はObject styleなので本プロジェクトではnを選択する。  
```
Vue CLI v5.0.4
? Use class-style component syntax? (y/N) N
```

Babelを使用する(y)か否(n)かを選択する。  
Babelはレガシーブラウザ環境との互換性を保管する。  
要否は特に決めてないがとりあえずyを選択する。  
```
Vue CLI v5.0.4
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n) Y
```

routerでHistoryモードを使用するためyを選択する。  
nを選択するとSharpモードになる。  
```
Vue CLI v5.0.4
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) Y
```

どれでも可。  
```
Vue CLI v5.0.4
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
> ESLint + Prettier
```

どちらでも可。  
```
Vue CLI v5.0.4
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to
proceed)
>(*) Lint on save
 ( ) Lint and fix on commit
```

Babel、ESLintなどの構成を個別ファイルに記載するかpackage.jsonにまとめて記載するか選択する。  
今回はpackage.jsonにまとめて記載する。  
```
Vue CLI v5.0.4
? Where do you prefer placing config for Babel, ESLint, etc.?
  In dedicated config files
> In package.json
```

ここまでの選択状況をプリセットに保存する(y)か否(n)か。  
```
Vue CLI v5.0.4
? Save this as a preset for future projects? (y/N) y
```

プリセットを保存する場合。  
プリセットの名称。("vite-project-create-profile")  
```
Vue CLI v5.0.4
? Save preset as: vite-project-create-profile
```

依存関係をインストールするときに使用するパッケージマネージャーを選択する。  
```
Vue CLI v5.0.4
? Pick the package manager to use when installing dependencies: (Use arrow keys)
> Use Yarn
  Use NPM
```

以上で設定は完了。  
ここまでの設定内容でインストールが開始される。
※`yarn install`も実装されている。
```
Vue CLI v5.0.4
✨  Creating project in C:\Users\admin\vite-project.
🗃  Initializing git repository...
⚙️  Installing CLI plugins. This might take a while...

yarn install v1.22.18
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...

success Saved lockfile.
Done in 40.63s.
🚀  Invoking generators...
📦  Installing additional dependencies...

yarn install v1.22.18
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
Done in 22.64s.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project vite-project.
👉  Get started with the following commands:

 $ cd vite-project
 $ yarn serve
```


## 2. プラグインの導入

*vuetify*プラグインを追加する。
```
$ vue add vuetify
```

ローカルリポジトリに未コミットの修正ファイルが残っていたら警告が出る。  
上書きされて問題ない場合はyを選択する。
```
 WARN  There are uncommitted changes in the current repository, it's recommended to commit or stash them first.
? Still proceed? (y/N) 
```

プラグインがインストールされる。
```
📦  Installing vue-cli-plugin-vuetify...

yarn add v1.22.18
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 5 new dependencies.
info Direct dependencies
└─ vue-cli-plugin-vuetify@2.5.0
info All dependencies
├─ interpret@1.4.0
├─ null-loader@4.0.1
├─ rechoir@0.6.2
├─ shelljs@0.8.5
└─ vue-cli-plugin-vuetify@2.5.0
Done in 4.84s.
✔  Successfully installed plugin: vue-cli-plugin-vuetify
```

インストールするプリセットを選択する。
```
? Choose a preset: 
  Configure (advanced) 
  Default (recommended) 
> Vite Preview (Vuetify 3 + Vite) 
  Prototype (rapid development) 
  Vuetify 3 Preview (Vuetify 3) 
```

インストールログ。
```
🚀  Invoking generator for vue-cli-plugin-vuetify...
📦  Installing additional dependencies...

yarn install v1.22.18
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 11.00s.
⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: vue-cli-plugin-vuetify
 vuetify  Discord community: https://community.vuetifyjs.com
 vuetify  Github: https://github.com/vuetifyjs/vuetify
 vuetify  Support Vuetify: https://github.com/sponsors/johnleider
 ```

 vuetifyプラグインをインストールするといくつかのファイルが追加されたり更新されたりしている。
 ```
[.] vite-project  
[.] ├─ public  
[U] │  └─ index.html  
[.] ├─ src  
[.] │  ├─ assets  
[U] │  │  └─ logo.svg  
[.] │  ├─ components  
[M] │  │  └─ HelloWorld.scss  
[.] │  ├─ plugins  
[U] │  │  ├─ vuetify.ts  
[U] │  │  └─ webfontloader.ts  
[.] │  ├─ styles  
[U] │  │  └─ _variables.scss  
[.] │  ├─ views  
[M] │  │  └─ HomeView.scss  
[M] │  ├─ App.vue  
[M] │  ├─ main.ts  
[U] │  └─ shims-vuetify.d.ts  
[U] ├─ index.html  
[M] ├─ package.json  
[U] ├─ vite.config.ts  
[M] └─ yarn.lock  
 ```
※[U]追加、[M]更新。
 
vite.config.tsはそのままではESLint+Prettierチェック違反やエラーなどが発生しているので修正する。
![設定01](https://user-images.githubusercontent.com/97750798/171030553-960bd9f7-990f-449c-8f29-7d45377d778d.png)
![設定02](https://user-images.githubusercontent.com/97750798/171031067-cfcbb033-6b29-43c1-938c-5e0143d7afc4.png)
![設定03](https://user-images.githubusercontent.com/97750798/171031102-14512b52-b8d3-4938-99d7-0d8e443b044f.png)

```
$ yarn add @vuetify/vite-plugin
```
