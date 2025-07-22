import React from 'react';
import { PlayerData, positions, teams } from '../types/PlayerData';

interface BasicInfoFormProps {
  playerData: PlayerData;
  onPlayerChange: (playerData: PlayerData) => void;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ playerData, onPlayerChange }) => {
  const handleChange = (field: keyof PlayerData, value: string | number) => {
    onPlayerChange({
      ...playerData,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      {/* 選手名と背番号 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            選手名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={playerData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="input-field"
            placeholder="例: 田西◎"
            maxLength={6}
          />
          <p className="text-xs text-gray-500 mt-1">最大6文字まで</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            背番号 <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            min="1"
            max="99"
            value={playerData.uniformNumber}
            onChange={(e) => handleChange('uniformNumber', parseInt(e.target.value) || 1)}
            className="input-field"
          />
          <p className="text-xs text-gray-500 mt-1">1-99の範囲</p>
        </div>
      </div>

      {/* ポジションとチーム */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ポジション <span className="text-red-500">*</span>
          </label>
          <select
            value={playerData.position}
            onChange={(e) => handleChange('position', e.target.value)}
            className="input-field"
          >
            {positions.map(pos => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            チーム <span className="text-red-500">*</span>
          </label>
          <select
            value={playerData.team}
            onChange={(e) => handleChange('team', parseInt(e.target.value))}
            className="input-field"
          >
            {teams.map(team => (
              <option key={team.code} value={team.code}>{team.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 投打設定 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            打席 <span className="text-red-500">*</span>
          </label>
          <select
            value={playerData.battingStyle}
            onChange={(e) => handleChange('battingStyle', e.target.value)}
            className="input-field"
          >
            <option value="右打ち">右打ち</option>
            <option value="左打ち">左打ち</option>
            <option value="両打ち">両打ち</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            投球腕 <span className="text-red-500">*</span>
          </label>
          <select
            value={playerData.throwingArm}
            onChange={(e) => handleChange('throwingArm', e.target.value)}
            className="input-field"
          >
            <option value="右投げ">右投げ</option>
            <option value="左投げ">左投げ</option>
          </select>
        </div>
      </div>

      {/* 選手情報サマリー */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-medium text-gray-800 mb-2">選手情報サマリー</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div>
            <span className="text-gray-600">名前:</span>
            <span className="font-medium ml-1">{playerData.name}</span>
          </div>
          <div>
            <span className="text-gray-600">背番号:</span>
            <span className="font-medium ml-1">#{playerData.uniformNumber}</span>
          </div>
          <div>
            <span className="text-gray-600">ポジション:</span>
            <span className="font-medium ml-1">{playerData.position}</span>
          </div>
          <div>
            <span className="text-gray-600">チーム:</span>
            <span className="font-medium ml-1">{teams.find(t => t.code === playerData.team)?.name}</span>
          </div>
        </div>
        <div className="mt-2 text-sm">
          <span className="text-gray-600">投打:</span>
          <span className="font-medium ml-1">{playerData.throwingArm} {playerData.battingStyle}</span>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;