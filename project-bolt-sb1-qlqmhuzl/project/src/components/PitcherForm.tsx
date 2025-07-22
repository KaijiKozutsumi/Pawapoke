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
    { key: 'ballSpeed', label: '球速', min: 80, max: 180, unit: 'km/h' },
    { key: 'control', label: 'コントロール', min: 1, max: 255, unit: '' },
    { key: 'stamina', label: 'スタミナ', min: 1, max: 255, unit: '' }
  ];

  const changeballAbilities = [
    { key: 'slider', label: 'スライダー', min: 0, max: 7 },
    { key: 'curve', label: 'カーブ', min: 0, max: 7 },
    { key: 'fork', label: 'フォーク', min: 0, max: 7 },
    { key: 'sinker', label: 'シンカー', min: 0, max: 7 },
    { key: 'shoot', label: 'シュート', min: 0, max: 7 }
  ];

  const specialPitches = [
    { key: 'hSlider', label: 'Hスライダー' },
    { key: 'sSlider', label: 'Sスライダー' },
    { key: 'hSinker', label: 'Hシンカー' },
    { key: 'slowCurve', label: 'スローカーブ' }
  ];

  return (
    <div className="space-y-6">
      {/* 投球フォーム */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          投球フォーム
        </label>
        <select
          value={playerData.pitchingForm}
          onChange={(e) => handleChange('pitchingForm', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
      <div className="space-y-4">
        <h4 className="font-medium text-gray-800">基本能力</h4>
        {pitchingAbilities.map(({ key, label, min, max, unit }) => (
          <div key={key} className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">{label}</label>
              <span className="text-sm text-gray-600">
                {playerData[key as keyof PlayerData] as number}{unit}
              </span>
            </div>
            <input
              type="range"
              min={min}
              max={max}
              value={playerData[key as keyof PlayerData] as number}
              onChange={(e) => handleChange(key, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* 変化球 */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-800">変化球</h4>
        <div className="grid grid-cols-2 gap-4">
          {changeballAbilities.map(({ key, label, min, max }) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">{label}</label>
                <span className="text-sm text-gray-600">
                  {playerData[key as keyof PlayerData] as number}
                </span>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                value={playerData[key as keyof PlayerData] as number}
                onChange={(e) => handleChange(key, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 特殊変化球 */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-800">特殊変化球</h4>
        <div className="grid grid-cols-2 gap-3">
          {specialPitches.map(({ key, label }) => (
            <label key={key} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={playerData[key as keyof PlayerData] as boolean}
                onChange={(e) => handleChange(key, e.target.checked)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="text-sm text-gray-700">{label}</span>
            </label>
          ))}
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">ナックル系</label>
          <select
            value={playerData.knuckleball}
            onChange={(e) => handleChange('knuckleball', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value={0}>なし</option>
            <option value={1}>ナックル</option>
            <option value={2}>ナックルボール</option>
            <option value={3}>その他1</option>
            <option value={4}>その他2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PitcherForm;