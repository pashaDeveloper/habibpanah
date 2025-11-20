'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface Language {
  code: string;
  name: string;
}

function ToggleLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations(); // Use root translations
  const tLanguages = useTranslations('languages'); // Use languages namespace for language names
  
  const [isOpen, setIsOpen] = useState(false);
  const [languages, setLanguages] = useState<Language[]>([
    { code: 'fa', name: tLanguages('fa') },
    { code: 'en', name: tLanguages('en') },
    { code: 'tr', name: tLanguages('tr') },
    { code: 'ar', name: tLanguages('ar') },
    { code: 'zh', name: tLanguages('zh') }
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({ code: 'fa', name: tLanguages('fa') });
  const btnRef = useRef<HTMLButtonElement>(null);

  // Set the current language based on the pathname
  useEffect(() => {
    const pathSegments = pathname.split('/').filter(segment => segment);
    const currentLang = pathSegments[0];
    
    // Check if the first segment is a valid language code
    const isValidLang = ['fa', 'en', 'tr', 'ar', 'zh'].includes(currentLang);
    
    if (isValidLang && currentLang !== 'fa') {
      // Update selected language if it's not the default (fa)
      const lang = languages.find(l => l.code === currentLang);
      if (lang) {
        setSelectedLanguage(lang);
        
        // Move selected language to the top of the list
        const newLanguages = [...languages];
        const [selected] = newLanguages.filter(l => l.code === currentLang);
        const rest = newLanguages.filter(l => l.code !== currentLang);
        setLanguages([selected, ...rest]);
      }
    } else {
      // Default to Persian (fa) which doesn't need a prefix
      setSelectedLanguage({ code: 'fa', name: tLanguages('fa') });
    }
  }, [pathname, tLanguages]);

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

      // Change the route based on the selected language
      const pathSegments = pathname.split('/').filter(segment => segment);
      const currentLang = pathSegments[0];
      
      // Check if the first segment is a valid language code
      const isValidLang = ['fa', 'en', 'tr', 'ar', 'zh'].includes(currentLang);
      
      let newPath = pathname;
      
      if (newSelectedLanguage.code === 'fa') {
        // For Persian, remove language prefix if it exists
        if (isValidLang) {
          // Remove the language prefix
          newPath = '/' + pathSegments.slice(1).join('/');
          if (newPath === '') newPath = '/';
        }
      } else {
        // For other languages, add or replace language prefix
        if (isValidLang) {
          // Replace existing language prefix
          pathSegments[0] = newSelectedLanguage.code;
          newPath = '/' + pathSegments.join('/');
        } else {
          // Add new language prefix
          newPath = '/' + newSelectedLanguage.code + (pathname === '/' ? '' : pathname);
        }
      }
      
      // Navigate to the new path using router.push for client-side navigation
      router.push(newPath);
      
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
      case 'en':
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
      case 'ar':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 12 6" className="w-8 h-5 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex-shrink-0">
            <rect width="12" height="6" fill="#00732f" />
            <rect width="12" height="4" y="2" fill="#fff" />
            <rect width="12" height="2" y="4" />
            <rect width="3" height="6" fill="#f00" />
          </svg>
        );
      case 'tr':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" className="w-8 h-5 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex-shrink-0">
            <rect width="1200" height="800" fill="#E30A17" />
            <circle cx="425" cy="400" r="200" style={{ fill: '#ffffff' }} />
            <circle cx="475" cy="400" r="160" style={{ fill: '#E30A17' }} />
            <polygon style={{ fill: '#ffffff' }} points="583.334,400 764.235,458.779 652.431,304.894 652.431,495.106 764.235,341.221" />
          </svg>
        );
      case 'zh':
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
      case 'fa':
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
        fixed bottom-10 ltr:right-0 rtl:right-0 z-50
        bg-linear-to-l from-[#8f4aec] via-[#7f53ef] to-[#2586ff]
        border-none text-white
        ltr:rounded-l-3xl
        rtl:rounded-l-3xl
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
      aria-label={t('language_selector')}
    >
      <ul className="list-none p-0 m-0 flex flex-col-reverse">
        <li
          key={selectedLanguage.code}
          className={`
            h-[46px] px-3 py-1.5
            flex items-center gap-3 rtl:flex-row-reverse
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
                cursor-pointer rtl:flex-row-reverse
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