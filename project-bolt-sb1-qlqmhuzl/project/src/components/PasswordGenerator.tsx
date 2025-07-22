import React, { useState, useEffect } from 'react';
import { Copy, Key, Check } from 'lucide-react';
import { PlayerData } from '../types/PlayerData';
import { PasswordGenerator as PawaPoke5Generator } from '../utils/passwordGenerator';

interface PasswordGeneratorProps {
  playerData: PlayerData;
  onPasswordGenerated: (password: string) => void;
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ playerData, onPasswordGenerated }) => {
  const [password, setPassword] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);


  useEffect(() => {
    try {
      const generator = new PawaPoke5Generator(playerData);
      const newPassword = generator.generatePassword();
      setPassword(newPassword);
      onPasswordGenerated(newPassword);
    } catch (error) {
      console.error('パスワード生成エラー:', error);
      setPassword('エラーが発生しました');
      onPasswordGenerated('');
    }
  }, [playerData, onPasswordGenerated]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('パスワードのコピーに失敗しました:', err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Key className="w-6 h-6 text-orange-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-800">生成されたパスワード</h3>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-center text-lg leading-relaxed">
          <div className="text-lg font-bold tracking-wider">{password}</div>
        </div>
        
        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
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
        
        <div className="text-xs text-gray-500 text-center">
          パワポケ5のバイト構造表に基づいて生成されています<br/>
          例: 田西◎選手のパスワード
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;