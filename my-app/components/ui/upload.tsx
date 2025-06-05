'use client';
import { useState } from 'react';

interface ProgressProps {
  value: number;
  status: string;
  className?: string;
}

function Progress({ value, status, className }: ProgressProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-sm text-gray-600">{status}</p>
        <p className="text-sm font-medium text-gray-700">{value}%</p>
      </div>
    </div>
  );
}

export default function UploadContractPage() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    
    try {
      setError(null);
      setStatus('Preparing upload...');
      setProgress(10);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }

      setProgress(100);
      setStatus('Processing complete!');
      
      const result = await response.json();
      console.log('Processing result:', result);
      
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Upload failed');
      setStatus('Error occurred');
      console.error('Upload error:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 border rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-3">Upload Contract Documents</h2>
      <p className="text-gray-600 mb-6">Upload your contract files. The AI will parse them to extract key information.</p>
      
      <div className="border-dashed border-2 border-gray-300 p-8 rounded-lg text-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
        <input
          type="file"
          accept=".pdf,.docx"
          className="hidden"
          id="upload-input"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              setFile(selectedFile);
              setProgress(0);
              setStatus('');
              setError(null);
            }
          }}
        />
        <label 
          htmlFor="upload-input" 
          className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
        >
          {file ? file.name : 'Drag & drop files or click to browse'}
        </label>
        <p className="text-sm text-gray-500 mt-3">Supported formats: PDF, DOCX. Max file size: 50MB.</p>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {file && (
        <button
          onClick={handleUpload}
          disabled={!file || progress > 0}
          className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {progress > 0 ? 'Processing...' : 'Process Document'}
        </button>
      )}

      {(status || progress > 0) && (
        <Progress 
          value={progress} 
          status={status} 
          className="mt-6" 
        />
      )}
    </div>
  );
}