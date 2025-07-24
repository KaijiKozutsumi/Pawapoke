import React from 'react';
import { PlayerData } from '../types/PlayerData';

interface BasicInfoFormProps {
  playerData: PlayerData;
  onUpdate: (updates: Partial<PlayerData>) => void;
}

const positions = [
  { value: 0, label: 'なし' },
  { value: 1, label: '投' },
  { value: 2, label: '捕' },
  { value: 3, label: '一' },
  { value: 4, label: '二' },
  { value: 5, label: '三' },
  { value: 6, label: '遊' },
  { value: 7, label: '外' }
];

const teams = [
  { value: 0, label: '中日' },
  { value: 1, label: '巨人' },
  { value: 2, label: '横浜' },
  { value: 3, label: 'ヤクルト' },
  { value: 4, label: '広島' },
  { value: 5, label: '阪神' },
  { value: 6, label: 'ダイエー' },
  { value: 7, label: '西武' },
  { value: 8, label: 'オリックス' },
  { value: 9, label: 'ロッテ' },
  { value: 10, label: '日ハム' },
  { value: 11, label: '近鉄' }
];

const skinColors = [
  { value: 0, label: '普通' },
  { value: 1, label: '白' },
  { value: 2, label: '黒' },
  { value: 3, label: '茶色' }
];

const origins = [
  { value: 1, label: 'ポケ3' },
  { value: 3, label: 'ポケ1' },
  { value: 5, label: 'ポケ2' },
  { value: 13, label: '戦争' },
  { value: 17, label: '地雷' },
  { value: 65, label: 'ポケ4' },
  { value: 129, label: 'ファンタジー' },
  { value: 513, label: 'ポケ5' },
  { value: 1025, label: '忍者' }
];

const superSpecialAbilities = [
  { value: 0, label: 'なし' },
  { value: 1, label: '闘気' },
  { value: 2, label: '奪力' },
  { value: 3, label: '神速' },
  { value: 4, label: '豪力' },
  { value: 5, label: '緊縛' },
  { value: 6, label: '鉄腕' },
  { value: 7, label: '剛球' },
  { value: 8, label: '絶倫' },
  { value: 9, label: '呪縛' },
  { value: 10, label: '気迫' }
];

