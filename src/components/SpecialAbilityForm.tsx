import React, { useState } from 'react';
import { PlayerData, specialAbilitiesList } from '../types/PlayerData';

interface SpecialAbilityFormProps {
  playerData: PlayerData;
  onPlayerChange: (playerData: PlayerData) => void;
}

const SpecialAbilityForm: React.FC<SpecialAbilityFormProps> = ({ playerData, onPlayerChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleSpecialAbility = (ability: string) => {
    const currentAbilities = playerData.specialAbilities;
    let newAbilities;
    
    if (currentAbilities.includes(ability)) {
      newAbilities = currentAbilities.filter(a => a !== ability);
    } else {
      newAbilities = [...currentAbilities, ability];
    }
    
    onPlayerChange({
      ...playerData,
      specialAbilities: newAbilities
    });
  };

  // 特殊能力をカテゴリ別に分類
  const abilityCategories = {
    'all': 'すべて',
    'batting': '打撃系',
    'pitching': '投球系',
    'fielding': '守備系',
    'mental': 'メンタル系',
    'special': '特殊系'
  };

  const categorizedAbilities = {
    batting: ['パワーヒッター', 'アベレージヒッター', 'チャンスメーカー', '勝負強い', 'サヨナラ男', '代打○', '対左投手○', '対右投手○', 'バント○', '満塁男'],
    pitching: ['鉄腕', '完投タイプ', 'リリーフエース', '中継ぎエース', 'ピンチ○', 'ノビ○', 'キレ○', '重い球', 'クイック○', 'リリース○', '低め○'],
    fielding: ['鉄壁', '俊足', '強肩', '盗塁王'],
    mental: ['逆境○', 'ムラッ気', 'ポーカーフェイス'],
    special: ['呪縛', '打たれ弱い', '負け運', '逃げ球', '三振', 'バント◎', 'ケガしにくさ○']
  };

  const getFilteredAbilities = () => {
    let abilities = specialAbilitiesList;
    
    // カテゴリフィルター
    if (selectedCategory !== 'all') {
      abilities = categorizedAbilities[selectedCategory as keyof typeof categorizedAbilities] || [];
    }
    
    // 検索フィルター
    if (searchTerm) {
      abilities = abilities.filter(ability => 
        ability.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return abilities;
  };

  const getAbilityCategory = (ability: string): string => {
    for (const [category, abilities] of Object.entries(categorizedAbilities)) {
      if (abilities.includes(ability)) {
        return category;
      }
    }
    return 'special';
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'batting': return 'bg-red-500';
      case 'pitching': return 'bg-blue-500';
      case 'fielding': return 'bg-green-500';
      case 'mental': return 'bg-purple-500';
      case 'special': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredAbilities = getFilteredAbilities();

  return (
    <div className="space-y-6">
      {/* 検索とフィルター */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              検索
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
              placeholder="特殊能力を検索..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              カテゴリ
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field"
            >
              {Object.entries(abilityCategories).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 選択中の特殊能力 */}
      {playerData.specialAbilities.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
          <h4 className="font-medium text-gray-800 mb-3">
            選択中の特殊能力 ({playerData.specialAbilities.length}個)
          </h4>
          <div className="flex flex-wrap gap-2">
            {playerData.specialAbilities.map((ability, index) => (
              <span 
                key={index}
                className={`px-3 py-1 text-sm font-medium text-white rounded-full ${getCategoryColor(getAbilityCategory(ability))} cursor-pointer hover:opacity-80 transition-opacity`}
                onClick={() => toggleSpecialAbility(ability)}
                title="クリックで削除"
              >
                {ability} ×
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 特殊能力一覧 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h4 className="font-medium text-gray-800 mb-4">
          特殊能力一覧 ({filteredAbilities.length}個)
        </h4>
        
        {filteredAbilities.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            条件に一致する特殊能力が見つかりません
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredAbilities.map((ability) => {
              const isSelected = playerData.specialAbilities.includes(ability);
              const category = getAbilityCategory(ability);
              const categoryColor = getCategoryColor(category);
              
              return (
                <button
                  key={ability}
                  onClick={() => toggleSpecialAbility(ability)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                    isSelected
                      ? `${categoryColor} text-white shadow-lg transform scale-105`
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{ability}</span>
                    {isSelected && (
                      <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
                        選択中
                      </span>
                    )}
                  </div>
                  <div className={`text-xs mt-1 ${isSelected ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
                    {abilityCategories[category as keyof typeof abilityCategories]}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* カテゴリ別サマリー */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200">
        <h4 className="font-medium text-gray-800 mb-3">カテゴリ別サマリー</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {Object.entries(abilityCategories).filter(([key]) => key !== 'all').map(([category, label]) => {
            const categoryAbilities = categorizedAbilities[category as keyof typeof categorizedAbilities] || [];
            const selectedCount = categoryAbilities.filter(ability => 
              playerData.specialAbilities.includes(ability)
            ).length;
            
            return (
              <div key={category} className="text-center">
                <div className={`text-lg font-bold ${getCategoryColor(category)} text-white rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center`}>
                  {selectedCount}
                </div>
                <div className="text-xs text-gray-600">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecialAbilityForm;