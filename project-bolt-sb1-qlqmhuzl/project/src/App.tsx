import React, { useState, useEffect } from 'react';
import { Gamepad2, Copy, User, Trophy, Zap } from 'lucide-react';
import PlayerForm from './components/PlayerForm';
import PlayerPreview from './components/PlayerPreview';
import PasswordGenerator from './components/PasswordGenerator';
import { PlayerData, defaultPlayerData } from './types/PlayerData';

function App() {
  const [playerData, setPlayerData] = useState<PlayerData>(defaultPlayerData);
  const [generatedPassword, setGeneratedPassword] = useState<string>('');

  const handlePlayerChange = (newPlayerData: PlayerData) => {
    setPlayerData(newPlayerData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 className="w-10 h-10 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-green-800">パワポケ5 選手パスワード生成</h1>
          </div>
          <p className="text-green-600 text-lg">パワポケ5の正確なバイト構造表に基づいたパスワード生成システム</p>
          <p className="text-green-500 text-sm mt-2">例: 田西◎選手（投手・背番号53・日ハム）</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Player Form */}
          <div className="lg:col-span-2">
            <PlayerForm 
              playerData={playerData} 
              onPlayerChange={handlePlayerChange} 
            />
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Player Preview */}
            <PlayerPreview playerData={playerData} />
            
            {/* Password Generator */}
            <PasswordGenerator 
              playerData={playerData} 
              onPasswordGenerated={setGeneratedPassword} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;