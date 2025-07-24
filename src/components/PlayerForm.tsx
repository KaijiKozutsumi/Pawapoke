import React from 'react';
import { User, Settings, Zap, Target } from 'lucide-react';
import { PlayerData, positions, specialAbilitiesList, teams } from '../types/PlayerData';
import BasicInfoForm from './BasicInfoForm';
import AbilityForm from './AbilityForm';
import SpecialAbilityForm from './SpecialAbilityForm';
import PitcherForm from './PitcherForm';

interface PlayerFormProps {
  playerData: PlayerData;
  onPlayerChange: (playerData: PlayerData) => void;
}

const PlayerForm: React.FC<PlayerFormProps> = ({ playerData, onPlayerChange }) => {
  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <User className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">基本情報</h2>
        </div>
        <BasicInfoForm playerData={playerData} onPlayerChange={onPlayerChange} />
      </div>

      {/* Basic Abilities */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Settings className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">基本能力</h2>
        </div>
        <AbilityForm playerData={playerData} onPlayerChange={onPlayerChange} />
      </div>

      {/* Pitcher Abilities */}
      {playerData.position === '投手' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">投手能力</h2>
          </div>
          <PitcherForm playerData={playerData} onPlayerChange={onPlayerChange} />
        </div>
      )}

      {/* Special Abilities */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Zap className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">特殊能力</h2>
        </div>
        <SpecialAbilityForm playerData={playerData} onPlayerChange={onPlayerChange} />
      </div>
    </div>
  );
};

export default PlayerForm;