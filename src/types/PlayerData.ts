export interface PlayerData {
  // 基本情報
  name: string;
  position: string;
  uniformNumber: number;
  battingStyle: string;
  throwingArm: string;
  
  // 野手能力
  meet: number;
  power: number;
  runningSpeed: number;
  armStrength: number;
  fielding: number;
  errorRate: number;
  battingForm: number;
  
  // 投手能力
  ballSpeed: number;
  control: number;
  stamina: number;
  pitchingForm: number;
  
  // 変化球
  slider: number;
  curve: number;
  fork: number;
  sinker: number;
  shoot: number;
  hSlider: boolean;
  sSlider: boolean;
  hSinker: boolean;
  slowCurve: boolean;
  knuckleball: number;
  
  // 特殊能力
  specialAbilities: string[];
  
  // その他
  team: number;
  skinColor: number;
  origin: number;
  serialNumber: number;
  face: number;
  
  // バージョン情報
  version: string;
}

export const defaultPlayerData: PlayerData = {
  name: '田西◎',
  position: '投手',
  uniformNumber: 53,
  battingStyle: '右打ち',
  throwingArm: '右投げ',
  meet: 7,
  power: 120,
  runningSpeed: 6,
  armStrength: 13,
  fielding: 6,
  errorRate: 6,
  battingForm: 0,
  ballSpeed: 153,
  control: 210,
  stamina: 29,
  pitchingForm: 8,
  slider: 5,
  curve: 5,
  fork: 7,
  sinker: 0,
  shoot: 0,
  hSlider: true,
  sSlider: true,
  hSinker: false,
  slowCurve: false,
  knuckleball: 2,
  specialAbilities: ['呪縛', 'ムラッ気', '打たれ弱い', '負け運', '逃げ球', 'ポーカーフェイス', '三振', 'バント◎'],
  team: 10, // 日ハム
  skinColor: 0, // 普通
  origin: 513, // パワポケ5
  serialNumber: 1,
  face: 0,
  version: 'pawapoke5'
};

// パワポケ4用のデフォルトデータ
export const defaultPlayerDataPawaPoke4: PlayerData = {
  name: '田西◎',
  position: '投手',
  uniformNumber: 53,
  battingStyle: '右打ち',
  throwingArm: '右投げ',
  meet: 7,
  power: 120,
  runningSpeed: 6,
  armStrength: 13,
  fielding: 6,
  errorRate: 6,
  battingForm: 0,
  ballSpeed: 153,
  control: 210,
  stamina: 29,
  pitchingForm: 8,
  slider: 5,
  curve: 5,
  fork: 7,
  sinker: 0,
  shoot: 0,
  hSlider: true,
  sSlider: true,
  hSinker: false,
  slowCurve: false,
  knuckleball: 2,
  specialAbilities: ['呪縛', 'ムラッ気', '打たれ弱い', '負け運', '逃げ球', 'ポーカーフェイス', '三振', 'バント◎'],
  team: 10, // 日ハム
  skinColor: 0, // 普通
  origin: 412, // パワポケ4
  serialNumber: 1,
  face: 0,
  version: 'pawapoke4'
};

export const positions = [
  '投手',
  '捕手', 
  '内野手',
  '外野手'
];

export const teams = [
  { name: '巨人', code: 1 },
  { name: '阪神', code: 2 },
  { name: '中日', code: 3 },
  { name: '広島', code: 4 },
  { name: 'ヤクルト', code: 5 },
  { name: '横浜', code: 6 },
  { name: '西武', code: 7 },
  { name: 'ダイエー', code: 8 },
  { name: 'オリックス', code: 9 },
  { name: '日ハム', code: 10 },
  { name: 'ロッテ', code: 11 },
  { name: '楽天', code: 12 }
];

