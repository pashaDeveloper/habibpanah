'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
}

function ToggleLanguage() {
  const [isOpen, setIsOpen] = useState(false);
  const [languages, setLanguages] = useState<Language[]>([
    { code: 'fa-IR', name: 'فارسی' },
    { code: 'zh-CN', name: '中文' },
    { code: 'tr-TR', name: 'Türkçe' },
    { code: 'ar-AE', name: 'العربية' },
    { code: 'en-US', name: 'English' }
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({ code: 'fa-IR', name: 'فارسی' });
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (e.target === btnRef.current) {
      setIsOpen(!isOpen);
    }
  };

  const handleLanguageChange = (index: number) => {
    // Close the dropdown smoothly first
    setIsOpen(false);
    
    // Get the selected language
    const newSelectedLanguage = languages[index];
    
    // After the closing animation completes, change the language
    setTimeout(() => {
      // Move the selected language to the top of the list
      const newLanguages = [...languages];
      const [selected] = newLanguages.splice(index, 1);
      newLanguages.unshift(selected);
      setLanguages(newLanguages);
      setSelectedLanguage(newSelectedLanguage);

      console.log(`زبان به ${newSelectedLanguage.name} با کد ${newSelectedLanguage.code} تغییر کرد.`);
    }, 500); // Slightly longer than the CSS transition duration to ensure it's fully closed
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (btnRef.current && !btnRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Flag components
  const FlagSVG = ({ code }: { code: string }) => {
    switch (code) {
      case 'en-US':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" height="480" width="640" viewBox="0 0 640 480" className="w-8 h-5 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex-shrink-0">
            <g fillRule="evenodd">
              <path fill="#b22234" d="M0 0h640v480H0z" />
              <path fill="#fff" d="M0 34.3h640v34.3H0zm0 68.6h640v34.3H0zm0 68.5h640v34.3H0zm0 68.6h640v34.3H0zm0 68.6h640v34.3H0zm0 68.5h640v34.3H0z" />
              <path fill="#3c3b6e" d="M0 0h254.5v257.1H0z" />
              <g fill="#fff">
                <g id="a">
                  <path id="b" d="M19.7 12.5l-6 4.4 2.3-7.1-6-4.3h7.4l2.3-7.1 2.3 7.1h7.4l-6 4.3 2.3 7.1z" />
                  <use href="#b" y="25.7" />
                  <use href="#b" y="51.4" />
                  <use href="#b" y="77.1" />
                  <use href="#b" y="102.8" />
                  <use href="#b" y="128.5" />
                  <use href="#b" y="154.2" />
                  <use href="#b" y="179.9" />
                  <use href="#b" y="205.6" />
                  <use href="#b" y="231.3" />
                </g>
                <use href="#a" x="28.6" />
                <use href="#a" x="57.2" />
                <use href="#a" x="85.8" />
                <use href="#a" x="114.4" />
                <use href="#a" x="143" />
                <use href="#b" x="171.6" />
                <use href="#b" x="171.6" y="25.7" />
                <use href="#b" x="171.6" y="51.4" />
                <use href="#b" x="171.6" y="77.1" />
                <use href="#b" x="171.6" y="102.8" />
                <use href="#b" x="171.6" y="128.5" />
                <use href="#b" x="171.6" y="154.2" />
                <use href="#b" x="171.6" y="179.9" />
                <use href="#b" x="171.6" y="205.6" />
                <use href="#b" x="171.6" y="231.3" />
              </g>
            </g>
          </svg>
        );
      case 'ar-AE':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 12 6" className="w-8 h-5 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex-shrink-0">
            <rect width="12" height="6" fill="#00732f" />
            <rect width="12" height="4" y="2" fill="#fff" />
            <rect width="12" height="2" y="4" />
            <rect width="3" height="6" fill="#f00" />
          </svg>
        );
      case 'tr-TR':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" className="w-8 h-5 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex-shrink-0">
            <rect width="1200" height="800" fill="#E30A17" />
            <circle cx="425" cy="400" r="200" style={{ fill: '#ffffff' }} />
            <circle cx="475" cy="400" r="160" style={{ fill: '#E30A17' }} />
            <polygon style={{ fill: '#ffffff' }} points="583.334,400 764.235,458.779 652.431,304.894 652.431,495.106 764.235,341.221" />
          </svg>
        );
      case 'zh-CN':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="900" height="600" viewBox="0 0 30 20" className="w-8 h-5 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex-shrink-0">
            <defs>
              <path id="s" d="M0,-1 0.587785,0.809017 -0.951057,-0.309017H0.951057L-0.587785,0.809017z" fill="#ffde00" />
            </defs>
            <rect width="30" height="20" fill="#de2910" />
            <use xlinkHref="#s" transform="translate(5,5) scale(3)" />
            <use xlinkHref="#s" transform="translate(10,2) rotate(23.036243)" />
            <use xlinkHref="#s" transform="translate(12,4) rotate(45.869898)" />
            <use xlinkHref="#s" transform="translate(12,7) rotate(69.945396)" />
            <use xlinkHref="#s" transform="translate(10,9) rotate(20.659808)" />
          </svg>
        );
      case 'fa-IR':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="630" height="360" viewBox="0 0 630 360" className="w-8 h-5 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex-shrink-0">
            <rect width="630" height="360" fill="#da0000" />
            <rect width="630" height="240" fill="#fff" />
            <rect width="630" height="120" fill="#239f40" />
            <g transform="translate(8.4,100.4)">
              <g id="tb4">
                <g id="tb1" fill="none" stroke="#fff" strokeWidth="2">
                  <path id="tbp1" d="M0,1H26M1,10V5H9V9H17V5H12M4,9H6M26,9H21V5H29M29,0V9H37V0M33,0V9" transform="scale(1.4)" />
                  <path id="tbp2" d="M0,7H9M10,7H19" transform="scale(2.8)" />
                  <use xlinkHref="#tbp2" y="120" />
                  <use xlinkHref="#tbp1" y="145.2" />
                </g>
                <g id="tb3">
                  <use xlinkHref="#tb1" x="56" />
                  <use xlinkHref="#tb1" x="112" />
                  <use xlinkHref="#tb1" x="168" />
                </g>
              </g>
              <use xlinkHref="#tb3" x="168" />
              <use xlinkHref="#tb4" x="392" />
            </g>
            <g fill="#da0000" transform="matrix(45,0,0,45,315,180)">
              <g id="emblem_half">
                <path d="M-0.54815,0.83638A0.912046,0.912046 0 0,0 0.328544,-0.722384A1,1 0 0,1 -0.54815,0.83638" />
                <path d="M0.618339,0.661409A0.763932,0.763932 0 0,0 0.421644,-0.741049A1,1 0 0,1 0.618339,0.661409" />
                <path d="M0,1 -0.05,0 0,-0.787278A0.309995,0.309995 0 0,0 0.118034,-0.688191V-0.100406L0.077809,0.892905z" />
                <path d="M-0.02,-0.85 0,-0.831217A0.14431,0.14431 0 0,0 0.252075,-0.967708A0.136408,0.136408 0 0,1 0,-0.924634" />
              </g>
              <use xlinkHref="#emblem_half" transform="scale(-1,1)" />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      ref={btnRef}
      className={`
        fixed bottom-10 right-0 z-50
        bg-linear-to-l from-[#8f4aec] via-[#7f53ef] to-[#2586ff]
        border-none text-white
        rounded-l-3xl
        w-[120px]
        font-iranyekan
        cursor-pointer
        overflow-hidden
        transition-all duration-400 ease-in-out
        ${isOpen ? 'max-h-[230px]' : 'max-h-[46px]'}
        animate-slideIn
      `}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="انتخاب زبان"
    >
      <ul className="list-none p-0 m-0 flex flex-col-reverse">
        <li
          key={selectedLanguage.code}
          className={`
            h-[46px] px-3 py-1.5
            flex items-center gap-3
            font-bold
          `}
        >
          <FlagSVG code={selectedLanguage.code} />
          <span>{selectedLanguage.name}</span>
        </li>
        {isOpen && languages.map((lang, index) => (
          index > 0 && (
            <li
              key={lang.code}
              className={`
                h-[46px] px-3 py-1.5
                flex items-center gap-3
                cursor-pointer
                transition-colors duration-200 ease
                ${index === languages.length - 1 ? 'hover:bg-white/10 hover:rounded-l-3xl' : ''}
                ${index === 1 ? 'hover:bg-white/10 hover:rounded-l-3xl' : ''}
                ${index > 1 && index < languages.length - 1 ? 'hover:bg-white/10' : ''}
              `}
              onClick={(e) => {
                e.stopPropagation();
                handleLanguageChange(index);
              }}
            >
              <FlagSVG code={lang.code} />
              <span>{lang.name}</span>
            </li>
          )
        ))}
      </ul>
    </button>
  );
}

export default ToggleLanguage;