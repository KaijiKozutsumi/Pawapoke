import { PlayerData, nameCharacterCodes, characterConversionTable, mosaicCorrectionValues } from '../types/PlayerData';

export class PasswordGenerator {
  private playerData: PlayerData;
  private byteData: number[] = new Array(56).fill(0);

  constructor(playerData: PlayerData) {
    this.playerData = playerData;
  }

  generatePassword(): string {
    // 1. バイト構造表にデータを設定
    this.setByteData();
    
    // 2. 圧縮フラグを設定
    this.setCompressionFlags();
    
    // 3. チェックサムを計算
    this.calculateChecksum();
    
    // 4. バイト圧縮1
    const compressed1 = this.byteCompression1();
    
    // 5. 4ビット圧縮
    const compressed4bit = this.fourBitCompression(compressed1);
    
    // 6. バイト圧縮2
    const compressed2 = this.byteCompression2(compressed4bit);
    
    // 7. モザイク化補正
    const corrected = this.mosaicCorrection(compressed2);
    
    // 8. 文字データに変換
    const charData = this.convertToCharacterData(corrected);
    
    // 9. 文字に換算
    const password = this.convertToPassword(charData);
    
    return this.formatPassword(password);
  }

  private setByteData(): void {
    // 名前コード設定（9-20バイト）
    this.setNameCodes();
    
    // 基本情報設定（21バイト）
    this.setBasicInfo();
    
    // 能力値設定（23-30バイト）
    this.setAbilities();
    
    // 変化球設定（31-34バイト）
    this.setPitches();
    
    // 特殊能力設定（35-46バイト）
    this.setSpecialAbilities();
    
    // その他設定（49-56バイト）
    this.setOtherData();
  }

  private setNameCodes(): void {
    const name = this.playerData.name;
    for (let i = 0; i < Math.min(name.length, 6); i++) {
      const char = name[i];
      const codes = nameCharacterCodes[char];
      if (codes) {
        this.byteData[9 + i * 2] = codes.upper;
        this.byteData[10 + i * 2] = codes.lower;
      }
    }
  }

  private setBasicInfo(): void {
    let value = 0;
    
    // ポジション設定
    const positionCode = this.playerData.position === '投手' ? 1 :
                        this.playerData.position === '捕手' ? 2 :
                        this.playerData.position === '内野手' ? 3 : 4;
    value += positionCode;
    
    // 投打設定
    if (this.playerData.throwingArm === '左投げ') value += 8;
    if (this.playerData.battingStyle === '左打ち') value += 16;
    if (this.playerData.battingStyle === '両打ち') value += 48;
    
    this.byteData[21] = value;
  }

  private setAbilities(): void {
    this.byteData[23] = this.playerData.power;
    this.byteData[24] = (this.playerData.meet * 16) + this.playerData.armStrength;
    this.byteData[25] = (this.playerData.runningSpeed * 16) + this.playerData.fielding;
    this.byteData[26] = (this.playerData.battingForm * 16) + this.playerData.errorRate;
    this.byteData[27] = this.playerData.uniformNumber;
    this.byteData[28] = this.playerData.ballSpeed;
    this.byteData[29] = this.playerData.control;
    this.byteData[30] = this.playerData.stamina;
  }

  private setPitches(): void {
    this.byteData[31] = (this.playerData.pitchingForm * 16) + this.playerData.slider;
    this.byteData[32] = (this.playerData.curve * 16) + this.playerData.fork;
    this.byteData[33] = (this.playerData.sinker * 16) + this.playerData.shoot;
    
    let value = this.playerData.knuckleball;
    if (this.playerData.slowCurve) value += 16;
    if (this.playerData.hSlider) value += 32;
    if (this.playerData.sSlider) value += 64;
    if (this.playerData.hSinker) value += 128;
    
    this.byteData[34] = value;
  }

  private setSpecialAbilities(): void {
    const abilities = this.playerData.specialAbilities;
    
    // 特殊能力のビットマップ設定
    if (abilities.includes('バント◎')) this.byteData[37] += 32;
    if (abilities.includes('三振')) this.byteData[39] += 32;
    if (abilities.includes('ムラッ気')) this.byteData[44] += 4;
    
    let byte45 = 0;
    if (abilities.includes('逃げ球')) byte45 += 128;
    if (abilities.includes('打たれ弱い')) byte45 += 64;
    if (abilities.includes('負け運')) byte45 += 1;
    this.byteData[45] = byte45;
    
    if (abilities.includes('ポーカーフェイス')) this.byteData[46] += 16;
    
    // 超特殊能力
    if (abilities.includes('呪縛')) this.byteData[49] = 9;
  }

