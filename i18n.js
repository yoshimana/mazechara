(() => {
  const STORAGE_KEY = 'mazechara-language';
  const originals = new WeakMap();
  const text = {
    '画像のトリミング': 'Crop image', 'フリー': 'Free', '縦 / 横': 'Portrait / Landscape', 'スキップ': 'Skip', 'トリミングを適用': 'Apply crop',
    '左右反転': 'Flip horizontal', 'マニュアル': 'Manual', '設定パネル': 'Settings', 'BEFORE (未加工プレビュー)': 'BEFORE (original preview)',
    '2本指スワイプで画面移動': 'Use two fingers to move the view', '1本指:キャラ移動 / 2本指:画面パン・拡大': 'One finger: move character / Two fingers: pan and zoom',
    'サイズ': 'Size', 'Space+ドラッグで表示を移動': 'Space + drag to move the view', 'パネルを下げる': 'Hide panel', 'パネルを上げる': 'Show panel', 'パネルを隠す': 'Hide panel', 'パネルを開く': 'Show panel', '設定パネル': 'Settings',
    '画像素材のアップロード': 'Upload images', '背景写真': 'Background photo', 'キャラクター (透過)': 'Character (transparent)',
    '最大4,800万画素（50MB）対応。高解像度画像は端末内（ブラウザローカル）で快適な編集解像度に自動最適化されます。': 'Supports images up to 48 MP (50 MB). High-resolution images are optimized locally for smooth editing.',
    '背景から自動適応': 'Auto-match to background', '影の向き/濃さ・色温度・明暗を自動同期': 'Automatically matches shadow, color temperature, and brightness', '自動マッチ': 'Auto Match',
    'クイックプリセット': 'Quick presets', '標準': 'Standard', '晴天': 'Sunny', 'くもり': 'Cloudy', '夕暮れ': 'Sunset', '夜景': 'Night', '室内': 'Indoor',
    'キャラクター配置': 'Character placement', '位置 X': 'Position X', '位置 Y': 'Position Y', '環境光 & ライティング': 'Ambient light & lighting',
    '環境暗部色': 'Ambient shadow color', 'スポイト': 'Pick color', '環境明部色': 'Ambient highlight color', '環境光（乗算）': 'Ambient shadow (Multiply)',
    '光感・鮮やかさ（オーバーレイ）': 'Light & vibrance (Overlay)', '光源の向き': 'Light direction', '落ち影': 'Cast shadow', '影の傾き': 'Shadow tilt', '影のぼかし（拡散量）': 'Shadow blur (spread)',
    '◀ 左倒し': '◀ Tilt left', '中央': 'Center', '右倒し ▶': 'Tilt right ▶', '前後方向・長さ': 'Depth & length', '▲ 奥へ': '▲ Back', '真下': 'Straight down', '手前へ ▼': 'Forward ▼',
    '影の濃さ': 'Shadow opacity', '影のぼかし': 'Shadow blur', '影の歪み強度': 'Shadow distortion', '影の歪み角度': 'Distortion angle',
    '接地影 (足元の影)': 'Contact shadow (at feet)', '影の位置': 'Shadow position', '影のサイズ': 'Shadow size', 'スポットライト': 'Spotlight', 'ライト色': 'Light color', '位置を指定': 'Set position', '位置を決定': 'Confirm position', 'キャラとの重なり': 'Layer relative to character', 'キャラの後ろ': 'Behind character', 'キャラの前': 'In front of character',
    '濃さ': 'Opacity', 'ぼかし': 'Blur', '角度 X': 'Angle X', '角度 Y': 'Angle Y', '背景ボケ (被写界深度)': 'Background blur (depth of field)',
    'ぼかし量': 'Blur amount', '境界位置': 'Boundary position', 'ボケの滑らかさ': 'Blur smoothness', '詳細溶け込み': 'Advanced blending',
    '1. 色調・トーン補正': '1. Color & tone', 'キャラクター調整': 'Character', '背景写真調整': 'Background', '明るさ (露出)': 'Brightness (exposure)', 'コントラスト': 'Contrast', '彩度': 'Saturation',
    '色温度 (冷 ← → 温)': 'Color temperature (cool ← → warm)', '背景の明るさ': 'Background brightness', '背景のコントラスト': 'Background contrast', '背景の彩度': 'Background saturation', '背景の色温度 (冷 ← → 温)': 'Background temperature (cool ← → warm)',
    '2. ライトラップ (光の回り込み)': '2. Light wrap', '回り込み幅 (半径)': 'Wrap width (radius)', '明度閾値 (明るい背景のみ)': 'Brightness threshold (bright backgrounds only)',
    '3. リムライト (輪郭ハイライト)': '3. Rim light', 'リム光色': 'Rim light color', 'リム光強度': 'Rim light strength', 'エッジの太さ': 'Edge width', '光のぼかし': 'Light blur',
    '4. フィルムグレイン (質感粒子)': '4. Film grain', '適用対象': 'Apply to', '全体 (推奨)': 'All (recommended)', 'キャラ': 'Character', '背景': 'Background', 'グレイン強度': 'Grain strength', '粒子の粗さ': 'Grain size',
    '5. ビネット効果 (周辺光量)': '5. Vignette', '周辺光量 (暗 ← オフ → 明)': 'Vignette (dark ← off → bright)', 'オフ': 'Off', '効果範囲': 'Effect range', '境界のぼかし': 'Edge feather',
    '初期化': 'Reset', '画像を保存／共有': 'Save / Share image', '利用規約・注意事項': 'Terms & notices', '制作者・お問い合わせ:': 'Creator & contact:',
    '使い方マニュアル': 'Manual', 'アプリに戻る': 'Back to app', 'アプリホーム': 'App home', '技術参考・クレジット': 'Technique reference & credit', 'プロフィール・リンク集': 'Profile & links', 'スペシャルサンクス': 'Special thanks', '参考にした動画の投稿': 'Referenced video post',
    '増田あのに😶‍🌫️/顕なめ @MousdaAnony さまには、解説用動画のキャラクター素材をご提供いただきました。': 'Character assets for the tutorial video were kindly provided by 増田あのに😶‍🌫️/顕なめ @MousdaAnony.',
    'アクセス状況の把握には Google Analytics を利用しています。画像データや編集内容が計測サービスへ送信されることはありません。': 'Google Analytics is used to understand site traffic. Image data and editing content are not sent to analytics services.'
  };

  function normalized(value) { return value.replace(/\s+/g, ' ').trim(); }
  function translateNode(node) {
    const key = normalized(node.nodeValue);
    const value = text[key];
    if (!value) return;
    if (!originals.has(node)) originals.set(node, node.nodeValue);
    const prefix = node.nodeValue.match(/^\s*/)[0];
    const suffix = node.nodeValue.match(/\s*$/)[0];
    node.nodeValue = `${prefix}${value}${suffix}`;
  }
  function restoreNode(node) { if (originals.has(node)) node.nodeValue = originals.get(node); }
  function translateDocument(language) {
    document.documentElement.lang = language === 'en' ? 'en' : 'ja';
    document.querySelectorAll('[data-language-toggle]').forEach((button) => { button.textContent = language === 'en' ? '日本語' : 'English'; });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode(node) {
      return ['SCRIPT', 'STYLE'].includes(node.parentElement?.tagName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }});
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(language === 'en' ? translateNode : restoreNode);
    document.title = language === 'en' ? ({ index: 'MazeChara — Blend 2D Characters into Photos', manual: 'Manual — MazeChara', terms: 'Terms & Notices — MazeChara' }[document.body.dataset.page] || document.title) : document.body.dataset.titleJa;
  }
  function setLanguage(language) {
    localStorage.setItem(STORAGE_KEY, language);
    translateDocument(language);
    window.dispatchEvent(new CustomEvent('mazechara-language-change', { detail: { language } }));
  }
  function init() {
    document.body.dataset.titleJa = document.title;
    document.querySelectorAll('[data-language-toggle]').forEach((button) => button.addEventListener('click', () => setLanguage(localStorage.getItem(STORAGE_KEY) === 'en' ? 'ja' : 'en')));
    const language = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ja';
    translateDocument(language);
    window.dispatchEvent(new CustomEvent('mazechara-language-change', { detail: { language } }));
  }
  window.MazeCharaI18n = { init, setLanguage, text };
})();
