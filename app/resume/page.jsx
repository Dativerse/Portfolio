'use client'

import { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import ResumePDF from '@/components/pdf/ResumePDF';
import { resumeData } from '@/data/resume';

export default function ResumePage() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generatePdf = async () => {
      try {
        const blob = await pdf(<ResumePDF data={resumeData} />).toBlob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (error) {
        console.error('Error generating PDF:', error);
      } finally {
        setLoading(false);
      }
    };

    generatePdf();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-600">Loading resume...</p>
      </div>
    );
  }

  if (!pdfUrl) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-red-600">Failed to load resume</p>
      </div>
    );
  }

  return (
    <iframe
      src={pdfUrl}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="Resume Preview"
    />
  );
}
