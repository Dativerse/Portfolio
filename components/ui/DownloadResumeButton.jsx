'use client'

import { useEffect, useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';

const DownloadResumeButton = ({ className = '' }) => {
  const [href, setHref] = useState('#');

  useEffect(() => {
    const { protocol, host } = window.location;
    setHref(`${protocol}//cv.${host.replace(/^www\./, '')}`);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary inline-flex items-center gap-2 ${className}`}
      aria-label="Open Resume"
    >
      <HiExternalLink className="w-4 h-4" />
      <span>get_resume()</span>
    </a>
  );
};

export default DownloadResumeButton;
