import React from 'react';
import { PlayerData } from '../types/PlayerData';

interface AbilityFormProps {
  playerData: PlayerData;
  onPlayerChange: (playerData: PlayerData) => void;
}

const AbilityForm: React.FC<AbilityFormProps> = ({ playerData, onPlayerChange }) => {
  const abilities = [
    { key: 'meet', label: 'ミート', color: 'bg-red-500', min: 1, max: 15 },
    { key: 'power', label: 'パワー', color: 'bg-orange-500', min: 1, max: 255 },
    { key: 'runningSpeed', label: '走力', color: 'bg-blue-500', min: 1, max: 15 },
    { key: 'armStrength', label: '肩力', color: 'bg-purple-500', min: 1, max: 15 },
    { key: 'fielding', label: '守備力', color: 'bg-green-500', min: 1, max: 15 },
    { key: 'errorRate', label: 'エラー率', color: 'bg-yellow-500', min: 1, max: 15 },
  ];

  const handleAbilityChange = (ability: string, value: number) => {
    onPlayerChange({
      ...playerData,
      [ability]: value
    });
  };

  const getAbilityRank = (value: number): string => {
    if (value >= 13) return 'S';
    if (value >= 11) return 'A';
    if (value >= 9) return 'B';
    if (value >= 7) return 'C';
    if (value >= 5) return 'D';
    if (value >= 3) return 'E';
    if (value >= 1) return 'F';
    return 'G';
  };

  return (
    <div className="space-y-6">
      {abilities.map(({ key, label, color, min, max }) => (
        <div key={key} className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs font-bold text-white rounded ${color}`}>
                {key === 'power' ? Math.floor((playerData[key as keyof PlayerData] as number) / 20) : getAbilityRank(playerData[key as keyof PlayerData] as number)}
              </span>
              <span className="text-sm text-gray-600 w-8">
                {playerData[key as keyof PlayerData] as number}
              </span>
            </div>
          </div>
          <div className="relative">
            <input
              type="range"
              min={min}
              max={max}
              step="1"
              value={playerData[key as keyof PlayerData] as number}
              onChange={(e) => handleAbilityChange(key, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div 
              className={`absolute top-0 h-2 ${color} rounded-lg pointer-events-none`}
              style={{ 
                width: `${((playerData[key as keyof PlayerData] as number - min) / (max - min)) * 100}%`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AbilityForm;