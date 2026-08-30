(() => {
  const STORAGE_KEY = 'mazechara-language';
  const originals = new WeakMap();
  const text = {
    "まぜキャラ": "MazeChara",
    "まぜキャラ：二次元✖️三次元・キャラ溶け込みツール": "MazeChara: 2D Character Photo-Blending Tool",
    "まぜキャラ — 二次元キャラクターを写真へ自然に溶け込ませるWebツール": "MazeChara — Blend 2D Characters into Photos",
    "まぜキャラ - 二次元✖️三次元・キャラ溶け込みツール": "MazeChara — 2D Character Photo-Blending Tool",
    "技術参考: 此ノ世うに (@konoyo_uni) / X": "Technique reference: 此ノ世うに (@konoyo_uni) / X",
    "使い方マニュアル - まぜキャラ": "User Manual — MazeChara",
    "まぜキャラ 使い方マニュアル": "MazeChara User Manual",
    "二次元キャラクターを三次元の背景写真へ自然に溶け込ませるための操作ガイドです。": "A comprehensive guide for blending 2D characters naturally into 3D background photos.",
    "本ツールは、": "This tool was created with deep respect and inspiration from the techniques shared by",
    "此ノ世うに @konoyo_uni": "此ノ世うに @konoyo_uni",
    "さまが公開された動画のテクニックを参考に、リスペクトを込めて制作しています。": "in their tutorial videos.",
    "X: @konoyo_uni": "X: @konoyo_uni",
    "基本の合成ステップ": "Basic Composition Steps",
    "背景写真とキャラクター画像をアップロード": "Upload Background Photo and Character Image",
    "背景写真と、背景が透明なキャラクター画像を読み込みます。": "Load a background photo and a character image with a transparent background.",
    "最大4,800万画素・50MBまで対応し、高解像度画像は端末内で編集用の解像度に自動調整されます。": "Supports images up to 48 MP and 50 MB. High-resolution images are automatically optimized in-browser for smooth editing.",
    "読み込み後はトリミング画面が開き、キャラクターPNGの透明な余白は自動でカットされます。": "After loading, the crop modal opens and transparent margins of character PNGs are automatically trimmed.",
    "キャラクターのサイズと位置を調整": "Adjust Character Size and Position",
    "プレビュー上でドラッグするか、「サイズ」「位置X」「位置Y」で配置します。": "Drag directly on the preview or use the Size, Position X, and Position Y controls.",
    "ホイールやピンチ操作でも拡大・縮小できます。": "You can also zoom in and out using mouse wheel or pinch gestures.",
    "「自動マッチ」またはプリセットで光を調整して溶け込ませる": "Blend with Auto Match or Quick Presets",
    "「自動マッチ」で、写真の色温度・明暗・光の向き・影の濃さを自動調整します。": "Auto Match automatically detects the photo color temperature, brightness, light direction, and shadow intensity.",
    "「晴天」「夕暮れ」「夜景」などのプリセットも使えます。": "You can also select presets such as Sunny, Sunset, and Night.",
    "自動マッチは設定の目安です。": "Auto Match provides a baseline estimate.",
    "写真やキャラクターによっては、影やライティングを手動で調整してください。": "Feel free to fine-tune shadows and lighting manually depending on your photo and character.",
    "影やライティングの微調整": "Fine-tune Shadows and Lighting",
    "落ち影の向きと濃さ、接地影、リムライトを調整できます。": "Adjust the cast shadow direction and opacity, contact shadow, and rim lighting.",
    "背景に合わせて仕上げてください。": "Polish the details to match the background atmosphere.",
    "画面下の「画像を保存／共有」を押します。対応端末では共有シートが開き、写真への保存やXなどへの共有ができます。共有に対応していないブラウザでは、JPEG画像としてダウンロードされます。": "Press \"Save / Share image\" at the bottom. On supported devices, the native share sheet opens to save photos or share to X. In other browsers, the image downloads directly as JPEG.",
    "主要機能の解説": "Key Features Explained",
    "背景から自動適応（自動マッチ）": "Auto-match to Background (Auto Match)",
    "写真の明暗、色温度、光の向きを解析し、ライティングと影を自動設定します。": "Analyzes brightness, color temperature, and light direction to automatically configure lighting and shadows.",
    "落ち影 & 接地影": "Cast Shadow & Contact Shadow",
    "落ち影の向きと長さを調整できます。接地影でキャラクターの浮遊感を抑えます。": "Adjust cast shadow direction and length. Use contact shadow to keep the character grounded.",
    "環境光 & スポイト": "Ambient Light & Color Picker",
    "写真の明部・暗部の色を反映します。スポイトで写真内の色を直接選べます。": "Reflects ambient highlight and shadow colors from the photo. Use the color picker to sample colors directly from the image.",
    "ライトラップ & リムライト": "Light Wrap & Rim Light",
    "背景の光を輪郭へ回り込ませ、逆光時のエッジを明るくできます。": "Wraps background light onto the character outline and brightens edges during backlighting.",
    "被写界深度（背景ボケ）": "Depth of Field (Background Blur)",
    "キャラクターの足元から奥へ向かう、自然な背景ボケを作れます。": "Creates realistic background blur that deepens naturally from the character feet toward the horizon.",
    "周辺光量（ビネット効果）": "Vignette (Peripheral Light)",
    "写真の四隅を暗く、または明るく調整できます。中央でオフです。": "Darkens or brightens the corners of the photo. Centered at 0 to turn off.",
    "6. 色収差": "6. Chromatic Aberration",
    "色収差": "Chromatic Aberration",
    "ズレのタイプ": "Aberration Type",
    "放射 (レンズ風)": "Radial (Lens)",
    "平行 (均一)": "Linear (Uniform)",
    "色ズレの強さ": "Split Strength",
    "ズレの角度": "Split Angle",
    "滲み・ぼかし": "Fringe Blur",
    "Before / After 比較": "Before / After Comparison",
    "ボタンを押している間、エフェクト適用前の状態と比較できます。": "Hold down the button to compare the preview with the unedited original state.",
    "スマートフォンでの操作": "Mobile Device Operations",
    "1本指ドラッグでキャラクター配置": "1-Finger Drag to Move Character",
    "プレビューを1本指でドラッグすると、キャラクターを移動できます。": "Drag on the preview with one finger to move the character.",
    "2本指スワイプ & ピンチでプレビュー操作": "2-Finger Swipe & Pinch to Navigate Preview",
    "2本指でスワイプするとプレビューを移動できます。": "Swipe with two fingers to pan the preview view.",
    "ピンチで拡大・縮小できます。": "Pinch with two fingers to zoom in and out.",
    "「パネルを下げる」で全画面プレビュー": "Hide Panel for Fullscreen Preview",
    "右上の「パネルを下げる」を押すと、プレビューを広く表示できます。": "Tap \"Hide panel\" at the top right to expand the preview viewport.",
    "利用規約・注意事項 - まぜキャラ": "Terms & Notices — MazeChara",
    "利用規約・プライバシー・注意事項": "Terms of Service, Privacy & Guidelines",
    "まぜキャラを安心・安全にご利用いただくためのご案内です。": "Information and guidelines for using MazeChara safely and securely.",
    "プライバシーと画像データの取り扱い（完全ローカル処理）": "Privacy & Local Image Processing (Zero Server Uploads)",
    "サーバー送信・保存なし": "Zero Server Uploads & No Data Storage",
    "まぜキャラでアップロードされた背景写真およびキャラクター画像は、": "All background photos and character images uploaded to MazeChara are",
    "すべてご利用中の端末（Webブラウザ内）でのみ処理・合成": "processed and composited entirely inside your local web browser",
    "されます。": ".",
    "画像データや編集内容が外部サーバーへ送信・アップロード・保存されることは一切ありません。プライベートな写真やオリジナルのイラストも安心してお使いいただけます。": "Your image files and editing parameters are never sent, uploaded, or saved to any external servers. You can safely use private personal photos and original illustrations.",
    "【高解像度画像の取り扱い・端末内最適化について】": "[High-Resolution Image Handling & Local Optimization]",
    "最大4,800万画素（50MB）までの画像読み込みに対応しています。お使いの端末（スマートフォン・PC）のメモリ保護と快適な高速リアルタイム描画を両立するため、ブラウザローカル内で編集用解像度（PC: 最大2,400万画素、モバイル: 最大1,600万画素）へ自動的に安全な最適化（ダウンサンプリング）が行われます。この処理もすべて端末内のみで完結し、外部送信は一切行われません。": "Supports images up to 48 megapixels (50 MB). To protect device memory and ensure smooth real-time rendering, images are automatically optimized in-browser to a safe editing resolution (up to 24 MP on PC, 16 MP on mobile). This optimization runs entirely inside your device with zero external transmission.",
    "著作権・肖像権に関する注意事項": "Copyright & Likeness Rights Guidelines",
    "本ツールで合成に使用する画像については、ユーザーご自身の責任において著作権・肖像権・二次創作ガイドライン等の権利関係をご確認の上でご利用ください。": "Users are responsible for ensuring that all images used comply with copyright, likeness rights, and fan creation guidelines.",
    "第三者の著作物（アニメ・ゲーム・漫画等のキャラクター画像）を利用する場合は、各権利元が定めるファンアート・二次創作ガイドラインを遵守してください。": "When using third-party copyrighted materials (anime, game, or manga character illustrations), please comply with fan creation guidelines set by each respective rights holder.",
    "背景写真に人物が写り込んでいる場合など、他者の肖像権やプライバシーを侵害しないようご留意ください。": "Please ensure you do not violate the privacy or portrait rights of identifiable persons appearing in background photos.",
    "公序良俗に反する用途、他者を誹謗中傷する目的での画像作成・公開は固くお断りいたします。": "Creating or publishing images that violate public order, decency, or serve to defame others is strictly prohibited.",
    "免責事項": "Disclaimer",
    "本ツールは現状有姿（as-is）で提供されており、制作者は本ツールの動作の完全性、正確性、特定目的への適合性についていかなる保証も行いません。": "This tool is provided \"as-is\", without warranties of any kind regarding completeness, accuracy, or fitness for a particular purpose.",
    "本ツールの利用または利用不能によって生じた直接的・間接的な損害、ならびにユーザー間またはユーザーと第三者との間で生じた紛争等について、制作者は一切の責任を負いかねます。": "The creator assumes no responsibility for any direct or indirect damages, disputes, or losses resulting from the use or inability to use this tool.",
    "推奨動作環境": "Recommended System Requirements",
    "HTML5 Canvas / CSS3 Backdrop-filter に対応したモダンブラウザで快適にご利用いただけます。": "Runs smoothly on modern web browsers supporting HTML5 Canvas and CSS3 backdrop-filter.",
    "PC:": "PC:",
    "Google Chrome / Safari / Microsoft Edge / Mozilla Firefox（各最新版）": "Google Chrome / Safari / Microsoft Edge / Mozilla Firefox (latest versions)",
    "スマートフォン / タブレット:": "Smartphones / Tablets:",
    "iOS Safari（iOS 15以降） / Android Chrome（最新版）": "iOS Safari (iOS 15+) / Android Chrome (latest version)",
    "AI（人工知能）の利用方針について": "Artificial Intelligence (AI) Policy",
    "「まぜキャラ」では、ユーザーの皆様に安心・安全にご利用いただくため、AIの利用範囲について以下のように明確に定めています。": "MazeChara clearly defines its scope of AI usage to provide transparency and security.",
    "プログラムの設計・開発:": "Software Engineering & Development:",
    "本ツールのソースコード制作・UI設計・アルゴリズム実装には、AIアシスタントを活用して構築しています。": "AI coding assistants are utilized for source code implementation, UI engineering, and algorithm optimization.",
    "ユーザー画像の加工・合成・自動マッチでのAI不使用:": "Zero AI Usage in User Image Processing & Blending:",
    "ユーザー様がアップロードされた背景写真やキャラクター画像の解析・画像加工・エフェクト処理、および「背景自動マッチ」機能には、": "For user-uploaded photos, character images, effects processing, and the \"Auto Match\" feature,",
    "生成AIや外部の機械学習モデル（クラウドAI・ローカルAI問わず）は一切使用しておりません。": "NO generative AI or external machine learning models (cloud or local) are used whatsoever.",
    "すべての画像解析・加工は、ご利用中のブラウザ内にて純粋な数学的・幾何学的な画像処理アルゴリズム（ピクセル走査・Canvas行列変換）のみで高速に実行されます。画像データがAIの学習素材として収集・送信される心配も一切ございません。": "All image analysis and compositing run entirely in your local browser using classical mathematical and geometric algorithms (pixel scanning and Canvas matrix transformations). Your images are never collected or used for AI training.",
    "自動判定・自動マッチングに使われている技術": "Classical Algorithms Behind Auto Match",
    "「まぜキャラ」の自動処理機能は、以下のクラシックかつ決定論的な画像処理アルゴリズムによって構築されています。": "MazeChara automatic features are built on classical, deterministic computer vision algorithms:",
    "1. 明暗重心解析（Center of Mass）": "1. Luminance Center of Mass Analysis",
    "背景写真の各ピクセルの輝度（Luminance: $Y = 0.299R + 0.587G + 0.114B$）を重みとして全体の明るさの重心座標を算出し、主要な光源が左右・上下のどの位置にあるかを幾何学的に判定します。": "Calculates the center-of-mass coordinates using pixel luminance ($Y = 0.299R + 0.587G + 0.114B$) as weights to geometrically locate the primary light source position.",
    "2. マルチレイヤー明度勾配（Luminance Gradient）": "2. Multi-Layer Luminance Gradient",
    "画像の上部（空・光源エリア）と下部（地面・床エリア）をレイヤー分割して局所明度差をスキャンし、空の強い明るさによる誤判定を防ぎつつ、逆光（Backlight）や順光の比率を正確に算出します。": "Divides the image into upper (sky/light) and lower (ground/floor) regions to scan local gradients, preventing sky luminance bias while accurately determining backlight ratios.",
    "3. ヒストグラム・コントラスト解析": "3. Histogram & Contrast Distribution",
    "背景の明暗ヒストグラムからダイナミックレンジと標準偏差を計算し、直射日光による「濃くシャープな影（ハードシャドウ）」か、曇天・日陰による「薄く柔らかな影（ソフトシャドウ）」かを判定して影の不透明度・ぼかし量を最適化します。": "Computes dynamic range and standard deviation from the luminance histogram to identify hard direct-sun shadows versus soft overcast shadows, optimizing shadow opacity and blur.",
    "4. RGB色温度・環境光サンプリング": "4. RGB Color Temperature & Ambient Light Sampling",
    "背景全体のRGB平均値およびキャラクター接地付近のピクセル色をサンプリングし、写真の環境光カラー（夕焼けの赤み、青空の青み、木々の緑など）を抽出してキャラクターの色調やライトラップに反映します。": "Samples mean RGB values across the background and ground contact areas to extract ambient environmental colors (sunset red, blue sky, foliage green) and apply them to the character.",
    "5. アルファチャンネル・極限バウンディングボックス走査": "5. Alpha Channel Bounding Box Scan",
    "キャラクター透過PNGのアルファ値（Alpha > 0）をピクセル単位で高速走査し、イラストが実際に描かれている最小矩形領域（Bounding Box）をミリ単位で検出して自動トリミング枠を算出します。": "Performs pixel-level scans of character PNG alpha values (Alpha > 0) to detect the exact minimal non-transparent bounding box with sub-pixel precision.",
    "キャラクター透過PNGのアルファ値（Alpha &gt; 0）をピクセル単位で高速走査し、イラストが実際に描かれている最小矩形領域（Bounding Box）をミリ単位で検出して自動トリミング枠を算出します。": "Performs pixel-level scans of character PNG alpha values (Alpha > 0) to detect the exact minimal non-transparent bounding box with sub-pixel precision.",
    "6. 2D Canvas アフィン変換（Affine Transformation）": "6. 2D Canvas Affine Transformation",
    "HTML5 Canvas の": "Using HTML5 Canvas",
    "ctx.transform(1, 0, -skewX, -shadowScaleY, 0, 0)": "ctx.transform(1, 0, -skewX, -shadowScaleY, 0, 0)",
    "行列演算により、キャラクターの接地面を基点としてパースペクティブ（透視投影）に整合した自然な落ち影をリアルタイム描画します。": "matrix operations to render realistic ground shadows aligned with photographic perspective in real time.",
    "使用フォント・ライセンスについて": "Fonts & Open Source Licenses",
    "本ツールで使用しているすべてのフォントおよび素材は、商用・個人利用ともに許可された自由なオープンソースライセンスに基づいています。": "All fonts and assets used in this tool are licensed under permissive open-source licenses allowing both commercial and personal use.",
    "Zen Maru Gothic（ゼン丸ゴシック）:": "Zen Maru Gothic:",
    "配布元: Google Fonts / 制作: Yoshimichi Ohira (Zen Font Project)": "Distributed via Google Fonts / Created by Yoshimichi Ohira (Zen Font Project)",
    "ライセンス:": "License:",
    "SIL Open Font License 1.1": "SIL Open Font License 1.1",
    "（商用・個人利用完全無料）": "(Completely free for commercial and personal use)",
    "Mochiy Pop One（モチー ポップ One）:": "Mochiy Pop One:",
    "配布元: Google Fonts / 制作: 自主制作フォント (Fontworks / Google Fonts)": "Distributed via Google Fonts / Created by Fontworks and Google Fonts",
    "アイコン・UIグラフィック:": "Icons & UI Graphics:",
    "自作ベクターSVGおよびオープンソースアイコン（MIT / ISC License 準拠）": "Original vector SVG and open-source icons (MIT / ISC License compliant)",
    "外部プログラム依存:": "External Program Dependencies:",
    "外部JavaScriptライブラリへの依存はなく、完全な Vanilla JavaScript & HTML5 Canvas API のみで動作しています。": "Zero external JavaScript libraries; built entirely with pure Vanilla JavaScript and HTML5 Canvas API.",
    "外部JavaScriptライブラリへの依存はなく、完全な Vanilla JavaScript &amp; HTML5 Canvas API のみで動作しています。": "Zero external JavaScript libraries; built entirely with pure Vanilla JavaScript and HTML5 Canvas API.",
    "さまが公開された動画で紹介されていたテクニックを参考に、リスペクトを込めて制作しました。": "in their published tutorial video.",
    "素晴らしい表現と技術の共有に、心より感謝します。": "Special thanks for sharing such magnificent artistic techniques with the community.",
    "増田あのに😶‍🌫️/顕なめ @MousdaAnony": "増田あのに😶‍🌫️/顕なめ @MousdaAnony",
    "さまには、解説用動画のキャラクター素材をご提供いただきました。": "kindly provided the character illustrations used in the tutorial video.",
    "X: @MousdaAnony": "X: @MousdaAnony",
    '画像のトリミング': 'Crop image', 'キャラクター画像のトリミング': 'Crop character image', '背景写真のトリミング': 'Crop background photo', 'フリー': 'Free', '縦 / 横': 'Portrait / Landscape', 'ゴミ除去': 'Remove debris', '中止': 'Cancel', '除去サイズ': 'Removal size', 'キャンセル': 'Cancel', 'トリミングを適用': 'Apply crop',
    '左右反転': 'Flip horizontal', 'マニュアル': 'Manual', '設定パネル': 'Settings', 'マッチ': 'Match', 'オートフィット': 'Auto fit', 'キャラクターをロック': 'Lock character', 'キャラクターロックを解除': 'Unlock character', 'BEFORE (未加工プレビュー)': 'BEFORE (original preview)',
    '2本指スワイプで画面移動': 'Use two fingers to move the view', '1本指:キャラ移動 / 2本指:画面パン・拡大': 'One finger: move character / Two fingers: pan and zoom',
    'サイズ': 'Size', 'Space+ドラッグで表示を移動': 'Space + drag to move the view', 'パネルを下げる': 'Hide panel', 'パネルを上げる': 'Show panel', 'パネルを隠す': 'Hide panel', 'パネルを開く': 'Show panel', '設定パネル': 'Settings',
    '画像素材のアップロード': 'Upload images', '背景写真': 'Background photo', 'キャラクター (透過)': 'Character (transparent)',
    'キャラクター画像では、ヘッダーの「ゴミ除去」で周囲の孤立した文字・記号・小さな要素を除去できます。': 'For character images, use Remove debris in the header to remove isolated text, symbols, and small surrounding elements.',
    '「除去サイズ」を上げるほど、大きな孤立要素やキャラに近い線まで除去されます。': 'Increasing Removal size removes larger isolated elements and lines closer to the character.',
    '100％では強く除去されるため、必要な髪飾りやエフェクトまで消えていないか確認してください。': 'At 100%, removal is aggressive. Check that required accessories and effects have not been removed.',
    '「ゴミ除去」をもう一度押すと、除去前の状態へ戻せます。': 'Press Remove debris again to restore the original image.',
    '高解像度画像は自動最適化されます': 'High-resolution images are automatically optimized.',
    '背景から自動適応': 'Auto-match to background', '影の向き/濃さ・色温度・明暗を自動判定': 'Automatically detects shadow, color temperature, and brightness', '自動マッチ': 'Auto Match',
    'クイックプリセット': 'Quick presets', '標準': 'Standard', '晴天': 'Sunny', 'くもり': 'Cloudy', '夕暮れ': 'Sunset', '夜景': 'Night', '室内': 'Indoor',
    'キャラクター配置': 'Character placement', '位置 X': 'Position X', '位置 Y': 'Position Y', '環境光 & ライティング': 'Ambient light & lighting',
    '環境暗部色': 'Ambient shadow color', 'スポイト': 'Pick color', '環境明部色': 'Ambient highlight color', '光の強さ': 'Light intensity',
    '光源の向き': 'Light direction', '落ち影': 'Cast shadow', '影の傾き': 'Shadow tilt', '影のぼかし（拡散量）': 'Shadow blur (spread)',
    '左': 'Left', '奥': 'Back', '手前': 'Front', '右': 'Right', '影の長さ': 'Shadow length', '影の遠近感': 'Shadow perspective',
    '影の濃さ': 'Shadow opacity', '影のぼかし': 'Shadow blur', '影の歪み強度': 'Shadow distortion', '影の歪み角度': 'Distortion angle',
    '接地影 (足元の影)': 'Contact shadow (at feet)', '影の位置': 'Shadow position', '影のサイズ': 'Shadow size', 'スポットライト': 'Spotlight', 'ライト色': 'Light color', '位置を指定': 'Set position', '位置を決定': 'Confirm position', 'キャラとの重なり': 'Layer relative to character', 'キャラの後ろ': 'Behind character', 'キャラの前': 'In front of character',
    '濃さ': 'Opacity', 'ぼかし': 'Blur', '角度 X': 'Angle X', '角度 Y': 'Angle Y', '背景ボケ': 'Background blur', '背景ボケ (被写界深度)': 'Background blur (depth of field)',
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
    'アクセス状況の把握には Google Analytics を利用しています。画像データや編集内容が計測サービスへ送信されることはありません。': 'Google Analytics is used to understand site traffic. Image data and editing content are not sent to analytics services.',
    '長押しまたはクリックで合成前と比較': 'Press and hold or click to compare with original',
    'キャラクターを左右反転': 'Flip character horizontally',
    '使い方マニュアルを開く': 'Open user manual',
    '設定パネルを開く': 'Open settings panel',
    '設定パネルを表示': 'Show settings panel',
    '設定パネルを展開': 'Show settings panel',
    '設定パネルを右に隠してプレビューを最大化': 'Hide settings panel to maximize preview',
    '設定パネルを折りたたんでプレビューを広く表示': 'Hide settings panel for a larger preview',
    '閉じる': 'Close',
    'プレビュー表示ズーム': 'Preview zoom',
    'ズーム・位置リセット (100%)': 'Reset zoom and position (100%)',
    'キャラクターを中心に幅いっぱいで表示': 'Fit character in center',
    'キャラクターの移動とサイズ変更をロック': 'Lock character movement and size',
    'キャラクターのロックを解除': 'Unlock character',
    '設定を初期化': 'Reset settings',
    'スポットライトの色': 'Spotlight color',
    '接地影を有効にする': 'Enable contact shadow',
    'スポットライトを有効にする': 'Enable spotlight',
    '背景ボケを有効にする': 'Enable background blur',
    '色調・トーン補正を有効にする': 'Enable color and tone adjustment',
    'ライトラップを有効にする': 'Enable light wrap',
    'リムライトを有効にする': 'Enable rim light',
    'フィルムグレインを有効にする': 'Enable film grain',
    'ビネット効果を有効にする': 'Enable vignette',
    '暗': 'Dark', '明': 'Bright'
  };

  const attributeOriginals = new WeakMap();
  function translateAttributes(language) {
    const isEn = language === 'en';
    const elements = document.querySelectorAll('[title], [placeholder], [aria-label]');
    elements.forEach((el) => {
      ['title', 'placeholder', 'aria-label'].forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        let origs = attributeOriginals.get(el);
        if (!origs) {
          origs = {};
          attributeOriginals.set(el, origs);
        }
        if (origs[attr] === undefined) {
          origs[attr] = el.getAttribute(attr);
        }
        if (isEn) {
          const key = normalized(origs[attr]);
          if (text[key]) el.setAttribute(attr, text[key]);
        } else {
          el.setAttribute(attr, origs[attr]);
        }
      });
    });
  }

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
    translateAttributes(language);
    document.title = language === 'en' ? ({ index: 'MazeChara — Blend 2D Characters into Photos', manual: 'User Manual — MazeChara', terms: 'Terms & Notices — MazeChara' }[document.body.dataset.page] || document.title) : document.body.dataset.titleJa;
  }
  function setLanguage(language) {
    localStorage.setItem(STORAGE_KEY, language);
    translateDocument(language);
    window.dispatchEvent(new CustomEvent('mazechara-language-change', { detail: { language } }));
  }
  function detectPreferredLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ja') return saved;

    const langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ''];

    const hasJapanese = langs.some((lang) => {
      if (!lang) return false;
      const lower = String(lang).toLowerCase();
      return lower === 'ja' || lower.startsWith('ja-');
    });

    return hasJapanese ? 'ja' : 'en';
  }

  function init() {
    document.body.dataset.titleJa = document.title;
    const language = detectPreferredLanguage();
    localStorage.setItem(STORAGE_KEY, language);
    document.querySelectorAll('[data-language-toggle]').forEach((button) => button.addEventListener('click', () => setLanguage(localStorage.getItem(STORAGE_KEY) === 'en' ? 'ja' : 'en')));
    translateDocument(language);
    window.dispatchEvent(new CustomEvent('mazechara-language-change', { detail: { language } }));
  }
  window.MazeCharaI18n = { init, setLanguage, text };
})();
