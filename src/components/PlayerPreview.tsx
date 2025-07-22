import React from 'react';
import { Trophy, Star, Target, Zap, Shield, Wind } from 'lucide-react';
import { PlayerData, teams } from '../types/PlayerData';

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

  const getTeamName = (teamCode: number): string => {
    return teams.find(t => t.code === teamCode)?.name || '不明';
  };

  const getPositionIcon = (position: string) => {
    switch (position) {
      case '投手': return <Target className="w-4 h-4" />;
      case '捕手': return <Shield className="w-4 h-4" />;
      case '内野手': return <Star className="w-4 h-4" />;
      case '外野手': return <Wind className="w-4 h-4" />;
      default: return <Trophy className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
      <div className="flex items-center mb-6">
        <Trophy className="w-6 h-6 text-orange-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-800">選手プレビュー</h3>
      </div>
      
      <div className="space-y-6">
        {/* 選手基本情報 */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-2xl font-bold">{playerData.name}</h4>
            <div className="flex items-center space-x-2">
              {getPositionIcon(playerData.position)}
              <span className="text-lg font-medium">#{playerData.uniformNumber}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-green-100">
            <div>
              <span className="text-sm">ポジション:</span>
              <span className="font-medium ml-2">{playerData.position}</span>
            </div>
            <div>
              <span className="text-sm">チーム:</span>
              <span className="font-medium ml-2">{getTeamName(playerData.team)}</span>
            </div>
            <div>
              <span className="text-sm">投球:</span>
              <span className="font-medium ml-2">{playerData.throwingArm}</span>
            </div>
            <div>
              <span className="text-sm">打席:</span>
              <span className="font-medium ml-2">{playerData.battingStyle}</span>
            </div>
          </div>
        </div>

        {/* 野手能力 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
          <h5 className="font-medium text-gray-800 mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-blue-500" />
            野手能力
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded border">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">ミート</span>
                <span className={`px-2 py-1 text-xs font-bold text-white rounded ${getRankColor(getAbilityRank(playerData.meet))}`}>
                  {getAbilityRank(playerData.meet)}
                </span>
              </div>
              <div className="text-lg font-bold text-red-500">{playerData.meet}</div>
            </div>
            <div className="bg-white p-3 rounded border">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">パワー</span>
                <span className={`px-2 py-1 text-xs font-bold text-white rounded ${getRankColor(Math.floor(playerData.power / 20).toString())}`}>
                  {Math.floor(playerData.power / 20)}
                </span>
              </div>
              <div className="text-lg font-bold text-orange-500">{Math.floor(playerData.power / 20)}</div>
            </div>
            <div className="bg-white p-3 rounded border">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">走力</span>
                <span className={`px-2 py-1 text-xs font-bold text-white rounded ${getRankColor(getAbilityRank(playerData.runningSpeed))}`}>
                  {getAbilityRank(playerData.runningSpeed)}
                </span>
              </div>
              <div className="text-lg font-bold text-blue-500">{playerData.runningSpeed}</div>
            </div>
            <div className="bg-white p-3 rounded border">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">肩力</span>
                <span className={`px-2 py-1 text-xs font-bold text-white rounded ${getRankColor(getAbilityRank(playerData.armStrength))}`}>
                  {getAbilityRank(playerData.armStrength)}
                </span>
              </div>
              <div className="text-lg font-bold text-purple-500">{playerData.armStrength}</div>
            </div>
            <div className="bg-white p-3 rounded border">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">守備</span>
                <span className={`px-2 py-1 text-xs font-bold text-white rounded ${getRankColor(getAbilityRank(playerData.fielding))}`}>
                  {getAbilityRank(playerData.fielding)}
                </span>
              </div>
              <div className="text-lg font-bold text-green-500">{playerData.fielding}</div>
            </div>
            <div className="bg-white p-3 rounded border">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">エラー率</span>
                <span className={`px-2 py-1 text-xs font-bold text-white rounded ${getRankColor(getAbilityRank(playerData.errorRate))}`}>
                  {getAbilityRank(playerData.errorRate)}
                </span>
              </div>
              <div className="text-lg font-bold text-yellow-500">{playerData.errorRate}</div>
            </div>
          </div>
        </div>

        {/* 投手能力（投手の場合のみ表示） */}
        {playerData.position === '投手' && (
          <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-4 rounded-lg border border-indigo-200">
            <h5 className="font-medium text-gray-800 mb-3 flex items-center">
              <Target className="w-4 h-4 mr-2 text-indigo-500" />
              投手能力
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded border">
                <div className="text-sm text-gray-600 mb-1">球速</div>
                <div className="text-lg font-bold text-indigo-600">{playerData.ballSpeed}km/h</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="text-sm text-gray-600 mb-1">制球力</div>
                <div className="text-lg font-bold text-cyan-600">{playerData.control}</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="text-sm text-gray-600 mb-1">スタミナ</div>
                <div className="text-lg font-bold text-pink-600">{playerData.stamina}</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="text-sm text-gray-600 mb-1">変化球</div>
                <div className="text-lg font-bold text-emerald-600">
                  {[playerData.slider, playerData.curve, playerData.fork, playerData.sinker, playerData.shoot]
                    .filter(level => level > 0).length}種
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 特殊能力 */}
        {playerData.specialAbilities.length > 0 && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
            <h5 className="font-medium text-gray-800 mb-3 flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              特殊能力 ({playerData.specialAbilities.length}個)
            </h5>
            <div className="flex flex-wrap gap-2">
              {playerData.specialAbilities.map((ability, index) => (
                <span 
                  key={index}
                  className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium"
                >
                  {ability}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 総合評価 */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200">
          <h5 className="font-medium text-gray-800 mb-3">総合評価</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{averageAbility}</div>
              <div className="text-xs text-gray-600">平均能力</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{totalAbility}</div>
              <div className="text-xs text-gray-600">総合能力</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{playerData.specialAbilities.length}</div>
              <div className="text-xs text-gray-600">特殊能力</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {playerData.position === '投手' ? 
                  [playerData.slider, playerData.curve, playerData.fork, playerData.sinker, playerData.shoot]
                    .filter(level => level > 0).length : 
                  'N/A'
                }
              </div>
              <div className="text-xs text-gray-600">
                {playerData.position === '投手' ? '変化球数' : '野手'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPreview;