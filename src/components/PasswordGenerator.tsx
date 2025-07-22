import React, { useState, useEffect } from 'react';
import { Copy, Key, Check, RefreshCw, AlertCircle } from 'lucide-react';
import { PlayerData } from '../types/PlayerData';
import { PasswordGenerator as PawaPoke5Generator } from '../utils/passwordGenerator';

interface PasswordGeneratorProps {
  playerData: PlayerData;
  onPasswordGenerated: (password: string) => void;
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ playerData, onPasswordGenerated }) => {
  const [password, setPassword] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    generatePassword();
  }, [playerData]);

  const generatePassword = async () => {
    setIsGenerating(true);
    setError('');
    
    try {
      console.log('選手データ:', playerData);
      const generator = new PawaPoke5Generator(playerData);
      const newPassword = generator.generatePassword();
      console.log('生成されたパスワード:', newPassword);
      setPassword(newPassword);
      onPasswordGenerated(newPassword);
    } catch (error) {
      console.error('パスワード生成エラー:', error);
      setError('パスワード生成中にエラーが発生しました');
      setPassword('');
      onPasswordGenerated('');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    if (!password) return;
    
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('パスワードのコピーに失敗しました:', err);
      setError('パスワードのコピーに失敗しました');
    }
  };

  const isValidPlayerData = () => {
    return playerData.name && 
           playerData.name.length > 0 && 
           playerData.uniformNumber > 0 && 
           playerData.position;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Key className="w-6 h-6 text-orange-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-800">生成されたパスワード</h3>
        </div>
        <button
          onClick={generatePassword}
          disabled={isGenerating}
          className="flex items-center space-x-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg transition-all duration-200"
        >
          <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
          <span>{isGenerating ? '生成中...' : '再生成'}</span>
        </button>
      </div>
      
      <div className="space-y-6">
        {/* エラー表示 */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-700">{error}</span>
            </div>
          </div>
        )}

        {/* パスワード表示 */}
        {password ? (
          <div className="space-y-4">
            <div className="password-display">
              <div className="text-lg font-bold tracking-wider break-all">{password}</div>
            </div>
            
            {/* コピーボタン */}
            <button
              onClick={handleCopy}
              disabled={copied}
              className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>コピー完了！</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>パスワードをコピー</span>
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="text-center py-8">
            {isGenerating ? (
              <div className="space-y-4">
                <RefreshCw className="w-8 h-8 text-blue-500 animate-spin mx-auto" />
                <p className="text-gray-600">パスワードを生成中...</p>
              </div>
            ) : !isValidPlayerData() ? (
              <div className="space-y-4">
                <AlertCircle className="w-8 h-8 text-yellow-500 mx-auto" />
                <p className="text-gray-600">選手情報を入力してください</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Key className="w-8 h-8 text-gray-400 mx-auto" />
                <p className="text-gray-600">パスワードが生成されていません</p>
              </div>
            )}
          </div>
        )}
        
        {/* 情報表示 */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-medium text-gray-800 mb-2">パスワード情報</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• パワポケのバイト構造表に基づいて生成されています</p>
            <p>• 選手データを変更すると自動的に再生成されます</p>
            <p>• 生成されたパスワードは他のプレイヤーと共有できます</p>
            <p>• 例: 田西◎選手（投手・背番号53・日ハム）</p>
          </div>
        </div>

        {/* 選手情報サマリー */}
        {isValidPlayerData() && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">現在の選手情報</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">名前:</span>
                <span className="font-medium ml-1">{playerData.name}</span>
              </div>
              <div>
                <span className="text-gray-600">背番号:</span>
                <span className="font-medium ml-1">#{playerData.uniformNumber}</span>
              </div>
              <div>
                <span className="text-gray-600">ポジション:</span>
                <span className="font-medium ml-1">{playerData.position}</span>
              </div>
              <div>
                <span className="text-gray-600">特殊能力:</span>
                <span className="font-medium ml-1">{playerData.specialAbilities.length}個</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;