const faces = [
  { value: 0, label: 'パワプロくん-1' },
  { value: 1, label: 'パワプロくん-2' },
  { value: 2, label: 'パワプロくん-3' },
  { value: 3, label: 'パワプロくん-4' },
  { value: 4, label: 'パワプロくん-5' },
  { value: 5, label: 'かめだ' },
  { value: 6, label: 'プロペラカメダ' },
  { value: 7, label: 'ぼんだ' },
  { value: 8, label: 'みずはら' },
  { value: 9, label: 'むらかみ' },
  { value: 10, label: 'がいどう' },
  { value: 11, label: 'ボブ' },
  { value: 12, label: 'さとう' },
  { value: 13, label: 'すずき' },
  { value: 14, label: 'たなか' },
  { value: 15, label: 'パルオ' },
  { value: 16, label: 'ぎんじ' },
  { value: 17, label: 'かねお' },
  { value: 18, label: 'たけだ' },
  { value: 19, label: 'みたか' },
  { value: 20, label: 'ひらやま' },
  { value: 21, label: 'トイくん' },
  { value: 22, label: 'こまさか' },
  { value: 23, label: 'こうもと' },
  { value: 24, label: 'まつくら' },
  { value: 25, label: 'ふゆの' },
  { value: 26, label: '野球マスク' },
  { value: 27, label: 'いかりすすむ' },
  { value: 28, label: 'いかりまもる' },
  { value: 29, label: 'はがね' },
  { value: 30, label: 'まさかね' },
  { value: 31, label: 'せいどう' },
  { value: 32, label: 'チームメイト' },
  { value: 33, label: 'だいごうげつ' },
  { value: 34, label: 'さが' },
  { value: 35, label: 'すがの' },
  { value: 36, label: 'アフロいかり' },
  { value: 37, label: 'さめじま' },
  { value: 38, label: 'あばた' },
  { value: 39, label: 'ふるさわ' },
  { value: 40, label: 'はたやま' },
  { value: 41, label: 'みずき' },
  { value: 42, label: 'くらがり' },
  { value: 43, label: 'ドミオ' },
  { value: 44, label: 'メカドミオ' },
  { value: 45, label: 'たかゆき' },
  { value: 46, label: 'バッタ男' },
  { value: 47, label: 'ネロ' },
  { value: 48, label: 'はっとり' },
  { value: 49, label: 'オクトパス選手' },
  { value: 50, label: 'アルベルト' },
  { value: 51, label: 'アンヌ' },
  { value: 52, label: 'きず' },
  { value: 53, label: 'ドルフィンズ選手-1' },
  { value: 54, label: 'ドルフィンズ選手-2' },
  { value: 55, label: 'きおか' },
  { value: 56, label: 'おづの' },
  { value: 57, label: 'フラワーズ選手' },
  { value: 58, label: 'プロペラ団選手-1' },
  { value: 59, label: 'プロペラ団選手-2' },
  { value: 60, label: 'あおい' },
  { value: 61, label: 'やまだ' },
  { value: 62, label: 'もりもと' },
  { value: 63, label: 'うえだ' },
  { value: 64, label: 'むらた' },
  { value: 65, label: 'いしだ' },
  { value: 66, label: 'やまもと' },
  { value: 67, label: 'こやま' },
  { value: 68, label: 'あきほ' },
  { value: 69, label: 'くろの' },
  { value: 70, label: 'つつみ' },
  { value: 71, label: 'おおがみ' },
  { value: 72, label: 'しまおか' },
  { value: 73, label: 'あかさか' },
  { value: 74, label: 'まがつ' },
  { value: 75, label: 'ふぐり' },
  { value: 76, label: 'もろぼし' },
  { value: 77, label: 'しゃーろっく' },
  { value: 78, label: 'イサム' },
  { value: 79, label: 'こすぎ' },
  { value: 80, label: '汎用選手1' },
  { value: 81, label: '汎用選手2' },
  { value: 82, label: '汎用選手3' },
  { value: 83, label: '汎用選手4' },
  { value: 84, label: '汎用選手5' },
  { value: 85, label: '汎用選手6' },
  { value: 86, label: '汎用選手7' },
  { value: 87, label: '汎用選手8' },
  { value: 88, label: 'うまい' },
  { value: 89, label: '汎用選手9' },
  { value: 90, label: '汎用選手10' },
  { value: 91, label: '汎用選手11' },
  { value: 92, label: '汎用選手12' },
  { value: 93, label: '汎用選手13' },
  { value: 94, label: '汎用選手14' },
  { value: 95, label: '汎用選手15' },
  { value: 96, label: '汎用選手16' },
  { value: 97, label: '汎用選手17' },
  { value: 98, label: '汎用選手18' },
  { value: 99, label: '汎用選手19' }
];

