import React from 'react';
import { PlayerData } from '../types/PlayerData';

interface AbilityFormProps {
  playerData: PlayerData;
  onPlayerChange: (playerData: PlayerData) => void;
}

const AbilityForm: React.FC<AbilityFormProps> = ({ playerData, onPlayerChange }) => {
  const abilities = [
    { key: 'meet', label: 'ミート', color: 'bg-red-500', min: 1, max: 15, description: 'バットに当てる能力' },
    { key: 'power', label: 'パワー', color: 'bg-orange-500', min: 1, max: 255, description: '打球の飛距離' },
    { key: 'runningSpeed', label: '走力', color: 'bg-blue-500', min: 1, max: 15, description: '走塁速度' },
    { key: 'armStrength', label: '肩力', color: 'bg-purple-500', min: 1, max: 15, description: '送球の強さ' },
    { key: 'fielding', label: '守備力', color: 'bg-green-500', min: 1, max: 15, description: '守備の上手さ' },
    { key: 'errorRate', label: 'エラー率', color: 'bg-yellow-500', min: 1, max: 15, description: 'エラーの少なさ' },
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

  const getRankColor = (rank: string): string => {
    switch (rank) {
      case 'S': return 'bg-purple-500';
      case 'A': return 'bg-red-500';
      case 'B': return 'bg-orange-500';
      case 'C': return 'bg-yellow-500';
      case 'D': return 'bg-green-500';
      case 'E': return 'bg-blue-500';
      case 'F': return 'bg-gray-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* 能力値サマリー */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200">
        <h4 className="font-medium text-gray-800 mb-3">能力値サマリー</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {abilities.map(({ key, label, color }) => {
            const value = playerData[key as keyof PlayerData] as number;
            const rank = key === 'power' ? Math.floor(value / 20) : getAbilityRank(value);
            const rankColor = key === 'power' ? getRankColor(rank.toString()) : getRankColor(rank.toString());
            
            return (
              <div key={key} className="flex items-center justify-between bg-white p-2 rounded border">
                <span className="text-sm text-gray-600">{label}</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-bold text-white rounded ${rankColor}`}>
                    {rank}
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    {key === 'power' ? Math.floor(value / 20) : value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 個別能力値設定 */}
      <div className="space-y-6">
        {abilities.map(({ key, label, color, min, max, description }) => (
          <div key={key} className="bg-white p-4 rounded-lg border border-gray-200 card-hover">
            <div className="flex items-center justify-between mb-3">
              <div>
                <label className="text-lg font-medium text-gray-800">{label}</label>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 text-sm font-bold text-white rounded-full ${color}`}>
                  {key === 'power' ? Math.floor((playerData[key as keyof PlayerData] as number) / 20) : getAbilityRank(playerData[key as keyof PlayerData] as number)}
                </span>
                <span className="text-lg font-bold text-gray-800 w-12 text-right">
                  {playerData[key as keyof PlayerData] as number}
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>最低: {min}</span>
                <span>最高: {max}</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min={min}
                  max={max}
                  step="1"
                  value={playerData[key as keyof PlayerData] as number}
                  onChange={(e) => handleAbilityChange(key, parseInt(e.target.value))}
                  className="slider w-full"
                />
                <div 
                  className={`absolute top-0 h-2 ${color} rounded-lg pointer-events-none transition-all duration-300`}
                  style={{ 
                    width: `${((playerData[key as keyof PlayerData] as number - min) / (max - min)) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 能力値バランス表示 */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
        <h4 className="font-medium text-gray-800 mb-3">能力値バランス</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">{playerData.meet}</div>
            <div className="text-xs text-gray-600">ミート</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">{Math.floor(playerData.power / 20)}</div>
            <div className="text-xs text-gray-600">パワー</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">{playerData.runningSpeed}</div>
            <div className="text-xs text-gray-600">走力</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-500">{playerData.armStrength}</div>
            <div className="text-xs text-gray-600">肩力</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbilityForm;