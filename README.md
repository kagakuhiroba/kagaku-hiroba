# マルチ天気予報

複数の気象機関の予報モデル（気象庁 / ECMWF / GFS / ICON）を横並びで比較できる天気予報アプリです。
[Open-Meteo](https://open-meteo.com/) の無料・APIキー不要のAPIを使用しています。

## 機能

- 地名・住所を検索して地点を選択
- 1時間ごと（24〜168時間）・1週間ごとをタブで切り替え表示
- 天気・気温・風速（風向）・降水確率・降水量を、ソースごとに並べて比較
- 気温はヒートマップ、降水確率は濃淡バーで視覚的に表示
- 16インチ前後のノートPC画面で見やすいよう、情報を高密度なテーブルにまとめて表示

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

データ出典: Weather data by [Open-Meteo.com](https://open-meteo.com/) (CC BY 4.0)
