import React, { useRef } from 'react';
import { translations } from '@/constants/translations';
import { CONTACT_EMAIL } from './constants';
import type { ContactProps } from './types';
import { useContactForm, useCopyToClipboard, scrollToSection } from './hooks';
import { ContactHeader, ContactInfo, ContactForm, ContactFooter } from './components';

import './styles/index.css';

const Contact: React.FC<ContactProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage].contact;
  const formRef = useRef<HTMLFormElement>(null);

  const { formState, status, handleChange, handleSubmit } = useContactForm(formRef);
  const { copied: copiedEmail, copy: copyEmail } = useCopyToClipboard();

  const copyEmailToClipboard = () => copyEmail(CONTACT_EMAIL);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <ContactHeader tag={t.tag} titleStart={t.title_start} titleHighlight={t.title_highlight} subtitle={t.subtitle}/>

        <div className="contact-content-wrapper">
          <ContactInfo copiedEmail={copiedEmail} onCopyEmail={copyEmailToClipboard} />
          <ContactForm formRef={formRef} formState={formState} status={status} onChange={handleChange} onSubmit={handleSubmit} translations={t.form}/>
        </div>
      </div>
      <ContactFooter navLabels={t.nav} onNavigate={scrollToSection} />
    </section>
  );
};

export default Contact;
