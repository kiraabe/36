import React, { useState } from "react";
import { useTranslation } from 'next-i18next';
import NiceSelect from "../ui/nice-select";

const ContactUsForm = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [selectedInquiry, setSelectedInquiry] = useState(t('forms.inquiryAbout'));
  const [isSubmitted, setIsSubmitted] = useState(false);

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_5i5l5qr',
    TEMPLATE_ID: 'template_vff07o4',
    PUBLIC_KEY: 'sI0FlhGAlA9_-4v9x'
  };

  const selectHandler = (selectedOption) => {
    setSelectedInquiry(selectedOption.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isLoading || isSubmitted) {
      console.log('Submission blocked - already processing or submitted');
      return;
    }

    setIsLoading(true);
    setIsSubmitted(true);
    setMessage({ type: '', text: '' });

    try {
      // Validate EmailJS configuration first
      if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
          EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
          EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS configuration not set up. Please replace the placeholder values with your actual EmailJS keys.');
      }

      console.log('EmailJS configuration validated');

      // Dynamic import to avoid initialization conflicts
      const emailjs = await import('@emailjs/browser');

      console.log('EmailJS loaded successfully');

      const templateParams = {
        from_name: formData.user_name,
        from_email: formData.user_email,
        phone: formData.phone,
        inquiry_type: selectedInquiry,
        message: formData.message,
        to_email: 'kirubeladamu9@gmail.com'
      };

      console.log('Attempting to send email with params:', templateParams);
      console.log('EmailJS config check:', {
        serviceId: EMAILJS_CONFIG.SERVICE_ID?.substring(0, 10) + '...',
        templateId: EMAILJS_CONFIG.TEMPLATE_ID?.substring(0, 10) + '...',
        publicKeySet: EMAILJS_CONFIG.PUBLIC_KEY ? 'YES' : 'NO'
      });

      // Try different approaches based on the version
      let result;
      try {
        // Try the standard approach first
        result = await emailjs.default.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      } catch (standardError) {
        console.log('Standard method failed, trying alternative approach');
        // Try alternative approach
        result = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      }

      console.log('Email sent successfully:', result);
      setMessage({
        type: 'success',
        text: t('forms.contactSuccessMessage')
      });

      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        phone: '',
        message: ''
      });
      setSelectedInquiry(t('forms.inquiryAbout'));

      // Allow resubmission after 10 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);

    } catch (error) {
      console.error('EmailJS Error Details:');
      console.error('Error object:', error);
      console.error('Error message:', error?.message);
      console.error('Error status:', error?.status);
      console.error('Error text:', error?.text);
      console.error('Error stack:', error?.stack);

      // Try to extract meaningful error info
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
        text: `Sorry, there was an error sending your message: ${errorMessage}. Please check the configuration and try again, or contact us directly at kirubeladamu9@gmail.com.`
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
    <>
      {/* Message Display */}
      {message.text && (
        <div className={`alert-message ${message.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          <div className="alert-content">
            <span className="alert-icon">
              {message.type === 'success' ? '✓' : '✕'}
            </span>
            <span className="alert-text">{message.text}</span>
            <button 
              type="button" 
              className="alert-close"
              onClick={clearMessage}
              aria-label="Close message"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <form onSubmit={sendEmail} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                className="inputText"
                required
                disabled={isLoading}
              />
              <span className="floating-label">{t('forms.fullName')}</span>
            </div>
          </div>

          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                className="inputText"
                required
                disabled={isLoading}
              />
              <span className="floating-label">{t('forms.yourEmail')}</span>
            </div>
          </div>

          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="inputText"
                required
                disabled={isLoading}
              />
              <span className="floating-label">{t('forms.phoneNumber')}</span>
            </div>
          </div>
          
          <div className="col-12">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={[
                  { value: t('forms.inquiryAbout'), text: t('forms.inquiryAbout') },
                  { value: t('forms.officeCleaning'), text: t('forms.officeCleaning') },
                  { value: t('forms.washingDishes'), text: t('forms.washingDishes') },
                  { value: t('forms.dustingVacuuming'), text: t('forms.dustingVacuuming') },
                  { value: t('forms.carpetCleaning'), text: t('forms.carpetCleaning') },
                  { value: t('forms.windowCleaning'), text: t('forms.windowCleaning') },
                  { value: t('forms.deepCleaning'), text: t('forms.deepCleaning') },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
                disabled={isLoading}
              />
            </div>
          </div>
          
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="textareaText"
                required
                disabled={isLoading}
              ></textarea>
              <span className="floating-label-2">{t('forms.message')}</span>
            </div>
          </div>
          
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button 
                type="submit" 
                className="submit-btn w-100"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    {t('buttons.sending')}
                  </>
                ) : (
                  t('buttons.sendRequest')
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      <style jsx>{`
        .alert-message {
          margin-bottom: 20px;
          padding: 0;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .alert-success {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          border: 1px solid #059669;
        }

        .alert-error {
          background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
          border: 1px solid #DC2626;
        }

        .alert-content {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          color: white;
          position: relative;
        }

        .alert-icon {
          font-size: 18px;
          font-weight: bold;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .alert-text {
          flex: 1;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 500;
        }

        .alert-close {
          background: none;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          padding: 0;
          margin-left: 12px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }

        .alert-close:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
          margin-right: 8px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .inputText:disabled,
        .textareaText:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default ContactUsForm;
