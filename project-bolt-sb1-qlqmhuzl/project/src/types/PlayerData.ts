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
  face: 0
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

// パワポケ5の文字コード表（簡略版）
export const nameCharacterCodes: { [key: string]: { upper: number, lower: number } } = {
  '田': { upper: 239, lower: 217 },
  '西': { upper: 237, lower: 253 },
  '◎': { upper: 200, lower: 0 },
  'あ': { upper: 130, lower: 159 },
  'い': { upper: 130, lower: 160 },
  'う': { upper: 130, lower: 161 },
  'え': { upper: 130, lower: 162 },
  'お': { upper: 130, lower: 163 },
  // 他の文字も必要に応じて追加
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