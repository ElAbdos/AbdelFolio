import React from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import type { FormState, FormStatus } from '../types';

interface ContactFormProps {
  formRef: React.RefObject<HTMLFormElement | null>;
  formState: FormState;
  status: FormStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  translations: {
    name: string;
    name_ph: string;
    email: string;
    email_ph: string;
    subject: string;
    subject_ph: string;
    message: string;
    message_ph: string;
    send: string;
    sent: string;
    error: string;
  };
}

// Composant du formulaire de contact
export const ContactForm: React.FC<ContactFormProps> = ({formRef, formState, status, onChange, onSubmit, translations}) => {
  return (
    <div className="contact-form-col">
      <form className="contact-form" ref={formRef} onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="user_name" className="form-label">
            {translations.name}
          </label>
          <input type="text" id="user_name" name="user_name" className="form-input" placeholder={translations.name_ph} value={formState.user_name} onChange={onChange} required/>
        </div>

        <div className="form-group">
          <label htmlFor="user_email" className="form-label">
            {translations.email}
          </label>
          <input type="email" id="user_email" name="user_email" className="form-input" placeholder={translations.email_ph} value={formState.user_email} onChange={onChange} required/>
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            {translations.subject}
          </label>
          <input type="text" id="subject" name="subject" className="form-input" placeholder={translations.subject_ph} value={formState.subject} onChange={onChange} required/>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            {translations.message}
          </label>
          <textarea id="message" name="message" className="form-textarea" placeholder={translations.message_ph} value={formState.message} onChange={onChange} required rows={4}/>
        </div>

        <button type="submit" className={`submit-btn ${status}`} disabled={status === 'sending' || status === 'success'}>
          {status === 'sending' ? (
            <span className="loader"></span>
          ) : status === 'success' ? (
            <>
              <Check size={20} />
              {translations.sent}
            </>
          ) : status === 'error' ? (
            <>
              <AlertCircle size={20} />
              {translations.error}
            </>
          ) : (
            <>
              {translations.send}
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
