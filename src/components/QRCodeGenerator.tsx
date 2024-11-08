import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, Palette } from 'lucide-react';
import { URLInput } from './URLInput';
import { ImageUpload } from './ImageUpload';
import { SizeSlider } from './SizeSlider';
import { StyleOptions } from './StyleOptions';

export function QRCodeGenerator() {
  const [url, setUrl] = useState('https://example.com');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [size, setSize] = useState(300);
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [includeMargin, setIncludeMargin] = useState(true);
  const [level, setLevel] = useState<'L' | 'M' | 'Q' | 'H'>('H');
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'artistic-qr-code.png';
        link.click();
      }
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <URLInput url={url} onUrlChange={setUrl} />
        <StyleOptions
          fgColor={fgColor}
          bgColor={bgColor}
          onFgColorChange={setFgColor}
          onBgColorChange={setBgColor}
          includeMargin={includeMargin}
          onIncludeMarginChange={setIncludeMargin}
          level={level}
          onLevelChange={setLevel}
        />
        <ImageUpload onImageUpload={setUploadedImage} />
        <SizeSlider size={size} onSizeChange={setSize} />
      </div>

      <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
          <Palette className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Preview</h2>
        </div>
        <div 
          className="flex justify-center items-center mb-6 p-8 bg-white rounded-lg shadow-inner" 
          style={{
            backgroundColor: bgColor,
            transition: 'background-color 0.3s ease'
          }}
          ref={qrRef}
        >
          <QRCodeCanvas
            value={url}
            size={size}
            level={level}
            includeMargin={includeMargin}
            fgColor={fgColor}
            bgColor={bgColor}
            imageSettings={uploadedImage ? {
              src: uploadedImage,
              height: size * 0.3,
              width: size * 0.3,
              excavate: true,
            } : undefined}
          />
        </div>
        <button
          onClick={downloadQR}
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center gap-3 font-semibold"
        >
          <Download className="w-5 h-5" />
          Download QR Code
        </button>
      </div>
    </div>
  );
}