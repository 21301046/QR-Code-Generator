import React from 'react';
import { Link } from 'lucide-react';

interface URLInputProps {
  url: string;
  onUrlChange: (url: string) => void;
}

export function URLInput({ url, onUrlChange }: URLInputProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Link className="w-5 h-5" />
        Enter URL
      </h2>
      <input
        type="url"
        value={url}
        onChange={(e) => onUrlChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter URL here..."
      />
    </div>
  );
}