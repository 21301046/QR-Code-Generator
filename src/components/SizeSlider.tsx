import React from 'react';
import { Maximize2 } from 'lucide-react';

interface SizeSliderProps {
  size: number;
  onSizeChange: (size: number) => void;
}

export function SizeSlider({ size, onSizeChange }: SizeSliderProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Maximize2 className="w-5 h-5" />
        QR Code Size
      </h2>
      <input
        type="range"
        min="200"
        max="400"
        value={size}
        onChange={(e) => onSizeChange(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
      <div className="text-center text-gray-600 mt-2">{size}px</div>
    </div>
  );
}