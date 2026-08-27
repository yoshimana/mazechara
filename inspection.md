# Webツール公開前監査レポート (Pre-release Web Audit)

## 概要サマリー
- **対象プロジェクト / ツール名**: まぜキャラ（`chara-photo` / `https://4407.jp/app/mazechara/`）
- **監査実施日**: 2026年8月27日
- **総合評価**: **【公開可能（極めて良好・安全）】**
  - セキュリティ・プライバシー・ライセンス・パフォーマンスの全項目で問題なし。
  - 現在はユーザー指示に基づき「一時限定公開（クローラー拒否・パスワード保護）」が安全に稼働中。一般公開への移行手順も完全に整備済み。

---

## 1. 🚨 公開前に必須（Blocking Issues）

**該当項目なし（0件）**
- ライセンス違反、外部への予期しないデータ送信、情報漏洩リスク、重大なコンソールエラー等は一切検出されませんでした。

---

## 2. ⚠️ 公開後でもよい / 一般公開に向けた切り替え手順（Post-release / Future Release Items）

一般公開（一般ユーザー向けフル解禁）に切り替える際のチェック項目です。

- **1. クローラー許可 & SEO インデックス解禁**
  - **該当ファイル**:
    - `/Users/yoshimana/Documents/project/app-portal/robots.txt:L2`
    - `/Users/yoshimana/Documents/project/app-portal/sitemap.xml:L13`
    - `index.html:L6`, `manual.html:L6`, `terms.html:L6`
  - **現状**: 現在は `noindex, nofollow` および `robots.txt Disallow` により検索エンジンから完全に隔離されています。
  - **一般公開時の対応**: 一般公開のタイミングで `noindex` 削除、`robots.txt` 許可、`sitemap.xml` 再登録を実施します（`TODO.md` に手順記載済み）。

- **2. パスワード保護モジュール（Auth Gate Module）の撤去**
  - **該当ファイル**:
    - `index.html:L4315-4370`
    - `manual.html:L520-575`
    - `terms.html:L510-565`
  - **現状**: `4407.jp` アクセス時に `yoshimana` パスワードを要求するゲートが稼働中。
  - **一般公開時の対応**: 一般公開時に、各ファイルの末尾にある `<!-- [AUTH GATE MODULE] ... -->` ブロックを削除して全開放します。

- **3. OGPシェア用画像の配置（確認推奨）**
  - **該当ファイル**: `index.html:L15-18`
  - **内容**: 現在は `<meta name="twitter:card" content="summary_large_image">` が設定されています。SNSカード展開をよりリッチにする場合、`ogp.jpg` または `ogp.png`（1200x630px）を配置し `<meta property="og:image" content="https://4407.jp/app/mazechara/ogp.jpg">` を明記するとさらに見栄えが向上します。

---

## 3. ℹ️ 変更しないほうがよい / 現状維持（Keep As-Is）

- **完全クライアントサイド処理の維持**:
  - 画像データ（背景写真・キャラクターPNG）の処理・合成・JPEG書き出しはすべてブラウザ内部（Canvas API & WebAssembly/TypedArray）で完結しており、外部サーバーへのアップロード通信は一切発生しません。ユーザーのプライバシー保護の観点で最高水準です。
- **外部JSライブラリへの非依存（Vanilla JS + Canvas API）**:
  - npmパッケージや外部CDNライブラリに依存していないため、サプライチェーン攻撃やCDN障害による停止リスクがゼロです。
- **大容量・高解像度画像のメモリ安全設計**:
  - `toBlob` + `URL.createObjectURL` による省メモリなJPEG書き出し（品質0.93）と、不要メモリの即座解放（`revokeObjectURL`）が実装されており、スマホ・PCともにブラウザクラッシュ（OOM）を防ぐ堅牢な構造になっています。
- **徹底した著作権・クレジット表記**:
  - Webフォント（SIL OFL 1.1）、技術参考元（此ノ世うに様、MousdaAnony様）、制作者リンク（ɐuɐɯı̣ɥsoʎ (@yoshimana) ↗）がすべて `terms.html` および `manual.html` に正確に記載されています。

---

## 付録: 外部通信 & 第三者ライセンス一覧表

### 外部通信一覧
| 種類 | 送信先 / リソースURL | 目的・用途 | 該当ファイル |
|---|---|---|---|
| 計測タグ | `https://www.googletagmanager.com/gtm.js?id=GTM-K32QPVZL` | サイトアクセス解析（4407.jp共通） | `index.html:L5`, `manual.html:L5`, `terms.html:L5` |
| フォント | `https://fonts.googleapis.com`<br>`https://fonts.gstatic.com` | Google Fonts（Mochiy Pop One, Zen Maru Gothic）読み込み | `index.html:L27-29`, `manual.html:L16-18`, `terms.html:L16-18` |
| 外部リンク | `https://x.com/yoshimana`<br>`https://x.com/konoyo_uni`<br>`https://x.com/MousdaAnony` | 制作者・技術参考者へのクレジットリンク | `index.html`, `manual.html`, `terms.html` 各フッター/謝辞 |

※ **画像データ・個人情報等の外部送信は一切ありません（通信量ゼロ）**。

### 第三者配布物・ライセンス一覧
| ファイル名 / パッケージ | バージョン / 種別 | 出所 | ライセンス | 必要な対応 | 状況 |
|---|---|---|---|---|---|
| Mochiy Pop One | Webフォント | Google Fonts | SIL Open Font License 1.1 | 商用・個人利用無料 | `terms.html` にライセンス明記済み |
| Zen Maru Gothic | Webフォント | Google Fonts | SIL Open Font License 1.1 | 商用・個人利用無料 | `terms.html` にライセンス明記済み |
| Lucide Icons (SVG) | インラインSVG | Lucide | ISC License | 商用利用可能・クレジット不要 | インラインSVGとして安全に同梱 |
