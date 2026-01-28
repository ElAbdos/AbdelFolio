export type Language = 'FR' | 'EN';

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export interface FormState {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

export interface ContactProps {
  currentLanguage: Language;
}
