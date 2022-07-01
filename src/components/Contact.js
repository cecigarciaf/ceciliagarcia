import React from 'react';
import Mailer from './Mailer';
import { useTranslation } from 'react-i18next';

function Contact(){
    const { t, i18n } = useTranslation();

    return(
        <section className="page-section" id="contact">
        <div className="container">
       
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{t('Contact me')}</h2>
      
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-envelope-open"></i></div>
                <div className="divider-custom-line"></div>
            </div>
         
            <Mailer/>

        </div>
        </section>
    )

}

export default Contact