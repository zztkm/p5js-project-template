# p5.js project template

[p5.js](https://p5js.org/) の開発を [TypeScript](https://www.typescriptlang.org/) で行うためのテンプレートリポジトリです。


## 初期セットアップ

事前に [Node.js](https://nodejs.org/ja/) のインストールが必要です。バージョンは14以上を想定しています。


以下のコマンドでプロジェクトの依存関係をインストールします。

```shell
yarn install
```


## 開発サーバー起動

```shell
yarn start
```

ブラウザで http://localhost:1234/ にアクセスします。


## ファイルなどの説明

- src
	- index.html
		- プロジェクトの root になります
- static
	- static 内に画像などを配置します

## Github Pages での公開手順

```shell
# コンテンツをビルド
yarn build

# Github Pages に公開
yarn deploy
```

## Contributing

皆さんからの自由な Issue や PR をお待ちしております！


## 関連リンク

- [web editor](https://editor.p5js.org/)
