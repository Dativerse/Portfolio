'use client'

import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { HiDownload, HiExternalLink } from 'react-icons/hi';
import ResumePDF from '@/components/pdf/ResumePDF';
import { resumeData } from '@/data/resume';

const DownloadResumeButton = ({ className = '' }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const showPreview = process.env.NEXT_PUBLIC_SHOW_RESUME_PREVIEW === 'true';

  const handleDownload = async () => {
    try {
      setIsGenerating(true);

      const blob = await pdf(<ResumePDF data={resumeData} />).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resumeData.personal.name.replace(/\s+/g, '_')}_Resume.pdf`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate resume. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className={`btn-secondary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        aria-label="Download Resume"
      >
        <HiDownload className="w-4 h-4" />
        <span>{isGenerating ? 'generating...' : 'download_resume()'}</span>
      </button>
      {showPreview && (
        <a
          href="/?preview=resume"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
          aria-label="Preview Resume"
        >
          <HiExternalLink className="w-4 h-4" />
          <span>preview()</span>
        </a>
      )}
    </>
  );
};

export default DownloadResumeButton;
