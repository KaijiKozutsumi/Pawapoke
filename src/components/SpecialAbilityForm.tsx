<<<<<<< HEAD
import React from 'react';
import { PlayerData } from '../types/PlayerData';

interface SpecialAbilityFormProps {
  playerData: PlayerData;
  onUpdate: (updates: Partial<PlayerData>) => void;
}

export const SpecialAbilityForm: React.FC<SpecialAbilityFormProps> = ({ playerData, onUpdate }) => {
  const handleFielderAbilityChange = (ability: keyof PlayerData, checked: boolean) => {
    onUpdate({ [ability]: checked });
  };

  const handlePitcherAbilityChange = (ability: keyof PlayerData, checked: boolean) => {
    onUpdate({ [ability]: checked });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">特殊能力</h2>
      
      {/* 野手特殊能力 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-600">野手特殊能力</h3>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.wideAngle}
              onChange={(e) => handleFielderAbilityChange('wideAngle', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">広角打法</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.fielderIntimidation}
              onChange={(e) => handleFielderAbilityChange('fielderIntimidation', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">野手威圧感</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.midGameSubstitution}
              onChange={(e) => handleFielderAbilityChange('midGameSubstitution', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">途中交代</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.heavySwing}
              onChange={(e) => handleFielderAbilityChange('heavySwing', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">強振多用</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pinchRunner}
              onChange={(e) => handleFielderAbilityChange('pinchRunner', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">代走要員</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.defensivePlayer}
              onChange={(e) => handleFielderAbilityChange('defensivePlayer', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">守備要員</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pinchHitter}
              onChange={(e) => handleFielderAbilityChange('pinchHitter', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">代打要員</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.fielderPopular}
              onChange={(e) => handleFielderAbilityChange('fielderPopular', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">野手人気者</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.infieldHit}
              onChange={(e) => handleFielderAbilityChange('infieldHit', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">内野安打○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.sayonara}
              onChange={(e) => handleFielderAbilityChange('sayonara', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">サヨナラ男</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pushHit}
              onChange={(e) => handleFielderAbilityChange('pushHit', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">流し打ち</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.adversity}
              onChange={(e) => handleFielderAbilityChange('adversity', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">逆境○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.leftPitcherWeak}
              onChange={(e) => handleFielderAbilityChange('leftPitcherWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">対左投手×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.leftPitcherStrong}
              onChange={(e) => handleFielderAbilityChange('leftPitcherStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">対左投手○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.chanceWeak}
              onChange={(e) => handleFielderAbilityChange('chanceWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">チャンス×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.chanceStrong}
              onChange={(e) => handleFielderAbilityChange('chanceStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">チャンス○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.bodyCheck}
              onChange={(e) => handleFielderAbilityChange('bodyCheck', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">体当たり</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.headSliding}
              onChange={(e) => handleFielderAbilityChange('headSliding', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ヘッドスライディング</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.buntMaster}
              onChange={(e) => handleFielderAbilityChange('buntMaster', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">バント◎</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.buntGood}
              onChange={(e) => handleFielderAbilityChange('buntGood', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">バント○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.powerHitter}
              onChange={(e) => handleFielderAbilityChange('powerHitter', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">パワーヒッター</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.averageHitter}
              onChange={(e) => handleFielderAbilityChange('averageHitter', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">アベレージヒッター</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.catcherMaster}
              onChange={(e) => handleFielderAbilityChange('catcherMaster', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">キャッチャー◎</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.catcherGood}
              onChange={(e) => handleFielderAbilityChange('catcherGood', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">キャッチャー○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.baseRunningWeak}
              onChange={(e) => handleFielderAbilityChange('baseRunningWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">走塁×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.baseRunningStrong}
              onChange={(e) => handleFielderAbilityChange('baseRunningStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">走塁○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.defensiveExpert}
              onChange={(e) => handleFielderAbilityChange('defensiveExpert', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">守備職人</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.blockGood}
              onChange={(e) => handleFielderAbilityChange('blockGood', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ブロック○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.throwGood}
              onChange={(e) => handleFielderAbilityChange('throwGood', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">送球○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.stealWeak}
              onChange={(e) => handleFielderAbilityChange('stealWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">盗塁×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.stealStrong}
              onChange={(e) => handleFielderAbilityChange('stealStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">盗塁○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.injuryWeak}
              onChange={(e) => handleFielderAbilityChange('injuryWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ケガ×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.injuryStrong}
              onChange={(e) => handleFielderAbilityChange('injuryStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ケガ○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.strikeout}
              onChange={(e) => handleFielderAbilityChange('strikeout', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">三振</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.moodWeak}
              onChange={(e) => handleFielderAbilityChange('moodWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ムード×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.moodStrong}
              onChange={(e) => handleFielderAbilityChange('moodStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ムード○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.consecutiveHit}
              onChange={(e) => handleFielderAbilityChange('consecutiveHit', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">連打○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.tenaciousHit}
              onChange={(e) => handleFielderAbilityChange('tenaciousHit', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">粘り打ち</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.solidHit}
              onChange={(e) => handleFielderAbilityChange('solidHit', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">固め打ち</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.gbColor}
              onChange={(e) => handleFielderAbilityChange('gbColor', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">GBカラー</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pinchHitGood}
              onChange={(e) => handleFielderAbilityChange('pinchHitGood', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">代打○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.error}
              onChange={(e) => handleFielderAbilityChange('error', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">エラー</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.moodMaker}
              onChange={(e) => handleFielderAbilityChange('moodMaker', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ムードメーカー</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.fullBase}
              onChange={(e) => handleFielderAbilityChange('fullBase', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">満塁男</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.stability}
              onChange={(e) => handleFielderAbilityChange('stability', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">安定感</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.firstPitch}
              onChange={(e) => handleFielderAbilityChange('firstPitch', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">初球○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.fielderInconsistent}
              onChange={(e) => handleFielderAbilityChange('fielderInconsistent', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">野手ムラッ気</span>
          </label>
        </div>
      </div>

      {/* 投手特殊能力 */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-red-600">投手特殊能力</h3>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherWideAngle}
              onChange={(e) => handlePitcherAbilityChange('pitcherWideAngle', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">四球</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherFielderIntimidation}
              onChange={(e) => handlePitcherAbilityChange('pitcherFielderIntimidation', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">投手威圧感</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherMidGameSubstitution}
              onChange={(e) => handlePitcherAbilityChange('pitcherMidGameSubstitution', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">中継ぎエース</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherHeavySwing}
              onChange={(e) => handlePitcherAbilityChange('pitcherHeavySwing', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">リリーフエース</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherPinchRunner}
              onChange={(e) => handlePitcherAbilityChange('pitcherPinchRunner', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">完投タイプ</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherDefensivePlayer}
              onChange={(e) => handlePitcherAbilityChange('pitcherDefensivePlayer', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">投手人気者</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherPinchHitter}
              onChange={(e) => handlePitcherAbilityChange('pitcherPinchHitter', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">勝ち運</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherFielderPopular}
              onChange={(e) => handlePitcherAbilityChange('pitcherFielderPopular', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">一発</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherInfieldHit}
              onChange={(e) => handlePitcherAbilityChange('pitcherInfieldHit', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">対左打者×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherSayonara}
              onChange={(e) => handlePitcherAbilityChange('pitcherSayonara', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">対左打者○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherPushHit}
              onChange={(e) => handlePitcherAbilityChange('pitcherPushHit', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ランナー×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherAdversity}
              onChange={(e) => handlePitcherAbilityChange('pitcherAdversity', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">寸前×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherLeftPitcherWeak}
              onChange={(e) => handlePitcherAbilityChange('pitcherLeftPitcherWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ピンチ×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherLeftPitcherStrong}
              onChange={(e) => handlePitcherAbilityChange('pitcherLeftPitcherStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ピンチ○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherChanceWeak}
              onChange={(e) => handlePitcherAbilityChange('pitcherChanceWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">短気</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherChanceStrong}
              onChange={(e) => handlePitcherAbilityChange('pitcherChanceStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">打球反応○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherBodyCheck}
              onChange={(e) => handlePitcherAbilityChange('pitcherBodyCheck', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">けん制○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherHeadSliding}
              onChange={(e) => handlePitcherAbilityChange('pitcherHeadSliding', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">スロースターター</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherBuntMaster}
              onChange={(e) => handlePitcherAbilityChange('pitcherBuntMaster', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">尻上がり</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherBuntGood}
              onChange={(e) => handlePitcherAbilityChange('pitcherBuntGood', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">投手ムラッ気</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherPowerHitter}
              onChange={(e) => handlePitcherAbilityChange('pitcherPowerHitter', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">回復×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherAverageHitter}
              onChange={(e) => handlePitcherAbilityChange('pitcherAverageHitter', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">回復○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherCatcherMaster}
              onChange={(e) => handlePitcherAbilityChange('pitcherCatcherMaster', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">逃げ球</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherCatcherGood}
              onChange={(e) => handlePitcherAbilityChange('pitcherCatcherGood', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">打たれ弱い</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherBaseRunningWeak}
              onChange={(e) => handlePitcherAbilityChange('pitcherBaseRunningWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">打たれ強い</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherBaseRunningStrong}
              onChange={(e) => handlePitcherAbilityChange('pitcherBaseRunningStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ノビ×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherDefensiveExpert}
              onChange={(e) => handlePitcherAbilityChange('pitcherDefensiveExpert', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ノビ○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherBlockGood}
              onChange={(e) => handlePitcherAbilityChange('pitcherBlockGood', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">キレ×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherThrowGood}
              onChange={(e) => handlePitcherAbilityChange('pitcherThrowGood', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">キレ○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherStealWeak}
              onChange={(e) => handlePitcherAbilityChange('pitcherStealWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">負け運</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherStealStrong}
              onChange={(e) => handlePitcherAbilityChange('pitcherStealStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">低め○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherInjuryWeak}
              onChange={(e) => handlePitcherAbilityChange('pitcherInjuryWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">闘志</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherInjuryStrong}
              onChange={(e) => handlePitcherAbilityChange('pitcherInjuryStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">ポーカーフェイス</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherStrikeout}
              onChange={(e) => handlePitcherAbilityChange('pitcherStrikeout', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">重い球</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherMoodWeak}
              onChange={(e) => handlePitcherAbilityChange('pitcherMoodWeak', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">クイック×</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherMoodStrong}
              onChange={(e) => handlePitcherAbilityChange('pitcherMoodStrong', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">クイック○</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={playerData.pitcherConsecutiveHit}
              onChange={(e) => handlePitcherAbilityChange('pitcherConsecutiveHit', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">リリース○</span>
          </label>
=======
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
>>>>>>> 401a31cf12125f6dac36644b15b2f768db325a25
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}; 
=======
};

export default SpecialAbilityForm;
>>>>>>> 401a31cf12125f6dac36644b15b2f768db325a25
