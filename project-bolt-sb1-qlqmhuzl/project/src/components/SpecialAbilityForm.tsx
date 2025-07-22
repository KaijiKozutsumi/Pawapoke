import React from 'react';
import { PlayerData, specialAbilitiesList } from '../types/PlayerData';

interface SpecialAbilityFormProps {
  playerData: PlayerData;
  onPlayerChange: (playerData: PlayerData) => void;
}

const SpecialAbilityForm: React.FC<SpecialAbilityFormProps> = ({ playerData, onPlayerChange }) => {
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

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {specialAbilitiesList.map((ability) => (
          <button
            key={ability}
            onClick={() => toggleSpecialAbility(ability)}
            className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              playerData.specialAbilities.includes(ability)
                ? 'bg-green-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
            }`}
          >
            {ability}
          </button>
        ))}
      </div>
      <div className="mt-4 p-3 bg-green-50 rounded-lg">
        <p className="text-sm text-green-700">
          選択中の特殊能力: <span className="font-medium">{playerData.specialAbilities.length}</span>個
        </p>
      </div>
    </div>
  );
};

export default SpecialAbilityForm;