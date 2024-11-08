import React from 'react';
import { Palette, Shield } from 'lucide-react';

interface StyleOptionsProps {
  fgColor: string;
  bgColor: string;
  onFgColorChange: (color: string) => void;
  onBgColorChange: (color: string) => void;
  includeMargin: boolean;
  onIncludeMarginChange: (include: boolean) => void;
  level: 'L' | 'M' | 'Q' | 'H';
  onLevelChange: (level: 'L' | 'M' | 'Q' | 'H') => void;
}

export function StyleOptions({
  fgColor,
  bgColor,
  onFgColorChange,
  onBgColorChange,
  includeMargin,
  onIncludeMarginChange,
  level,
  onLevelChange,
}: StyleOptionsProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Palette className="w-5 h-5" />
        Style Options
      </h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              QR Code Color
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={fgColor}
                onChange={(e) => onFgColorChange(e.target.value)}
                className="w-10 h-10 rounded cursor-pointer"
              />
              <input
                type="text"
                value={fgColor}
                onChange={(e) => onFgColorChange(e.target.value)}
                className="flex-1 px-3 py-1 border rounded-lg text-sm"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Background Color
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => onBgColorChange(e.target.value)}
                className="w-10 h-10 rounded cursor-pointer"
              />
              <input
                type="text"
                value={bgColor}
                onChange={(e) => onBgColorChange(e.target.value)}
                className="flex-1 px-3 py-1 border rounded-lg text-sm"
              />
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gray-600" />
              <label className="text-sm font-medium text-gray-700">
                Error Correction Level
              </label>
            </div>
            <select
              value={level}
              onChange={(e) => onLevelChange(e.target.value as 'L' | 'M' | 'Q' | 'H')}
              className="px-3 py-1 border rounded-lg text-sm"
            >
              <option value="L">Low (7%)</option>
              <option value="M">Medium (15%)</option>
              <option value="Q">Quartile (25%)</option>
              <option value="H">High (30%)</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <label className="text-sm font-medium text-gray-700">
            Include Margin
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={includeMargin}
              onChange={(e) => onIncludeMarginChange(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}