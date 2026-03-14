import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { HiDownload, HiExternalLink } from 'react-icons/hi';
import ResumePDF from '../pdf/ResumePDF';
import { resumeData } from '../../data/resume';

const DownloadResumeButton = ({ className = '' }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const showPreview = import.meta.env.VITE_SHOW_RESUME_PREVIEW === 'true';

  const handleDownload = async () => {
    try {
      setIsGenerating(true);

      // Generate PDF blob
      const blob = await pdf(<ResumePDF data={resumeData} />).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resumeData.personal.name.replace(/\s+/g, '_')}_Resume.pdf`;

      // Trigger download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate resume. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const defaultButtonClass = "inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  const buttonClass = className ? `inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${className}` : defaultButtonClass;

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className={buttonClass}
        aria-label="Download Resume"
      >
        <HiDownload className="text-xl" />
        <span>{isGenerating ? 'Generating...' : 'Download Resume'}</span>
      </button>
      {showPreview && (
        <a
          href="/?preview=resume"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          aria-label="Preview Resume"
        >
          <HiExternalLink className="text-xl" />
          <span>Live Preview</span>
        </a>
      )}
    </>
  );
};

export default DownloadResumeButton;