export const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ playerData, onUpdate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">基本情報</h2>
      
      <div className="space-y-4">
        {/* 名前 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            名前
          </label>
          <input
            type="text"
            value={playerData.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={12}
            placeholder="12文字以内"
          />
        </div>

        {/* 背番号 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            背番号
          </label>
          <input
            type="number"
            value={playerData.uniformNumber}
            onChange={(e) => onUpdate({ uniformNumber: parseInt(e.target.value) || 0 })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            max="255"
          />
        </div>

        {/* メインポジション */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            メインポジション
          </label>
          <select
            value={playerData.mainPosition}
            onChange={(e) => onUpdate({ mainPosition: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {positions.map(pos => (
              <option key={pos.value} value={pos.value}>
                {pos.label}
              </option>
            ))}
          </select>
        </div>

        {/* サブポジション1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            サブポジション1
          </label>
          <select
            value={playerData.subPosition1}
            onChange={(e) => onUpdate({ subPosition1: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {positions.map(pos => (
              <option key={pos.value} value={pos.value}>
                {pos.label}
              </option>
            ))}
          </select>
        </div>

        {/* サブポジション2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            サブポジション2
          </label>
          <select
            value={playerData.subPosition2}
            onChange={(e) => onUpdate({ subPosition2: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {positions.map(pos => (
              <option key={pos.value} value={pos.value}>
                {pos.label}
              </option>
            ))}
          </select>
        </div>

        {/* 投げ手 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            投げ手
          </label>
          <select
            value={playerData.throwingArm}
            onChange={(e) => onUpdate({ throwingArm: e.target.value as 'right' | 'left' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="right">右投げ</option>
            <option value="left">左投げ</option>
          </select>
        </div>

        {/* 打ち方 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            打ち方
          </label>
          <select
            value={playerData.battingStyle}
            onChange={(e) => onUpdate({ battingStyle: e.target.value as 'right' | 'left' | 'switch' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="right">右打ち</option>
            <option value="left">左打ち</option>
            <option value="switch">両打ち</option>
          </select>
        </div>

        {/* 打撃フォーム */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            打撃フォーム
          </label>
          <select
            value={playerData.battingForm}
            onChange={(e) => onUpdate({ battingForm: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>ノーマル</option>
            <option value={1}>クラウチング</option>
            <option value={2}>振り子</option>
            <option value={3}>一本足</option>
            <option value={4}>神主</option>
          </select>
        </div>

        {/* 投球フォーム */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            投球フォーム
          </label>
          <select
            value={playerData.pitchingForm}
            onChange={(e) => onUpdate({ pitchingForm: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>オーバー(ワインド)</option>
            <option value={1}>オーバー(セット)</option>
            <option value={2}>スリークォーター(ワインド)</option>
            <option value={3}>スリークォーター(セット)</option>
            <option value={4}>サイド(ワインド)</option>
            <option value={5}>サイド(セット)</option>
            <option value={6}>アンダー(ワインド)</option>
            <option value={7}>アンダー(セット)</option>
            <option value={8}>はがね投法(ワインド)</option>
            <option value={9}>はがね投法(セット)</option>
          </select>
        </div>

        {/* チーム */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            チーム
          </label>
          <select
            value={playerData.team}
            onChange={(e) => onUpdate({ team: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {teams.map(team => (
              <option key={team.value} value={team.value}>
                {team.label}
              </option>
            ))}
          </select>
        </div>

        {/* 肌 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            肌
          </label>
          <select
            value={playerData.skinColor}
            onChange={(e) => onUpdate({ skinColor: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {skinColors.map(skin => (
              <option key={skin.value} value={skin.value}>
                {skin.label}
              </option>
            ))}
          </select>
        </div>

        {/* 出身 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            出身
          </label>
          <select
            value={playerData.origin}
            onChange={(e) => onUpdate({ origin: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {origins.map(origin => (
              <option key={origin.value} value={origin.value}>
                {origin.label}
              </option>
            ))}
          </select>
        </div>

        {/* 顔 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            顔
          </label>
          <select
            value={playerData.face}
            onChange={(e) => onUpdate({ face: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {faces.map(face => (
              <option key={face.value} value={face.value}>
                {face.label}
              </option>
            ))}
          </select>
        </div>

        {/* 製造番号 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            製造番号
          </label>
          <input
            type="number"
            value={playerData.manufacturingNumber}
            onChange={(e) => onUpdate({ manufacturingNumber: parseInt(e.target.value) || 0 })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            max="65535"
          />
        </div>

        {/* 超特殊能力 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            超特殊能力
          </label>
          <select
            value={playerData.superSpecialAbility}
            onChange={(e) => onUpdate({ superSpecialAbility: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {superSpecialAbilities.map(ability => (
              <option key={ability.value} value={ability.value}>
                {ability.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}; 