  private setOtherData(): void {
    this.byteData[50] = (this.playerData.skinColor * 16) + this.playerData.team;
    
    // 出身設定
    const origin = this.playerData.origin;
    this.byteData[51] = Math.floor(origin / 256);
    this.byteData[52] = origin % 256;
    
    // 製造番号設定
    const serial = this.playerData.serialNumber;
    this.byteData[53] = Math.floor(serial / 256);
    this.byteData[54] = serial % 256;
    
    // 顔設定
    const face = this.playerData.face;
    this.byteData[55] = Math.floor(face / 256);
    this.byteData[56] = face % 256;
  }

  private setCompressionFlags(): void {
    // 圧縮フラグを設定
    for (let i = 9; i <= 56; i++) {
      if (this.byteData[i] > 0) {
        const flagByte = Math.floor((i - 9) / 8) + 1;
        const flagBit = (i - 9) % 8;
        this.byteData[flagByte] |= (1 << flagBit);
      }
    }
  }

  private calculateChecksum(): void {
    let sum = 0;
    
    // 1-6バイトと9-56バイトの合計
    for (let i = 1; i <= 6; i++) {
      sum += this.byteData[i];
    }
    for (let i = 9; i <= 56; i++) {
      sum += this.byteData[i];
    }
    
    const sum1 = (sum + 23) % 256;
    const sum2 = 255 - (sum % 256);
    
    this.byteData[7] = sum1;
    this.byteData[8] = sum2;
  }

  private byteCompression1(): number[] {
    const compressed: number[] = [];
    
    // 圧縮フラグとチェックサムのバイトを追加
    for (let i = 1; i <= 8; i++) {
      compressed.push(this.byteData[i]);
    }
    
    // 値が0でないバイトのみ追加
    for (let i = 9; i <= 56; i++) {
      if (this.byteData[i] > 0) {
        compressed.push(this.byteData[i]);
      }
    }
    
    return compressed;
  }

  private fourBitCompression(data: number[]): number[] {
    const result: number[] = [];
    
    for (let i = 0; i < data.length; i += 4) {
      const group = data.slice(i, i + 4);
      const flagByte = this.calculate4BitFlags(group);
      result.push(flagByte);
      
      // 4ビット圧縮処理
      const compressed = this.compress4Bits(group);
      result.push(...compressed);
    }
    
    return result;
  }

  private calculate4BitFlags(group: number[]): number {
    let flags = 0;
    for (let i = 0; i < group.length; i++) {
      const byte = group[i] || 0;
      const lower4 = byte & 0x0F;
      const upper4 = (byte & 0xF0) >> 4;
      
      if (lower4 > 0) flags |= (1 << (i * 2));
      if (upper4 > 0) flags |= (1 << (i * 2 + 1));
    }
    return flags;
  }

  private compress4Bits(group: number[]): number[] {
    const nibbles: number[] = [];
    
    // 4ビット単位に分割
    for (const byte of group) {
      if (byte !== undefined) {
        nibbles.push(byte & 0x0F);
        nibbles.push((byte & 0xF0) >> 4);
      }
    }
    
    // 0でない4ビットデータを後ろ詰め
    const nonZeroNibbles = nibbles.filter(n => n > 0);
    const paddedNibbles = [...Array(8 - nonZeroNibbles.length).fill(0), ...nonZeroNibbles];
    
    // バイト単位に再構成
    const result: number[] = [];
    for (let i = 0; i < paddedNibbles.length; i += 2) {
      const lower = paddedNibbles[i] || 0;
      const upper = paddedNibbles[i + 1] || 0;
      result.push(lower + (upper << 4));
    }
    
    return result;
  }

  private byteCompression2(data: number[]): number[] {
    return data.filter(byte => byte > 0);
  }

  private mosaicCorrection(data: number[]): number[] {
    return data.map((byte, index) => {
      if (index < mosaicCorrectionValues.length) {
        return (byte + mosaicCorrectionValues[index]) % 256;
      }
      return byte;
    });
  }

  private convertToCharacterData(data: number[]): number[] {
    const charData: number[] = [];
    
    for (let i = 0; i < data.length; i += 3) {
      const byte1 = data[i] || 0;
      const byte2 = data[i + 1] || 0;
      const byte3 = data[i + 2] || 0;
      
      // 3バイトを4つの6ビットデータに変換
      const char1 = byte1 % 64;
      const char2 = Math.floor(byte1 / 64) * 16 + (byte2 % 16);
      const char3 = Math.floor(byte3 / 64) * 16 + Math.floor(byte2 / 16);
      const char4 = byte3 % 64;
      
      charData.push(char1, char2, char3, char4);
    }
    
    return charData;
  }

  private convertToPassword(charData: number[]): string {
    return charData.map(code => {
      if (code < characterConversionTable.length) {
        return characterConversionTable[code];
      }
      return 'ご'; // デフォルト文字
    }).join('');
  }

  private formatPassword(password: string): string {
    // 7文字ずつ区切ってスペースで区切る
    const formatted = password.match(/.{1,7}/g)?.join(' ') || password;
    return formatted;
  }
}