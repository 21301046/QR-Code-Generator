import React from 'react';
import { QRCodeGenerator } from './components/QRCodeGenerator';
import { QrCode } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800">
                Artistic QR Code Generator
              </h1>
            </div>
            <p className="text-gray-600 text-lg">
              Create beautiful, customized QR codes with your personal touch
            </p>
          </div>
          <QRCodeGenerator />
        </div>
      </div>
    </div>
  );
}

export default App;