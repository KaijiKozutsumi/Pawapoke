import React, { useState } from 'react';
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
      </div>
    </div>
  );
}

export default App; 