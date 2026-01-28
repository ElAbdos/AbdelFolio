export const CONTACT_EMAIL = 'abdeloffipro@gmail.com';

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
} as const;

export const FORM_RESET_DELAY = 60000; // ce qui équivaut à 1 minutes