export const specialAbilitiesList = [
  '呪縛', 'ムラッ気', '打たれ弱い', '負け運', '逃げ球', 'ポーカーフェイス', '三振', 'バント◎',
  'パワーヒッター', 'アベレージヒッター', '盗塁王', '鉄腕', '鉄壁', '俊足', '強肩',
  'チャンスメーカー', '勝負強い', '逆境○', 'サヨナラ男', '代打○', '対左投手○', '対右投手○',
  'バント○', '満塁男', 'ケガしにくさ○', '完投タイプ', 'リリーフエース', '中継ぎエース',
  'ピンチ○', 'ノビ○', 'キレ○', '重い球', 'クイック○', 'リリース○', '低め○'
];

// パワポケ5の文字コード表（拡張版）
export const nameCharacterCodes: { [key: string]: { upper: number, lower: number } } = {
  // ひらがな
  'あ': { upper: 130, lower: 159 },
  'い': { upper: 130, lower: 160 },
  'う': { upper: 130, lower: 161 },
  'え': { upper: 130, lower: 162 },
  'お': { upper: 130, lower: 163 },
  'か': { upper: 130, lower: 164 },
  'き': { upper: 130, lower: 165 },
  'く': { upper: 130, lower: 166 },
  'け': { upper: 130, lower: 167 },
  'こ': { upper: 130, lower: 168 },
  'さ': { upper: 130, lower: 169 },
  'し': { upper: 130, lower: 170 },
  'す': { upper: 130, lower: 171 },
  'せ': { upper: 130, lower: 172 },
  'そ': { upper: 130, lower: 173 },
  'た': { upper: 130, lower: 174 },
  'ち': { upper: 130, lower: 175 },
  'つ': { upper: 130, lower: 176 },
  'て': { upper: 130, lower: 177 },
  'と': { upper: 130, lower: 178 },
  'な': { upper: 130, lower: 179 },
  'に': { upper: 130, lower: 180 },
  'ぬ': { upper: 130, lower: 181 },
  'ね': { upper: 130, lower: 182 },
  'の': { upper: 130, lower: 183 },
  'は': { upper: 130, lower: 184 },
  'ひ': { upper: 130, lower: 185 },
  'ふ': { upper: 130, lower: 186 },
  'へ': { upper: 130, lower: 187 },
  'ほ': { upper: 130, lower: 188 },
  'ま': { upper: 130, lower: 189 },
  'み': { upper: 130, lower: 190 },
  'む': { upper: 130, lower: 191 },
  'め': { upper: 130, lower: 192 },
  'も': { upper: 130, lower: 193 },
  'や': { upper: 130, lower: 194 },
  'ゆ': { upper: 130, lower: 195 },
  'よ': { upper: 130, lower: 196 },
  'ら': { upper: 130, lower: 197 },
  'り': { upper: 130, lower: 198 },
  'る': { upper: 130, lower: 199 },
  'れ': { upper: 130, lower: 200 },
  'ろ': { upper: 130, lower: 201 },
  'わ': { upper: 130, lower: 202 },
  'を': { upper: 130, lower: 203 },
  'ん': { upper: 130, lower: 204 },
  
  // カタカナ
  'ア': { upper: 131, lower: 159 },
  'イ': { upper: 131, lower: 160 },
  'ウ': { upper: 131, lower: 161 },
  'エ': { upper: 131, lower: 162 },
  'オ': { upper: 131, lower: 163 },
  'カ': { upper: 131, lower: 164 },
  'キ': { upper: 131, lower: 165 },
  'ク': { upper: 131, lower: 166 },
  'ケ': { upper: 131, lower: 167 },
  'コ': { upper: 131, lower: 168 },
  'サ': { upper: 131, lower: 169 },
  'シ': { upper: 131, lower: 170 },
  'ス': { upper: 131, lower: 171 },
  'セ': { upper: 131, lower: 172 },
  'ソ': { upper: 131, lower: 173 },
  'タ': { upper: 131, lower: 174 },
  'チ': { upper: 131, lower: 175 },
  'ツ': { upper: 131, lower: 176 },
  'テ': { upper: 131, lower: 177 },
  'ト': { upper: 131, lower: 178 },
  'ナ': { upper: 131, lower: 179 },
  'ニ': { upper: 131, lower: 180 },
  'ヌ': { upper: 131, lower: 181 },
  'ネ': { upper: 131, lower: 182 },
  'ノ': { upper: 131, lower: 183 },
  'ハ': { upper: 131, lower: 184 },
  'ヒ': { upper: 131, lower: 185 },
  'フ': { upper: 131, lower: 186 },
  'ヘ': { upper: 131, lower: 187 },
  'ホ': { upper: 131, lower: 188 },
  'マ': { upper: 131, lower: 189 },
  'ミ': { upper: 131, lower: 190 },
  'ム': { upper: 131, lower: 191 },
  'メ': { upper: 131, lower: 192 },
  'モ': { upper: 131, lower: 193 },
  'ヤ': { upper: 131, lower: 194 },
  'ユ': { upper: 131, lower: 195 },
  'ヨ': { upper: 131, lower: 196 },
  'ラ': { upper: 131, lower: 197 },
  'リ': { upper: 131, lower: 198 },
  'ル': { upper: 131, lower: 199 },
  'レ': { upper: 131, lower: 200 },
  'ロ': { upper: 131, lower: 201 },
  'ワ': { upper: 131, lower: 202 },
  'ヲ': { upper: 131, lower: 203 },
  'ン': { upper: 131, lower: 204 },
  
  // 漢字（主要なもの）
  '田': { upper: 239, lower: 217 },
  '西': { upper: 237, lower: 253 },
  '東': { upper: 239, lower: 218 },
  '南': { upper: 239, lower: 219 },
  '北': { upper: 239, lower: 220 },
  '中': { upper: 239, lower: 221 },
  '大': { upper: 239, lower: 222 },
  '小': { upper: 239, lower: 223 },
  '山': { upper: 239, lower: 224 },
  '川': { upper: 239, lower: 225 },
  '木': { upper: 239, lower: 226 },
  '水': { upper: 239, lower: 227 },
  '火': { upper: 239, lower: 228 },
  '土': { upper: 239, lower: 229 },
  '金': { upper: 239, lower: 230 },
  '日': { upper: 239, lower: 231 },
  '月': { upper: 239, lower: 232 },
  '年': { upper: 239, lower: 233 },
  '人': { upper: 239, lower: 234 },
  '子': { upper: 239, lower: 235 },
  '男': { upper: 239, lower: 236 },
  '女': { upper: 239, lower: 237 },
  '手': { upper: 239, lower: 238 },
  '足': { upper: 239, lower: 239 },
  '目': { upper: 239, lower: 240 },
  '耳': { upper: 239, lower: 241 },
  '口': { upper: 239, lower: 242 },
  '心': { upper: 239, lower: 243 },
  '力': { upper: 239, lower: 244 },
  '気': { upper: 239, lower: 245 },
  '風': { upper: 239, lower: 246 },
  '雨': { upper: 239, lower: 247 },
  '雪': { upper: 239, lower: 248 },
  '花': { upper: 239, lower: 249 },
  '草': { upper: 239, lower: 250 },
  '森': { upper: 239, lower: 251 },
  '林': { upper: 239, lower: 252 },
  
  // 記号
  '◎': { upper: 200, lower: 0 },
  '○': { upper: 200, lower: 1 },
  '●': { upper: 200, lower: 2 },
  '△': { upper: 200, lower: 3 },
  '▲': { upper: 200, lower: 4 },
  '□': { upper: 200, lower: 5 },
  '■': { upper: 200, lower: 6 },
  '☆': { upper: 200, lower: 7 },
  '★': { upper: 200, lower: 8 },
  '♪': { upper: 200, lower: 9 },
  '♫': { upper: 200, lower: 10 },
  '♬': { upper: 200, lower: 11 },
  '♩': { upper: 200, lower: 12 },
  '♭': { upper: 200, lower: 13 },
  '♯': { upper: 200, lower: 14 },
  '♮': { upper: 200, lower: 15 },
  
  // 英数字
  'A': { upper: 65, lower: 0 },
  'B': { upper: 66, lower: 0 },
  'C': { upper: 67, lower: 0 },
  'D': { upper: 68, lower: 0 },
  'E': { upper: 69, lower: 0 },
  'F': { upper: 70, lower: 0 },
  'G': { upper: 71, lower: 0 },
  'H': { upper: 72, lower: 0 },
  'I': { upper: 73, lower: 0 },
  'J': { upper: 74, lower: 0 },
  'K': { upper: 75, lower: 0 },
  'L': { upper: 76, lower: 0 },
  'M': { upper: 77, lower: 0 },
  'N': { upper: 78, lower: 0 },
  'O': { upper: 79, lower: 0 },
  'P': { upper: 80, lower: 0 },
  'Q': { upper: 81, lower: 0 },
  'R': { upper: 82, lower: 0 },
  'S': { upper: 83, lower: 0 },
  'T': { upper: 84, lower: 0 },
  'U': { upper: 85, lower: 0 },
  'V': { upper: 86, lower: 0 },
  'W': { upper: 87, lower: 0 },
  'X': { upper: 88, lower: 0 },
  'Y': { upper: 89, lower: 0 },
  'Z': { upper: 90, lower: 0 },
  '0': { upper: 48, lower: 0 },
  '1': { upper: 49, lower: 0 },
  '2': { upper: 50, lower: 0 },
  '3': { upper: 51, lower: 0 },
  '4': { upper: 52, lower: 0 },
  '5': { upper: 53, lower: 0 },
  '6': { upper: 54, lower: 0 },
  '7': { upper: 55, lower: 0 },
  '8': { upper: 56, lower: 0 },
  '9': { upper: 57, lower: 0 },
};

