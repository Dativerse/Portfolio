'use client'

import { HiExternalLink } from 'react-icons/hi';

const DownloadResumeButton = ({ className = '' }) => {
  return (
    <a
      href="/resume"
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary inline-flex items-center gap-2 ${className}`}
      aria-label="Preview Resume"
    >
      <HiExternalLink className="w-4 h-4" />
      <span>get_resume()</span>
    </a>
  );
};

export default DownloadResumeButton;
