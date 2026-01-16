import React, { useState, useRef } from 'react';
import '../css/Contact.css';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink, Copy, Check, AlertCircle } from 'lucide-react';
import { translations } from '../constants/translations';
import emailjs from '@emailjs/browser';

const Contact = ({ currentLanguage }) => {
    const t = translations[currentLanguage].contact;
    const formRef = useRef();
    const [formState, setFormState] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');
    const [copiedEmail, setCopiedEmail] = useState(false);

    /* ----- Configuration EmailJS (À REMPLACER PAR VOS CLÉS) ----- */
    // Créez un compte sur https://www.emailjs.com/
    // 1. Ajoutez un "Email Service" (ex: Gmail)
    // 2. Ajoutez un "Email Template"
    // 3. Récupérez vos IDs dans "Account" > "API Keys"
    const SERVICE_ID = 'YOUR_SERVICE_ID'; // ex: service_xxxx
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // ex: template_xxxx
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // ex: user_xxxx ou clé publique

    const handleSubmit = (e) => {
        e.preventDefault();
        if (SERVICE_ID === 'YOUR_SERVICE_ID') {
            alert("⚠️ EmailJS n'est pas configuré !\n\nPour que l'envoi fonctionne réellement sur 'abdeloffipro@gmail.com', vous devez créer un compte gratuit sur EmailJS et remplacer les IDs dans le fichier Contact.jsx.");
            return;
        }

        setStatus('sending');
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email envoyé !', result.text);
                setStatus('success');
                setFormState({ user_name: '', user_email: '', subject: '', message: '' }); // Reset
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.error('Erreur envoi:', error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };
    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("abdeloffipro@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <span className="section-tag">{t.tag}</span>
                    <h2 className="section-title">
                        {t.title_start} <span className="text-gradient">{t.title_highlight}</span>
                    </h2>
                    <p className="section-subtitle">{t.subtitle}</p>
                </div>

                <div className="contact-content-wrapper">

                    <div className="contact-info-col">
                        <div className="email-card" onClick={copyEmailToClipboard} title="Copier l'email">
                            <div className="email-icon-circle">
                                <Mail size={24} />
                            </div>
                            <div className="email-details">
                                <span className="email-label">{t.email_label}</span>
                                <h3 className="email-address">abdeloffipro@gmail.com</h3>
                            </div>
                            <div className="copy-icon">
                                {copiedEmail ? <Check size={20} color="#6bcb77" /> : <Copy size={20} />}
                            </div>
                        </div>
                        <div className="location-badge">
                            <MapPin size={18} className="location-icon" />
                            <span>France, Toulouse</span>
                        </div>
                        <div className="social-grid">
                            <a href="https://github.com/ElAbdos" target="_blank" rel="noopener noreferrer" className="social-card github">
                                <Github size={24} />
                                <span>GitHub</span>
                                <ExternalLink size={14} className="social-arrow" />
                            </a>
                            <a href="https://www.linkedin.com/in/abdel-el-haroria-6a529233b/" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
                                <Linkedin size={24} />
                                <span>LinkedIn</span>
                                <ExternalLink size={14} className="social-arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="contact-form-col">
                        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="user_name" className="form-label">{t.form.name}</label>
                                <input type="text" id="user_name" name="user_name" className="form-input" placeholder={t.form.name_ph} value={formState.user_name} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_email" className="form-label">{t.form.email}</label>
                                <input type="email" id="user_email" name="user_email" className="form-input" placeholder={t.form.email_ph} value={formState.user_email} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">{t.form.subject}</label>
                                <input type="text" id="subject" name="subject" className="form-input" placeholder={t.form.subject_ph} value={formState.subject} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">{t.form.message}</label>
                                <textarea id="message" name="message" className="form-textarea" placeholder={t.form.message_ph} value={formState.message} onChange={handleChange} required rows="4"></textarea>
                            </div>

                            <button type="submit" className={`submit-btn ${status}`} disabled={status === 'sending' || status === 'success'}>
                                {status === 'sending' ? (
                                    <span className="loader"></span>
                                ) : status === 'success' ? (
                                    <>
                                        <Check size={20} />
                                        {t.form.sent}
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        <AlertCircle size={20} />
                                        {t.form.error}
                                    </>
                                ) : (
                                    <>
                                        {t.form.send}
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="main-footer">
                <div className="footer-content">
                    <p className="copyright">
                        © {new Date().getFullYear()} AbdelFolio. <span className="made-with">Made with React & Passion.</span>
                    </p>
                    <div className="footer-links">
                        <a href="#home" className="footer-link">{t.nav.home}</a>
                        <a href="#skills" className="footer-link">{t.nav.skills}</a>
                        <a href="#projects" className="footer-link">{t.nav.projects}</a>
                    </div>
                </div>
            </footer>
        </section>
    );
};
export default Contact;
