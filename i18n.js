(() => {
  const STORAGE_KEY = 'mazechara-language';
  const originals = new WeakMap();
  const text = {
    '画像のトリミング': 'Crop image', 'フリー': 'Free', '縦 / 横': 'Portrait / Landscape', 'ゴミ除去': 'Remove debris', '除去サイズ': 'Removal size', 'キャンセル': 'Cancel', 'トリミングを適用': 'Apply crop',
    '左右反転': 'Flip horizontal', 'マニュアル': 'Manual', '設定パネル': 'Settings', 'マッチ': 'Match', 'オートフィット': 'Auto fit', 'キャラクターをロック': 'Lock character', 'キャラクターロックを解除': 'Unlock character', 'BEFORE (未加工プレビュー)': 'BEFORE (original preview)',
    '2本指スワイプで画面移動': 'Use two fingers to move the view', '1本指:キャラ移動 / 2本指:画面パン・拡大': 'One finger: move character / Two fingers: pan and zoom',
    'サイズ': 'Size', 'Space+ドラッグで表示を移動': 'Space + drag to move the view', 'パネルを下げる': 'Hide panel', 'パネルを上げる': 'Show panel', 'パネルを隠す': 'Hide panel', 'パネルを開く': 'Show panel', '設定パネル': 'Settings',
    '画像素材のアップロード': 'Upload images', '背景写真': 'Background photo', 'キャラクター (透過)': 'Character (transparent)',
    'キャラクター画像では、ヘッダーの「ゴミ除去」で周囲の孤立した文字・記号・小さな要素を除去できます。': 'For character images, use Remove debris in the header to remove isolated text, symbols, and small surrounding elements.',
    '「除去サイズ」を上げるほど、大きな孤立要素やキャラに近い線まで除去されます。': 'Increasing Removal size removes larger isolated elements and lines closer to the character.',
    '100％では強く除去されるため、必要な髪飾りやエフェクトまで消えていないか確認してください。': 'At 100%, removal is aggressive. Check that required accessories and effects have not been removed.',
    '「ゴミ除去」をもう一度押すと、除去前の状態へ戻せます。': 'Press Remove debris again to restore the original image.',
    '最大4,800万画素（50MB）対応。高解像度画像は端末内（ブラウザローカル）で快適な編集解像度に自動最適化されます。': 'Supports images up to 48 MP (50 MB). High-resolution images are optimized locally for smooth editing.',
    '背景から自動適応': 'Auto-match to background', '影の向き/濃さ・色温度・明暗を自動判定': 'Automatically detects shadow, color temperature, and brightness', '自動マッチ': 'Auto Match',
    'クイックプリセット': 'Quick presets', '標準': 'Standard', '晴天': 'Sunny', 'くもり': 'Cloudy', '夕暮れ': 'Sunset', '夜景': 'Night', '室内': 'Indoor',
    'キャラクター配置': 'Character placement', '位置 X': 'Position X', '位置 Y': 'Position Y', '環境光 & ライティング': 'Ambient light & lighting',
    '環境暗部色': 'Ambient shadow color', 'スポイト': 'Pick color', '環境明部色': 'Ambient highlight color', '光の強さ': 'Light intensity',
    '光源の向き': 'Light direction', '落ち影': 'Cast shadow', '影の傾き': 'Shadow tilt', '影のぼかし（拡散量）': 'Shadow blur (spread)',
    '左': 'Left', '奥': 'Back', '手前': 'Front', '右': 'Right', '影の長さ': 'Shadow length', '影の遠近感': 'Shadow perspective',
    '影の濃さ': 'Shadow opacity', '影のぼかし': 'Shadow blur', '影の歪み強度': 'Shadow distortion', '影の歪み角度': 'Distortion angle',
    '接地影 (足元の影)': 'Contact shadow (at feet)', '影の位置': 'Shadow position', '影のサイズ': 'Shadow size', 'スポットライト': 'Spotlight', 'ライト色': 'Light color', '位置を指定': 'Set position', '位置を決定': 'Confirm position', 'キャラとの重なり': 'Layer relative to character', 'キャラの後ろ': 'Behind character', 'キャラの前': 'In front of character',
    '濃さ': 'Opacity', 'ぼかし': 'Blur', '角度 X': 'Angle X', '角度 Y': 'Angle Y', '背景ボケ (被写界深度)': 'Background blur (depth of field)',
    'ぼかし量': 'Blur amount', '境界位置': 'Boundary position', 'ボケの滑らかさ': 'Blur smoothness', '詳細設定': 'Advanced settings',
    '1. 色調・トーン補正': '1. Color & tone', 'キャラクター調整': 'Character', '背景写真調整': 'Background', '明るさ (露出)': 'Brightness (exposure)', 'コントラスト': 'Contrast', '彩度': 'Saturation',
    '色温度 (冷 ← → 温)': 'Color temperature (cool ← → warm)', '背景の明るさ': 'Background brightness', '背景のコントラスト': 'Background contrast', '背景の彩度': 'Background saturation', '背景の色温度 (冷 ← → 温)': 'Background temperature (cool ← → warm)',
    '3. ライトラップ (光の回り込み)': '3. Light wrap', '回り込み幅 (半径)': 'Wrap width (radius)', '明度閾値 (明るい背景のみ)': 'Brightness threshold (bright backgrounds only)',
    '2. リムライト (輪郭ハイライト)': '2. Rim light', 'リム光色': 'Rim light color', 'リム光強度': 'Rim light strength', 'エッジの太さ': 'Edge width', '光のぼかし': 'Light blur',
    '4. フィルムグレイン (質感粒子)': '4. Film grain', '適用対象': 'Apply to', '全体 (推奨)': 'All (recommended)', 'キャラ': 'Character', '背景': 'Background', 'グレイン強度': 'Grain strength', '粒子の粗さ': 'Grain size',
    '5. ビネット効果 (周辺光量)': '5. Vignette', '周辺光量 (暗 ← オフ → 明)': 'Vignette (dark ← off → bright)', 'オフ': 'Off', '効果範囲': 'Effect range', '境界のぼかし': 'Edge feather',
    '初期化': 'Reset', '画像を保存／共有': 'Save / Share image', '利用規約・注意事項': 'Terms & notices', '制作者・お問い合わせ:': 'Creator & contact:',
    '使い方マニュアル': 'Manual', 'アプリに戻る': 'Back to app', 'アプリホーム': 'App home', '技術参考・クレジット': 'Technique reference & credit', 'プロフィール・リンク集': 'Profile & links', 'スペシャルサンクス': 'Special thanks', '参考にした動画の投稿': 'Referenced video post',
    '機能別 詳細ガイド': 'Detailed feature guide',
    '1. 画像の読み込み・トリミング・ゴミ除去': '1. Upload, crop, and debris removal',
    '背景写真と透過キャラクター画像を読み込み、使用範囲を決めます。': 'Upload a background photo and transparent character image, then choose the area to use.',
    '背景写真はJPEG・PNG・WebP、キャラクターは透過PNGがおすすめです。': 'Use JPEG, PNG, or WebP for backgrounds. Transparent PNG is recommended for characters.',
    '「ゴミ除去」を押すと「除去サイズ」が表示されます。': 'Press Remove debris to show the Removal size slider.',
    '数値を上げるほど、大きくてキャラに近い孤立要素まで除去します。': 'Higher values remove larger isolated elements closer to the character.',
    'ボタンをもう一度押すと元画像へ戻ります。': 'Press the button again to restore the original image.',
    '100％は強力です。必要な髪飾り・武器・エフェクトが残っているか確認してください。': '100% is aggressive. Check that required accessories, weapons, and effects remain.',
    '2. 自動マッチとクイックプリセット': '2. Auto Match and quick presets',
    '背景の明暗・色温度・光の傾向から、キャラクターの光と影をまとめて調整します。': 'Adjust character lighting and shadows from the background brightness, color temperature, and light direction.',
    '最初に「自動マッチ」を押し、全体の基準を作ります。': 'Start with Auto Match to establish a baseline.',
    '雰囲気を変えたい場合は「晴天」「夕暮れ」「夜景」などを選びます。': 'Choose Sunny, Sunset, Night, or another preset to change the mood.',
    'プリセット後も、各スライダーで細かく調整できます。': 'You can fine-tune every slider after applying a preset.',
    '自動判定は目安です。影の方向や濃さが合わない場合は手動で調整してください。': 'Automatic analysis is a starting point. Manually adjust shadow direction and opacity when needed.',
    '3. キャラクター配置とプレビュー操作': '3. Character placement and preview controls',
    'キャラクター自体の配置と、編集画面の見え方は別々に操作できます。': 'Character placement and the editor view are controlled separately.',
    '「サイズ」「位置X」「位置Y」は完成画像内のキャラクターを変更します。': 'Size, Position X, and Position Y change the character in the final image.',
    '下部の青いスライダーはプレビュー表示だけを拡大・縮小します。': 'The blue slider at the bottom changes only the preview zoom.',
    '四隅のオートフィットボタンは、横を背景中央、縦をキャラ中央に合わせます。': 'Auto fit centers horizontally on the background and vertically on the character.',
    '鍵ボタンはキャラクターの移動とサイズ変更だけをロックします。': 'The lock button locks only character movement and resizing.',
    '4. 落ち影': '4. Cast shadow',
    '足元を基準に、地面へ伸びる影の方向と形を作ります。': 'Set the direction and shape of the ground shadow from the character feet.',
    '「影の傾き」は左0°・奥90°・右180°・手前270°です。': 'Shadow tilt is Left 0°, Back 90°, Right 180°, and Front 270°.',
    '「影の長さ」で足元から先端までの距離を調整します。': 'Shadow length controls the distance from the feet to the tip.',
    '「影の遠近感」は奥側を細く、手前側を広く見せる量です。': 'Shadow perspective narrows shadows going back and widens shadows coming forward.',
    '「影のぼかし」は柔らかさ、「影の濃さ」は透明度を調整します。': 'Shadow blur controls softness, while Shadow opacity controls transparency.',
    '歪みは地面の凹凸や揺らぎを表現するときだけ少量使います。': 'Use a small amount of distortion only for uneven or irregular ground.',
    '5. 環境光と接地影': '5. Ambient light and contact shadow',
    '背景の色と光をキャラクターへ反映し、足元の浮遊感を抑えます。': 'Reflect background color and light on the character and reduce the floating appearance at the feet.',
    '環境暗部色・環境明部色は、背景の影と光に近い色を選びます。': 'Choose ambient shadow and highlight colors that resemble the background.',
    '「光の強さ」は背景光の影響量、「コントラスト」は明暗差を調整します。': 'Light intensity controls background light influence; Contrast controls tonal separation.',
    '「光源の向き」はリムライトなどの方向にも影響します。': 'Light direction also affects effects such as rim light.',
    '接地影は濃くしすぎず、足元へ薄く置くと自然です。': 'Keep the contact shadow subtle and close to the feet.',
    '6. スポットライト': '6. Spotlight',
    '任意の位置に色付きの光を置き、キャラクターの前後を切り替えられます。': 'Place colored light anywhere and switch it in front of or behind the character.',
    '「位置を指定」を押し、プレビュー上をドラッグして配置します。': 'Press Set position, then drag on the preview.',
    'スポットライト設定外を操作すると、その位置で自動的に決定されます。': 'Using a control outside Spotlight automatically confirms the current position.',
    '「キャラの後ろ」は背景光、「キャラの前」は前景の光として使えます。': 'Behind character works as background light; In front of character works as foreground light.',
    'ぼかしを大きく、濃さを控えめにすると自然です。': 'Use more blur and lower opacity for a natural result.',
    '7. 背景ぼけ': '7. Background blur',
    '背景だけをぼかし、キャラクターへピントが合った写真らしい奥行きを作ります。': 'Blur only the background to create photographic depth focused on the character.',
    '「ぼかし量」は背景全体のぼけの強さです。': 'Blur amount controls the overall background blur.',
    '「境界位置」で手前と奥の切り替わる高さを決めます。': 'Boundary position sets where foreground transitions to background.',
    '「ボケの滑らかさ」を上げると境界が緩やかになります。': 'Higher Blur smoothness creates a softer transition.',
    '5. 環境光': '5. Ambient light',
    '背景の色と光をキャラクターへ反映します。': 'Apply the background color and lighting to the character.',
    '6. 接地影': '6. Contact shadow',
    'キャラクターの足元へ短い影を置き、浮遊感を抑えます。': 'Place a short shadow beneath the character to keep it grounded.',
    '影の濃さとぼかしで、地面との接触感を調整します。': 'Use shadow opacity and blur to adjust the sense of contact with the ground.',
    '影の位置は左右、影のサイズは足元に合う広さへ調整します。': 'Move the shadow left or right and size it to fit the feet.',
    '濃くしすぎず、足元へ薄く置くと自然です。': 'A subtle shadow beneath the feet usually looks natural.',
    '7. スポットライト': '7. Spotlight',
    '8. 背景ぼけ': '8. Background blur',
    '9. 詳細設定': '9. Advanced settings',
    '9-1. 色調・トーン補正': '9-1. Color & tone',
    'キャラクターと背景の明るさや色味を個別に整えます。': 'Adjust the brightness and color of the character and background separately.',
    '「キャラクター調整」と「背景写真調整」を切り替えて編集します。': 'Switch between Character and Background adjustments.',
    '明るさ・コントラスト・彩度・色温度を背景に近づけます。': 'Match brightness, contrast, saturation, and color temperature to the background.',
    '9-2. リムライト': '9-2. Rim light',
    '光源側の輪郭へ細い光を加え、背景光とのつながりを作ります。': 'Add a narrow highlight to the light-facing edge to connect the character with the background lighting.',
    'リム光強度で明るさ、エッジの太さで光る範囲を調整します。': 'Use Rim intensity for brightness and Edge width for the illuminated range.',
    '光のぼかしを上げると輪郭光が柔らかくなります。': 'Increase Light blur for a softer edge highlight.',
    '9-3. ライトラップ': '9-3. Light wrap',
    '背景の明るい色をキャラクターの輪郭へ回り込ませます。': 'Wrap bright background colors around the character edge.',
    '回り込み幅で、背景色が入る輪郭の広さを調整します。': 'Wrap width controls how far the background color enters the edge.',
    '明度閾値を上げるほど、より明るい背景だけが反映されます。': 'A higher brightness threshold limits the effect to brighter background areas.',
    '9-4. フィルムグレイン': '9-4. Film grain',
    '細かな粒子を加え、イラストと背景写真の質感差を小さくします。': 'Add fine grain to reduce the texture difference between the illustration and photo.',
    '全体・キャラ・背景から適用対象を選べます。': 'Apply it to the whole image, character, or background.',
    'グレイン強度と粒子の粗さは少量ずつ調整します。': 'Adjust grain strength and particle coarseness in small amounts.',
    '9-5. ビネット効果': '9-5. Vignette',
    '画面周辺の明るさを変え、視線を中央へ集めます。': 'Change edge brightness to draw attention toward the center.',
    '周辺光量は暗くするだけでなく、明るくすることもできます。': 'Peripheral light can darken or brighten the edges.',
    '効果範囲と境界のぼかしで自然な広がりに整えます。': 'Use effect range and edge blur for a natural transition.',
    '画像を押すと全体を表示できます。': 'Press the image to view it in full.',
    '色調、輪郭光、質感、周辺光量を個別に仕上げます。': 'Fine-tune color, edge lighting, texture, and vignette.',
    '色調・トーン補正は、キャラと背景の明るさ・彩度・色温度を合わせます。': 'Color and tone adjustments match character and background brightness, saturation, and temperature.',
    'リムライトは光源側の輪郭を明るくします。': 'Rim light brightens the edge facing the light source.',
    'ライトラップは背景の明るい色をキャラの輪郭へ回り込ませます。': 'Light wrap carries bright background color onto the character edge.',
    'フィルムグレインはキャラと写真の質感差を小さくします。': 'Film grain reduces the texture difference between character and photo.',
    'ビネットは四隅を暗く、または明るくして視線を中央へ集めます。': 'Vignette darkens or brightens the corners to guide attention toward the center.',
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
