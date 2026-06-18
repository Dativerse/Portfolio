'use client'

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { pdf } from '@react-pdf/renderer';
import ResumePDF from '@/components/pdf/ResumePDF';
import { resumes } from '@/data/resume';
import Link from 'next/link';
import { HiArrowLeft, HiDownload, HiCheck } from 'react-icons/hi';

function ResumeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Initial state from URL or default to 'fullstack'
  const initialType = searchParams.get('cvType')?.toLowerCase() || 'fullstack';
  const [cvType, setCvType] = useState(initialType);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const cvTypes = [
    { id: 'fullstack', label: 'Fullstack' },
    { id: 'backend', label: 'Backend' },
  ];

  // Sync state with URL parameter if it changes externally
  useEffect(() => {
    const typeFromUrl = searchParams.get('cvType')?.toLowerCase();
    if (typeFromUrl && resumes[typeFromUrl] && typeFromUrl !== cvType) {
      setCvType(typeFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    const generatePdf = async () => {
      setLoading(true);
      try {
        const data = resumes[cvType] || resumes.fullstack;
        const blob = await pdf(<ResumePDF data={data} type={cvType} />).toBlob();
        const url = URL.createObjectURL(blob);
        
        if (pdfUrl) {
          URL.revokeObjectURL(pdfUrl);
        }
        
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
  }, [cvType]);

  const handleTypeChange = (typeId) => {
    setCvType(typeId);
    // Update URL without full page reload
    const params = new URLSearchParams(searchParams);
    params.set('cvType', typeId);
    router.replace(`/resume?${params.toString()}`, { scroll: false });
  };

  const handleDownload = () => {
    if (pdfUrl) {
      const data = resumes[cvType] || resumes.fullstack;
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `Resume_${cvType}_${data.personal.name.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Resume Navigation Bar */}
      <nav className="z-10 bg-gray-800 border-b border-gray-700 px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-mono text-sm"
          >
            <HiArrowLeft className="w-4 h-4" />
            <span>back_to_base()</span>
          </Link>
          <div className="h-6 w-px bg-gray-700 hidden sm:block"></div>
          <h1 className="text-white font-mono text-sm hidden sm:block">
            <span className="text-accent-dark">./</span>resume_preview
          </h1>
        </div>

        <div className="flex items-center bg-gray-900/50 p-1 rounded-lg border border-gray-700">
          {cvTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type.id)}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all ${
                cvType === type.id
                  ? 'bg-accent-dark text-gray-900 font-bold'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
              }`}
            >
              {cvType === type.id && <HiCheck className="inline-block mr-1 w-3 h-3" />}
              {type.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleDownload}
          disabled={loading || !pdfUrl}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition-colors font-mono text-sm"
        >
          <HiDownload className="w-4 h-4" />
          <span>download_pdf()</span>
        </button>
      </nav>

      {/* Preview Area */}
      <div className="flex-1 relative bg-gray-100 dark:bg-gray-900 overflow-hidden">
        {loading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-900/80 backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-accent-dark border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-accent-dark font-mono animate-pulse">generating_pdf({cvType})...</p>
          </div>
        )}
        
        {pdfUrl ? (
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full border-none"
            title="Resume Preview"
          />
        ) : !loading && (
          <div className="flex items-center justify-center h-full">
            <p className="text-red-500 font-mono">error: failed_to_load_pdf</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="w-12 h-12 border-4 border-accent-dark border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ResumeContent />
    </Suspense>
  );
}
