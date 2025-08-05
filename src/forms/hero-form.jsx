import React, { useState } from "react";
import { useTranslation } from 'next-i18next';
import EmailIcon from "../svg/email";

const HeroForm = () => {
  const { t } = useTranslation('common');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // EmailJS Configuration (same as contact form)
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_5i5l5qr',
    TEMPLATE_ID: 'template_vff07o4',
    PUBLIC_KEY: 'sI0FlhGAlA9_-4v9x'
  };

  const sendQuoteRequest = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isLoading || isSubmitted) {
      return;
    }

    setIsLoading(true);
    setIsSubmitted(true);
    setMessage({ type: '', text: '' });

    try {
      // Dynamic import to avoid initialization conflicts
      const emailjs = await import('@emailjs/browser');

      const templateParams = {
        from_name: 'Quote Request',
        from_email: 'noreply@cleaningservice.com',
        phone: 'Not provided',
        inquiry_type: 'Free Quote Request',
        message: `Address for quote: ${address}\n\nThis is a free quote request submitted through the hero form.`,
        to_email: 'kirubeladamu9@gmail.com'
      };

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
        result = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      }

      setMessage({
        type: 'success',
        text: t('forms.quoteSuccessMessage')
      });

      // Reset form
      setAddress('');

      // Allow resubmission after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setMessage({ type: '', text: '' });
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);

      setMessage({
        type: 'error',
        text: t('forms.quoteErrorMessage')
      });

      // Allow retry after error
      setIsSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Message Display */}
      {message.text && (
        <div className={`hero-alert ${message.type === 'success' ? 'hero-alert-success' : 'hero-alert-error'}`}>
          <span className="hero-alert-text">{message.text}</span>
        </div>
      )}

      <form onSubmit={sendQuoteRequest}>
        <div className="p-relative">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={t('forms.enterAddress')}
            required
            disabled={isLoading}
          />
          {/* email icon */}
          <EmailIcon />
        </div>
        <button
          type="submit"
          className="tp-btn tp-btn-hover alt-color-black"
          disabled={isLoading}
        >
          <span>
            {isLoading ? t('buttons.sending') : t('buttons.getFreeQuote')}
          </span>
          <b></b>
        </button>
      </form>

      <style jsx>{`
        .hero-alert {
          margin-bottom: 15px;
          padding: 12px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
        }

        .hero-alert-success {
          background-color: #10B981;
          color: white;
          border: 1px solid #059669;
        }

        .hero-alert-error {
          background-color: #EF4444;
          color: white;
          border: 1px solid #DC2626;
        }

        .hero-alert-text {
          display: block;
        }

        input:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default HeroForm;
