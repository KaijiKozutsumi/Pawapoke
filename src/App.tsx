import React, { useState } from 'react';
<<<<<<< HEAD
import { PlayerData } from './types/PlayerData';
import { BasicInfoForm } from './components/BasicInfoForm';
import AbilityForm from './components/AbilityForm';
import PitcherForm from './components/PitcherForm';
import { SpecialAbilityForm } from './components/SpecialAbilityForm';
import { PlayerPreview } from './components/PlayerPreview';
import { PasswordGenerator } from './components/PasswordGenerator';

const initialPlayerData: PlayerData = {
  // 基本情報
  name: '',
  uniformNumber: 1,
  mainPosition: 0,
  subPosition1: 0,
  subPosition2: 0,
  throwingArm: 'right',
  battingStyle: 'right',
  battingForm: 0,
  pitchingForm: 0,
  team: 0,
  skinColor: 0,
  origin: 513, // パワポケ5
  face: 0,
  manufacturingNumber: 0,
  superSpecialAbility: 0,
  
  // 能力値
  power: 100,
  meatCursor: 4,
  shoulder: 8,
  running: 8,
  fielding: 8,
  errorRate: 8,
  
  // 投手能力
  ballSpeed: 100,
  control: 100,
  stamina: 100,
  slider: 50,
  curve: 50,
  fork: 50,
  sinker: 50,
  shoot: 50,
  
  // 特殊変化球
  hSinker: false,
  sSlider: false,
  hSlider: false,
  slowCurve: false,
  forkSpecialType: 0,
  
  // 野手特殊能力 (全40個)
  wideAngle: false,
  fielderIntimidation: false,
  midGameSubstitution: false,
  heavySwing: false,
  pinchRunner: false,
  defensivePlayer: false,
  pinchHitter: false,
  fielderPopular: false,
  infieldHit: false,
  sayonara: false,
  pushHit: false,
  adversity: false,
  leftPitcherWeak: false,
  leftPitcherStrong: false,
  chanceWeak: false,
  chanceStrong: false,
  bodyCheck: false,
  headSliding: false,
  buntMaster: false,
  buntGood: false,
  powerHitter: false,
  averageHitter: false,
  catcherMaster: false,
  catcherGood: false,
  baseRunningWeak: false,
  baseRunningStrong: false,
  defensiveExpert: false,
  blockGood: false,
  throwGood: false,
  stealWeak: false,
  stealStrong: false,
  injuryWeak: false,
  injuryStrong: false,
  strikeout: false,
  moodWeak: false,
  moodStrong: false,
  consecutiveHit: false,
  tenaciousHit: false,
  solidHit: false,
  gbColor: false,
  pinchHitGood: false,
  error: false,
  moodMaker: false,
  fullBase: false,
  stability: false,
  firstPitch: false,
  fielderInconsistent: false,
  
  // 投手特殊能力 (全40個)
  pitcherWideAngle: false,
  pitcherFielderIntimidation: false,
  pitcherMidGameSubstitution: false,
  pitcherHeavySwing: false,
  pitcherPinchRunner: false,
  pitcherDefensivePlayer: false,
  pitcherPinchHitter: false,
  pitcherFielderPopular: false,
  pitcherInfieldHit: false,
  pitcherSayonara: false,
  pitcherPushHit: false,
  pitcherAdversity: false,
  pitcherLeftPitcherWeak: false,
  pitcherLeftPitcherStrong: false,
  pitcherChanceWeak: false,
  pitcherChanceStrong: false,
  pitcherBodyCheck: false,
  pitcherHeadSliding: false,
  pitcherBuntMaster: false,
  pitcherBuntGood: false,
  pitcherPowerHitter: false,
  pitcherAverageHitter: false,
  pitcherCatcherMaster: false,
  pitcherCatcherGood: false,
  pitcherBaseRunningWeak: false,
  pitcherBaseRunningStrong: false,
  pitcherDefensiveExpert: false,
  pitcherBlockGood: false,
  pitcherThrowGood: false,
  pitcherStealWeak: false,
  pitcherStealStrong: false,
  pitcherInjuryWeak: false,
  pitcherInjuryStrong: false,
  pitcherStrikeout: false,
  pitcherMoodWeak: false,
  pitcherMoodStrong: false,
  pitcherConsecutiveHit: false,
  pitcherTenaciousHit: false,
  pitcherSolidHit: false,
  pitcherGbColor: false,
  pitcherPinchHitGood: false,
  pitcherError: false,
  pitcherMoodMaker: false,
  pitcherFullBase: false,
  pitcherStability: false,
  pitcherFirstPitch: false,
  pitcherFielderInconsistent: false,
};

function App() {
  const [playerData, setPlayerData] = useState<PlayerData>(initialPlayerData);

  const updatePlayerData = (updates: Partial<PlayerData>) => {
    setPlayerData(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          パワポケ5以降 パスワード生成器
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <BasicInfoForm 
              playerData={playerData} 
              onUpdate={updatePlayerData} 
            />
            <AbilityForm 
              playerData={playerData} 
              onUpdate={updatePlayerData} 
            />
            <PitcherForm 
              playerData={playerData} 
              onUpdate={updatePlayerData} 
            />
            <SpecialAbilityForm 
              playerData={playerData} 
              onUpdate={updatePlayerData} 
            />
          </div>
          
          <div className="space-y-6">
            <PlayerPreview playerData={playerData} />
            <PasswordGenerator playerData={playerData} />
          </div>
        </div>
=======
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
>>>>>>> 401a31cf12125f6dac36644b15b2f768db325a25
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default App; 
=======
export default App;
>>>>>>> 401a31cf12125f6dac36644b15b2f768db325a25
