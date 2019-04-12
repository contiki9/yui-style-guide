
## まず最初に

## このリポジトリについて

`YUI-SERIES`のスタイルガイドのみ切り出したリポジトリです。

`YUI-SERIES`のDocumentはこちらです。
https://contiki9.github.io/yui-series/index.html

まだ作り中というかアルファ版くらいの温度感です。


### Style Guide Document

https://fractal.build/

### packageのインストール

```
npm i 
```

### ractalのCLIツールをインストール

ターミナルのどこからでもFractalが開始できるように、グローバル領域にFractalをインストールします。

```
npm i -g @frctl/fractal
```

## ローカル環境でウェブUIを確認する

http://localhost:3000  にアクセス可能になります。

`--sync`オプションを指定してBrowserSyncを起動しています。

BrowserSyncが動いていると、ドキュメントを更新した際にブラウザが自動でリロードされます。

```
fractal start --sync
```

## build

```
fractal build
```