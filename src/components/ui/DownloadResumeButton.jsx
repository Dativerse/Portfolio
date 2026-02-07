import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { HiDownload, HiExternalLink } from 'react-icons/hi';
import ResumePDF from '../pdf/ResumePDF';
import { resumeData } from '../../data/resume';

const DownloadResumeButton = ({ className = '' }) => {
  const [isGenerating, setIsGenerating] = useState(false);

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

  return (
    <div className={`inline-flex gap-3 ${className}`}>
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        aria-label="Download Resume"
      >
        <HiDownload className="text-xl" />
        <span>{isGenerating ? 'Generating...' : 'Download Resume'}</span>
      </button>
      {import.meta.env.DEV && (
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
    </div>
  );
};

export default DownloadResumeButton;
