import React from 'react';
import { Upload, Image } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string | null) => void;
}

export function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Image className="w-5 h-5" />
        Upload Overlay Image
      </h2>
      <label className="flex flex-col items-center px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
        <Upload className="w-8 h-8 text-gray-400" />
        <span className="mt-2 text-sm text-gray-500">Click to upload image</span>
        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
      </label>
    </div>
  );
}