// 第二世代文字換算表
export const characterConversionTable = [
  'ご', 'ぐ', 'ぎ', 'ぎ', 'ゆ', 'ね', 'ろ', 'か', 'ぺ', 'も', 'ぞ', 'ふ', 'そ', 'ぽ', 'ぱ', 'み',
  'ま', 'ぷ', 'ば', 'ぬ', 'ぴ', 'ぞ', 'ぜ', 'め', 'た', 'ぽ', 'れ', 'じ', 'ぼ', 'す', 'ぺ', 'ら',
  'ぜ', 'さ', 'り', 'る', 'げ', 'ぷ', 'ぺ', 'び', 'ん', 'せ', 'ぺ', 'ぺ', 'ぺ', 'い', 'ぺ', 'の',
  'が', 'ぺ', 'え', 'ぺ', 'ぺ', 'ぶ', 'ひ', 'ぺ', 'ぺ', 'し', 'づ', 'ぺ', 'ぺ', 'べ'
];

// モザイク化補正値表
export const mosaicCorrectionValues = [
  60, 18, 33, 57, 37, 9, 43, 6, 44, 35, 65, 28, 15, 66, 58, 32,
  31, 5, 71, 69, 1, 22, 67, 34, 16, 36, 42, 62, 75, 13, 10, 39,
  64, 11, 40, 41, 59, 19, 61, 72, 46, 70, 68, 63, 45, 2, 38, 56,
  29, 21, 14, 26, 20, 8, 49, 48, 4, 50, 52, 54, 24, 12, 17, 25
];

// バージョン情報
export const versions = [
  { id: 'pawapoke5', name: 'パワポケ5', description: 'パワプロクンポケット5対応' },
  { id: 'pawapoke4', name: 'パワポケ4', description: 'パワプロクンポケット4対応' }
];