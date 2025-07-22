import React, { useState } from 'react';
import { Gamepad2, User, Trophy, Zap } from 'lucide-react';
import PlayerForm from './components/PlayerForm';
import PlayerPreview from './components/PlayerPreview';
import PasswordGenerator from './components/PasswordGenerator';
import { PlayerData, defaultPlayerData, defaultPlayerDataPawaPoke4 } from './types/PlayerData';

function App() {
  const [playerData, setPlayerData] = useState<PlayerData>(defaultPlayerData);
  const [generatedPassword, setGeneratedPassword] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<'version' | 'player' | 'password'>('version');
  const [selectedVersion, setSelectedVersion] = useState<string>('pawapoke5');

  const handlePlayerChange = (newPlayerData: PlayerData) => {
    setPlayerData(newPlayerData);
  };

  const handleVersionSelect = (version: string) => {
    setSelectedVersion(version);
    
    // バージョンに応じてデフォルトデータを設定
    if (version === 'pawapoke4') {
      setPlayerData({ ...defaultPlayerDataPawaPoke4, version });
    } else {
      setPlayerData({ ...defaultPlayerData, version });
    }
    
    setCurrentStep('player');
  };

  const handlePlayerComplete = () => {
    setCurrentStep('password');
  };

  const handleBackToPlayer = () => {
    setCurrentStep('player');
  };

  const handleBackToVersion = () => {
    setCurrentStep('version');
  };

  const getVersionDisplayName = (version: string) => {
    return version === 'pawapoke5' ? 'パワポケ5' : 'パワポケ4';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 fade-in">
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 className="w-12 h-12 text-green-600 mr-4 animate-pulse" />
            <h1 className="text-5xl font-bold text-green-800">パワポケ選手パスワード生成</h1>
          </div>
          <p className="text-green-600 text-xl mb-2">パワポケの正確なバイト構造表に基づいたパスワード生成システム</p>
        </div>

        {/* ステップインジケーター */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-1">
            <div className="flex space-x-1">
              <div className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                currentStep === 'version' ? 'bg-green-500 text-white shadow-lg' : 'text-gray-600'
              }`}>
                1. バージョン選択
              </div>
              <div className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                currentStep === 'player' ? 'bg-green-500 text-white shadow-lg' : 'text-gray-600'
              }`}>
                2. 選手仕様選択
              </div>
              <div className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                currentStep === 'password' ? 'bg-green-500 text-white shadow-lg' : 'text-gray-600'
              }`}>
                3. パスワード出力
              </div>
            </div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="fade-in">
          {currentStep === 'version' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">バージョンを選択してください</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button
                    onClick={() => handleVersionSelect('pawapoke5')}
                    className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <h3 className="text-2xl font-bold mb-2">パワポケ5</h3>
                    <p className="text-green-100">パワプロクンポケット5対応</p>
                    <p className="text-green-100 text-sm mt-2">最新のバイト構造表に基づく</p>
                  </button>
                  <button
                    onClick={() => handleVersionSelect('pawapoke4')}
                    className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <h3 className="text-2xl font-bold mb-2">パワポケ4</h3>
                    <p className="text-blue-100">パワプロクンポケット4対応</p>
                    <p className="text-blue-100 text-sm mt-2">クラシック版対応</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'player' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Player Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">選手仕様設定</h2>
                    <span className="text-sm text-gray-500">バージョン: {getVersionDisplayName(selectedVersion)}</span>
                  </div>
                  <PlayerForm 
                    playerData={playerData} 
                    onPlayerChange={handlePlayerChange} 
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handlePlayerComplete}
                    className="btn-primary px-8 py-3 text-lg"
                  >
                    パスワード生成へ進む
                  </button>
                </div>
              </div>

              {/* Side Panel */}
              <div className="space-y-6">
                <PlayerPreview playerData={playerData} />
                <PasswordGenerator 
                  playerData={playerData} 
                  onPasswordGenerated={setGeneratedPassword} 
                />
              </div>
            </div>
          )}

          {currentStep === 'password' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">パスワード出力</h2>
                    <p className="text-gray-500 mt-1">バージョン: {getVersionDisplayName(selectedVersion)}</p>
                  </div>
                  <button
                    onClick={handleBackToPlayer}
                    className="btn-secondary"
                  >
                    選手設定に戻る
                  </button>
                </div>
                
                <div className="space-y-6">
                  <PlayerPreview playerData={playerData} />
                  <PasswordGenerator 
                    playerData={playerData} 
                    onPasswordGenerated={setGeneratedPassword} 
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>パワプロクンポケット選手パスワード生成システム</p>
          <p className="text-sm mt-2">正確なバイト構造表に基づいて生成されています</p>
        </div>
      </div>
    </div>
  );
}

export default App;