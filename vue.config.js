const { defineConfig } = require("@vue/cli-service");
// /import path from "path";

module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "@": path.join(__dirname, "/src/componentes"), // 1. @の参照先の変更
  //     },
  //     extensions: [".js", ".vue", ".json", ".ts"],
  //   },
  // },
  // outputDir: "src/dist/resources/static", // 2. 出力先
  // pages: {
  //   index: {
  //     entry: "src/main.ts", // エントリーポイント
  //     template: "src/index.html", //3. index.htmlテンプレート
  //     filename: "index.html", // 省略可
  //   },
  // },
});
