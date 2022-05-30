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



