import React from 'react';
import { Trophy } from 'lucide-react';
import { PlayerData } from '../types/PlayerData';

interface PlayerPreviewProps {
  playerData: PlayerData;
}

const PlayerPreview: React.FC<PlayerPreviewProps> = ({ playerData }) => {
  const totalAbility = playerData.meet + Math.floor(playerData.power / 20) + playerData.runningSpeed + 
                      playerData.armStrength + playerData.fielding + playerData.errorRate;
  
  const averageAbility = Math.round(totalAbility / 6);

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
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Trophy className="w-6 h-6 text-orange-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-800">選手プレビュー</h3>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
          <h4 className="text-lg font-bold">{playerData.name}</h4>
          <p className="text-green-100">#{playerData.uniformNumber} | {playerData.position}</p>
          <p className="text-green-100 text-sm">
            {playerData.battingStyle} | {playerData.throwingArm}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-red-50 p-2 rounded">
            <span className="text-gray-600">ミート:</span>
            <span className="font-bold ml-1">{getAbilityRank(playerData.meet)}</span>
          </div>
          <div className="bg-orange-50 p-2 rounded">
            <span className="text-gray-600">パワー:</span>
            <span className="font-bold ml-1">{Math.floor(playerData.power / 20)}</span>
          </div>
          <div className="bg-blue-50 p-2 rounded">
            <span className="text-gray-600">走力:</span>
            <span className="font-bold ml-1">{getAbilityRank(playerData.runningSpeed)}</span>
          </div>
          <div className="bg-purple-50 p-2 rounded">
            <span className="text-gray-600">肩力:</span>
            <span className="font-bold ml-1">{getAbilityRank(playerData.armStrength)}</span>
          </div>
          <div className="bg-green-50 p-2 rounded">
            <span className="text-gray-600">守備:</span>
            <span className="font-bold ml-1">{getAbilityRank(playerData.fielding)}</span>
          </div>
          <div className="bg-yellow-50 p-2 rounded">
            <span className="text-gray-600">エラー率:</span>
            <span className="font-bold ml-1">{getAbilityRank(playerData.errorRate)}</span>
          </div>
        </div>

        {playerData.position === '投手' && (
          <div className="grid grid-cols-2 gap-3 text-sm mt-4">
            <div className="bg-indigo-50 p-2 rounded">
              <span className="text-gray-600">球速:</span>
              <span className="font-bold ml-1">{playerData.ballSpeed}km/h</span>
            </div>
            <div className="bg-cyan-50 p-2 rounded">
              <span className="text-gray-600">制球:</span>
              <span className="font-bold ml-1">{playerData.control}</span>
            </div>
            <div className="bg-pink-50 p-2 rounded">
              <span className="text-gray-600">スタミナ:</span>
              <span className="font-bold ml-1">{playerData.stamina}</span>
            </div>
            <div className="bg-emerald-50 p-2 rounded">
              <span className="text-gray-600">変化球:</span>
              <span className="font-bold ml-1">{playerData.slider + playerData.curve + playerData.fork}種</span>
            </div>
          </div>
        )}

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">背番号: <span className="font-medium">{playerData.uniformNumber}</span></p>
          <p className="text-sm text-gray-600">投打: <span className="font-medium">{playerData.throwingArm} {playerData.battingStyle}</span></p>
          <p className="text-sm text-gray-600">特殊能力: <span className="font-medium">{playerData.specialAbilities.length}個</span></p>
        </div>

        {playerData.specialAbilities.length > 0 && (
          <div>
            <h5 className="font-medium text-gray-700 mb-2">特殊能力一覧</h5>
            <div className="flex flex-wrap gap-1">
              {playerData.specialAbilities.map((ability, index) => (
                <span 
                  key={index}
                  className="bg-green-500 text-white text-xs px-2 py-1 rounded"
                >
                  {ability}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerPreview;