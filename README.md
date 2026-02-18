
# japan-kanko-dashboard

日本全国の都道府県・市区町村別観光来訪者数を可視化するウェブダッシュボードです。インタラクティブなチャートやデータビジュアライゼーションを通じて、観光統計の傾向を簡単に探索できます。

## デモ

- [観光者数ダッシュボード](https://code4fukui.github.io/japan-kanko-dashboard/)
- [観光者数 前年比](https://code4fukui.github.io/japan-kanko-dashboard/compprev.html)

## 主な機能

- 地域・都道府県・市区町村ごとの観光来訪者数をツリーマップや折れ線グラフで表示
- 前年比の来訪者数比較
- 地域・都道府県・市区町村・月ごとのデータ選択
- オープンデータを利用した最新統計
- 完全クライアントサイドで動作（サーバ不要）

## データソース

- [japan-kanko-stat 観光来訪者数 都道府県市区町村別](https://github.com/code4fukui/japan-kanko-stat)
- [デジタル観光統計オープンデータ（日本観光振興協会）](https://www.nihon-kankou.or.jp/home/jigyou/research/d-toukei/)
- [地方自治体コード](https://code4fukui.github.io/localgovjp/localgovjp-utf8.csv)
- [地域区分（統計局ホームページ）](https://www.stat.go.jp/data/shugyou/1997/3-1.html)

## 技術スタック

- HTML, JavaScript（ES Modules）
- [ApexCharts.js](https://apexcharts.com/) によるデータ可視化
- [js.sabae.cc](https://js.sabae.cc/) ユーティリティモジュール（CSV, ArrayUtil, Numなど）
- ビルドツールやフレームワーク不要

## 使い方

1. 本リポジトリをクローンまたはダウンロード
2. `index.html` をブラウザで開くとダッシュボードが表示されます
3. `compprev.html` で前年比チャートを閲覧できます

サーバ設定不要。全データはHTTP経由で公開ソースから取得されます。

## ファイル構成

- `index.html` — メインダッシュボードUIとロジック
- `compprev.html` — 前年比比較ツール
- `JAPAN_AREA.js` — 地域・都道府県定義
- `README.md` — 日本語プロジェクト概要
- `README.en.md` — 英語README
- `LICENSE` — MITライセンス

## コントリビューション

貢献歓迎！[GitHub](https://github.com/code4fukui/japan-kanko-dashboard)でIssueやPull Requestをお寄せください。

## ライセンス

MITライセンス。詳細は [LICENSE](LICENSE) をご参照ください。

## 作者

福野泰介（[GitHub](https://github.com/code4fukui)）
