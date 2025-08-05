import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import RightArrow from '@/src/svg/right-arrow';

const NewsletterSubscription = ({ className = "" }) => {
  const { t } = useTranslation('common');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // EmailJS Configuration - using same config as contact form
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_5i5l5qr',
    TEMPLATE_ID: 'template_newsletter', // Will need to create this template
    PUBLIC_KEY: 'sI0FlhGAlA9_-4v9x'
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isLoading || isSubmitted) {
      return;
    }

    // Validate email
    if (!email.trim()) {
      setMessage({ type: 'error', text: t('newsletter.emailRequired') });
      return;
    }

    if (!validateEmail(email)) {
      setMessage({ type: 'error', text: t('newsletter.invalidEmail') });
      return;
    }

    setIsLoading(true);
    setIsSubmitted(true);
    setMessage({ type: '', text: '' });

    try {
      // Dynamic import to avoid initialization conflicts
      const emailjs = await import('@emailjs/browser');

      const templateParams = {
        subscriber_email: email,
        to_email: 'kirubeladamu9@gmail.com',
        subscription_date: new Date().toLocaleDateString(),
        subscription_time: new Date().toLocaleTimeString(),
        from_name: 'Newsletter Subscriber',
        subject: 'New Newsletter Subscription'
      };

      console.log('Sending newsletter subscription with params:', templateParams);

      // Try different approaches based on the version
      let result;
      try {
        result = await emailjs.default.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      } catch (standardError) {
        console.log('Standard method failed, trying alternative approach');
        result = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      }

      console.log('Newsletter subscription sent successfully:', result);
      setMessage({
        type: 'success',
        text: t('newsletter.success')
      });

      // Reset form
      setEmail('');

      // Allow resubmission after 30 seconds for newsletter
      setTimeout(() => {
        setIsSubmitted(false);
      }, 30000);

    } catch (error) {
      console.error('Newsletter subscription error:', error);

      let errorMessage = 'Unknown error';
      if (error?.text) {
        errorMessage = error.text;
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }

      setMessage({
        type: 'error',
        text: t('newsletter.error', { error: errorMessage })
      });

      // Allow retry after error
      setIsSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessage = () => {
    setMessage({ type: '', text: '' });
  };

  return (
    <div className={`newsletter-subscription ${className}`}>
      {/* Message Display */}
      {message.text && (
        <div className={`newsletter-message ${message.type === 'success' ? 'message-success' : 'message-error'}`}>
          <div className="message-content">
            <span className="message-icon">
              {message.type === 'success' ? '✓' : '✕'}
            </span>
            <span className="message-text">{message.text}</span>
            <button 
              type="button" 
              className="message-close"
              onClick={clearMessage}
              aria-label="Close message"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="newsletter-input-wrapper">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.placeholder')}
            className="newsletter-input"
            disabled={isLoading}
            required
          />
          <button 
            className="newsletter-btn" 
            type="submit"
            disabled={isLoading || isSubmitted}
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              <RightArrow />
            )}
          </button>
        </div>
      </form>

      <style jsx>{`
        .newsletter-subscription {
          width: 100%;
        }

        .newsletter-message {
          margin-bottom: 15px;
          padding: 0;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message-success {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          border: 1px solid #059669;
        }

        .message-error {
          background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
          border: 1px solid #DC2626;
        }

        .message-content {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          color: white;
          position: relative;
        }

        .message-icon {
          font-size: 16px;
          font-weight: bold;
          margin-right: 10px;
          flex-shrink: 0;
        }

        .message-text {
          flex: 1;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 500;
        }

        .message-close {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 0;
          margin-left: 10px;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }

        .message-close:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .newsletter-form {
          width: 100%;
        }

        .newsletter-input-wrapper {
          display: flex;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .newsletter-input-wrapper:focus-within {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 2px rgba(78, 205, 196, 0.3);
        }

        .newsletter-input {
          flex: 1;
          padding: 12px 20px;
          border: none;
          background: transparent;
          color: #ffffff;
          outline: none;
          font-size: 14px;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .newsletter-input:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .newsletter-btn {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          border: none;
          padding: 12px 20px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 50px;
        }

        .newsletter-btn:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(78, 205, 196, 0.3);
        }

        .newsletter-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .newsletter-input {
            padding: 10px 16px;
            font-size: 13px;
          }

          .newsletter-btn {
            padding: 10px 16px;
            min-width: 45px;
          }

          .message-content {
            padding: 10px 14px;
          }

          .message-text {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsletterSubscription;
