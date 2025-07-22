import React from 'react';
import { PlayerData } from '../types/PlayerData';

interface PitcherFormProps {
  playerData: PlayerData;
  onPlayerChange: (playerData: PlayerData) => void;
}

const PitcherForm: React.FC<PitcherFormProps> = ({ playerData, onPlayerChange }) => {
  const handleChange = (field: keyof PlayerData, value: string | number | boolean) => {
    onPlayerChange({
      ...playerData,
      [field]: value
    });
  };

  const pitchingAbilities = [
    { key: 'ballSpeed', label: '球速', min: 80, max: 180, unit: 'km/h', description: '投球の速度' },
    { key: 'control', label: 'コントロール', min: 1, max: 255, unit: '', description: '投球の制球力' },
    { key: 'stamina', label: 'スタミナ', min: 1, max: 255, unit: '', description: '投球の持久力' }
  ];

  const changeballAbilities = [
    { key: 'slider', label: 'スライダー', min: 0, max: 7, description: '横滑りする変化球' },
    { key: 'curve', label: 'カーブ', min: 0, max: 7, description: '縦に曲がる変化球' },
    { key: 'fork', label: 'フォーク', min: 0, max: 7, description: '縦に落ちる変化球' },
    { key: 'sinker', label: 'シンカー', min: 0, max: 7, description: '沈む変化球' },
    { key: 'shoot', label: 'シュート', min: 0, max: 7, description: '内角に曲がる変化球' }
  ];

  const specialPitches = [
    { key: 'hSlider', label: 'Hスライダー', description: '高速スライダー' },
    { key: 'sSlider', label: 'Sスライダー', description: 'スローカーブ' },
    { key: 'hSinker', label: 'Hシンカー', description: '高速シンカー' },
    { key: 'slowCurve', label: 'スローカーブ', description: 'ゆっくりとしたカーブ' }
  ];

  const getPitchLevel = (value: number): string => {
    if (value >= 6) return 'S';
    if (value >= 5) return 'A';
    if (value >= 4) return 'B';
    if (value >= 3) return 'C';
    if (value >= 2) return 'D';
    if (value >= 1) return 'E';
    return 'なし';
  };

  const getPitchLevelColor = (level: string): string => {
    switch (level) {
      case 'S': return 'bg-purple-500';
      case 'A': return 'bg-red-500';
      case 'B': return 'bg-orange-500';
      case 'C': return 'bg-yellow-500';
      case 'D': return 'bg-green-500';
      case 'E': return 'bg-blue-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* 投球フォーム */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 card-hover">
        <h4 className="text-lg font-medium text-gray-800 mb-4">投球フォーム</h4>
        <select
          value={playerData.pitchingForm}
          onChange={(e) => handleChange('pitchingForm', parseInt(e.target.value))}
          className="input-field"
        >
          <option value={0}>ノーマル</option>
          <option value={1}>オーバースロー1</option>
          <option value={2}>オーバースロー2</option>
          <option value={3}>オーバースロー3</option>
          <option value={4}>スリークォーター1</option>
          <option value={5}>スリークォーター2</option>
          <option value={6}>サイドスロー1</option>
          <option value={7}>サイドスロー2</option>
          <option value={8}>はがね投法1</option>
          <option value={9}>はがね投法2</option>
        </select>
      </div>

      {/* 基本投手能力 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 card-hover">
        <h4 className="text-lg font-medium text-gray-800 mb-4">基本能力</h4>
        <div className="space-y-6">
          {pitchingAbilities.map(({ key, label, min, max, unit, description }) => (
            <div key={key} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-lg font-medium text-gray-800">{label}</label>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-blue-600">
                    {playerData[key as keyof PlayerData] as number}{unit}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>最低: {min}{unit}</span>
                  <span>最高: {max}{unit}</span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  value={playerData[key as keyof PlayerData] as number}
                  onChange={(e) => handleChange(key as keyof PlayerData, parseInt(e.target.value))}
                  className="slider w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 変化球 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 card-hover">
        <h4 className="text-lg font-medium text-gray-800 mb-4">変化球</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {changeballAbilities.map(({ key, label, min, max, description }) => (
            <div key={key} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-lg font-medium text-gray-800">{label}</label>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-bold text-white rounded ${getPitchLevelColor(getPitchLevel(playerData[key as keyof PlayerData] as number))}`}>
                    {getPitchLevel(playerData[key as keyof PlayerData] as number)}
                  </span>
                  <span className="text-lg font-bold text-gray-800">
                    {playerData[key as keyof PlayerData] as number}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>なし</span>
                  <span>最高</span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  value={playerData[key as keyof PlayerData] as number}
                  onChange={(e) => handleChange(key as keyof PlayerData, parseInt(e.target.value))}
                  className="slider w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 特殊変化球 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 card-hover">
        <h4 className="text-lg font-medium text-gray-800 mb-4">特殊変化球</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specialPitches.map(({ key, label, description }) => (
            <label key={key} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-green-50 transition-colors">
                              <input
                  type="checkbox"
                  checked={playerData[key as keyof PlayerData] as boolean}
                  onChange={(e) => handleChange(key as keyof PlayerData, e.target.checked)}
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
              <div>
                <span className="font-medium text-gray-800">{label}</span>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </label>
          ))}
        </div>
        
        <div className="mt-6 space-y-3">
          <label className="text-lg font-medium text-gray-800">ナックル系</label>
          <select
            value={playerData.knuckleball}
            onChange={(e) => handleChange('knuckleball', parseInt(e.target.value))}
            className="input-field"
          >
            <option value={0}>なし</option>
            <option value={1}>ナックル</option>
            <option value={2}>ナックルボール</option>
            <option value={3}>その他1</option>
            <option value={4}>その他2</option>
          </select>
        </div>
      </div>

      {/* 投手能力サマリー */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
        <h4 className="text-lg font-medium text-gray-800 mb-4">投手能力サマリー</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{playerData.ballSpeed}</div>
            <div className="text-xs text-gray-600">球速(km/h)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{playerData.control}</div>
            <div className="text-xs text-gray-600">制球力</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{playerData.stamina}</div>
            <div className="text-xs text-gray-600">スタミナ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {[playerData.slider, playerData.curve, playerData.fork, playerData.sinker, playerData.shoot]
                .filter(level => level > 0).length}
            </div>
            <div className="text-xs text-gray-600">変化球数</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitcherForm;