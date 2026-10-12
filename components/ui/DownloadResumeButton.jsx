'use client'

import { useEffect, useRef, useState } from 'react';
import { HiChevronDown, HiExternalLink } from 'react-icons/hi';

const CV_TYPES = [
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Fullstack' },
];

const DownloadResumeButton = ({ className = '' }) => {
  const [baseUrl, setBaseUrl] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//cv.${host.replace(/^www\./, '')}`);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`btn-secondary inline-flex items-center gap-2 ${className}`}
        aria-label="Open Resume"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <HiExternalLink className="w-4 h-4" />
        <span>get_resume()</span>
        <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-20 mt-1 min-w-full font-mono text-sm
            bg-light-card dark:bg-dark-card
            border border-light-border dark:border-slate-400"
        >
          {CV_TYPES.map(({ value, label }) => (
            <a
              key={value}
              role="menuitem"
              href={`${baseUrl}/?cvType=${value}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-left
                text-light-text-secondary dark:text-slate-400
                hover:text-accent-light hover:bg-accent-light/10
                dark:hover:text-accent-dark dark:hover:bg-accent-dark/10
                transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DownloadResumeButton;
