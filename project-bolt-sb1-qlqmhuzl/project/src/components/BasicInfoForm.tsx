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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          選手名
        </label>
        <input
          type="text"
          value={playerData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="選手名を入力"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          背番号
        </label>
        <input
          type="number"
          min="1"
          max="99"
          value={playerData.uniformNumber}
          onChange={(e) => handleChange('uniformNumber', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ポジション
        </label>
        <select
          value={playerData.position}
          onChange={(e) => handleChange('position', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          {positions.map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          打席
        </label>
        <select
          value={playerData.battingStyle}
          onChange={(e) => handleChange('battingStyle', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          <option value="右打ち">右打ち</option>
          <option value="左打ち">左打ち</option>
          <option value="両打ち">両打ち</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          投球腕
        </label>
        <select
          value={playerData.throwingArm}
          onChange={(e) => handleChange('throwingArm', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          <option value="右投げ">右投げ</option>
          <option value="左投げ">左投げ</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          チーム
        </label>
        <select
          value={playerData.team}
          onChange={(e) => handleChange('team', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          {teams.map(team => (
            <option key={team.code} value={team.code}>{team.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BasicInfoForm;