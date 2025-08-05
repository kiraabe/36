import React, { useState } from 'react';
import { useLanguageContext } from '@/src/context/LanguageContext';
import ClientOnly from './ClientOnly';

const LanguageSwitcher = ({ className = '' }) => {
  const { currentLanguage, changeLanguage, isChangingLanguage } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = async (locale) => {
    await changeLanguage(locale);
    setIsOpen(false);
  };

  const getCurrentLanguageLabel = () => {
    return currentLanguage === 'en' ? 'English' : 'Nederlands';
  };

  return (
    <ClientOnly fallback={
      <>
        <div className={`language-switcher ${className}`}>
          <div className="language-dropdown">
            <button className="language-toggle">
              <span className="current-language">English</span>
              <i className="fal fa-chevron-down"></i>
            </button>
          </div>
        </div>
        <style jsx>{`
          .language-switcher {
            position: relative;
            display: inline-block;
          }
          .language-dropdown {
            position: relative;
          }
          .language-toggle {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 25px;
            color: white;
            padding: 8px 16px;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            min-width: 140px;
            justify-content: space-between;
          }
          .current-language {
            font-weight: 500;
          }
        `}</style>
      </>
    }>
      <div className={`language-switcher ${className}`}>
        <div className="language-dropdown">
          <button 
            className="language-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Switch Language"
          >
            <span className="current-language">{getCurrentLanguageLabel()}</span>
            <i className={`fal fa-chevron-down ${isOpen ? 'rotated' : ''}`}></i>
          </button>
          
          {isOpen && (
            <div className="language-options">
              <button
                className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
                disabled={isChangingLanguage}
              >
                English
              </button>
              <button
                className={`language-option ${currentLanguage === 'nl' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('nl')}
                disabled={isChangingLanguage}
              >
                Nederlands
              </button>
            </div>
          )}
        </div>

        <style jsx>{`
          .language-switcher {
            position: relative;
            display: inline-block;
          }

          .language-dropdown {
            position: relative;
          }

          .language-toggle {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 25px;
            color: white;
            padding: 8px 16px;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            min-width: 140px;
            justify-content: space-between;
          }

          .language-toggle:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.5);
            transform: translateY(-2px);
          }

          .current-language {
            font-weight: 500;
          }

          .fa-chevron-down {
            transition: transform 0.3s ease;
            font-size: 12px;
          }

          .fa-chevron-down.rotated {
            transform: rotate(180deg);
          }

          .language-options {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-radius: 8px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            margin-top: 5px;
            overflow: hidden;
            z-index: 1000;
            border: 1px solid rgba(0, 0, 0, 0.1);
          }

          .language-option {
            width: 100%;
            padding: 12px 16px;
            background: white;
            border: none;
            color: #333;
            cursor: pointer;
            transition: background 0.2s ease;
            text-align: left;
            font-size: 14px;
            font-weight: 500;
          }

          .language-option:hover {
            background: #f8f9fa;
          }

          .language-option.active {
            background: #007bff;
            color: white;
          }

          .language-option.active:hover {
            background: #0056b3;
          }

          /* Dark theme for header */
          .header-dark .language-toggle {
            background: rgba(0, 0, 0, 0.1);
            border-color: rgba(0, 0, 0, 0.3);
            color: #333;
          }

          .header-dark .language-toggle:hover {
            background: rgba(0, 0, 0, 0.2);
            border-color: rgba(0, 0, 0, 0.5);
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .language-toggle {
              min-width: 120px;
              padding: 6px 12px;
              font-size: 13px;
            }

            .language-option {
              padding: 10px 12px;
              font-size: 13px;
            }
          }
        `}</style>
      </div>
    </ClientOnly>
  );
};

export default LanguageSwitcher;
