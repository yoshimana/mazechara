# Project TODOs

## Current Goal
- [x] 「まぜキャラ」キャラクター画像・背景写真 自然合成ツールの機能拡張、幾何学影ロジック修正、マニュアル・利用規約ページ新設、アプリアイコン・ファビコン制作の完了

## Tasks
- [ ] 【重要・後で実施】まぜキャラのクローラー許可・SEOインデックス解禁
  - [ ] `app-portal/robots.txt` から `Disallow: /app/mazechara/` を削除
  - [ ] `app-portal/sitemap.xml` に `mazechara` / `manual.html` / `terms.html` を再追加
  - [ ] `index.html`, `manual.html`, `terms.html` の `<meta name="robots" content="noindex, nofollow">` を削除
- [ ] 【後で実施】パスワード認証機能（Auth Gate Module）の削除
  - [ ] `index.html`, `manual.html`, `terms.html` の `[AUTH GATE MODULE]` ブロックを削除
- [x] 既存コードベース（index.html）の実装状況・合成ロジックの調査
- [x] 機能要件・Pro Mode（ライトラップ、リムライト、グレイン、被写界深度等）の設計および実装
- [x] 落ち影・接地影のアフィン変換幾何学（前後左右の傾き・スケール）の根本修正
- [x] キャラクターPNG読み込み時の余白ゼロ自動トリミング機能の実装
- [x] 背景写真からの自動マッチング解析アルゴリズム（明暗重心・勾配・コントラスト・環境光）の実装
- [x] スマホ向け2本指パン・ピンチズーム・ボトムシートUIの最適化
- [x] 使い方マニュアルページ（manual.html）の作成とクレジット表記
- [x] 利用規約・注意事項・AI利用方針・技術解説ページ（terms.html）の作成
- [x] 公式アプリアイコン（apple-touch-icon / SVG / PNG）およびファビコンの制作・設定
- [x] アプリ名「まぜキャラ」への統一表記およびUIクリーンアップ
- [x] 詳細馴染ませに周辺光量（暗/明/オフ）ビネット効果を追加
- [x] 背景ぼかし量の％単位化（最大5.0%・プリセット最大0.2%）

## Notes / Blockers
- **クローラー一時拒否中**: 現在は `noindex` および `robots.txt` で `Disallow: /app/mazechara/` に設定中。公開準備が整い次第、上記タスクで解禁を実施する。
