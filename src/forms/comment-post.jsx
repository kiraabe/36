import React from "react";
import { useTranslation } from "next-i18next";

const CommentPost = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="box">
        <div className="row gx-20">
          <div className="col-xxl-4 col-xl-6 col-lg-4">
            <div className="postbox__comment-input mb-35">
              <input type="text" className="inputText" required />
              <span className="floating-label">{t('forms.yourName')}</span>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-4">
            <div className="postbox__comment-input mb-35">
              <input type="text" className="inputText" required />
              <span className="floating-label">{t('forms.yourEmail')}</span>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-4">
            <div className="postbox__comment-input mb-35">
              <input type="text" className="inputText" required />
              <span className="floating-label">{t('common.yourWebsite')}</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-20">
              <textarea className="textareaText" required></textarea>
              <span className="floating-label-2">{t('forms.yourComment')}</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-agree">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {t('forms.agreeDataCollection')}
                </label>
              </div>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-btn">
              <button type="submit" className="tp-btn-inner">
                {t('forms.postComment')}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CommentPost;
