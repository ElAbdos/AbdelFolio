import React, { useState, type FormEvent } from 'react';
import type { FormState, FormStatus } from './types';
import { EMAILJS_CONFIG, FORM_RESET_DELAY } from './constants';


// Hook  pour gérer le formulaire de contact
export const useContactForm = (formRef: React.RefObject<HTMLFormElement | null>) => {
  const [formState, setFormState] = useState<FormState>({user_name: '', user_email: '', subject: '', message: '',});
  const [status, setStatus] = useState<FormStatus>('idle');

  // Hook pour gérer les changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Hook pour gérer la soumission du formulaire et l'envoi d'e-mails via EmailJS
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setStatus('sending');

    import('@emailjs/browser').then((emailjs) => {
      emailjs.default.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, formRef.current!, EMAILJS_CONFIG.PUBLIC_KEY).then(() => {
          setStatus('success');
          setFormState({ user_name: '', user_email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), FORM_RESET_DELAY);
        }).catch(() => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), FORM_RESET_DELAY);
        });
    });
  };
  return {formState, status, handleChange, handleSubmit};
};

// Hook pour copier le mail dans le presse-papiers
export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = (text: string, delay: number = 2000) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), delay);
    });
  };

  return { copied, copy };
};

// Fonction pour faire défiler en douceur jusqu'à une section spécifique de la page
export const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
  e.preventDefault();
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};
