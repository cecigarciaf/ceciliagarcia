import React from 'react';
import { useTranslation } from 'react-i18next';

function Header(){
    const { t, i18n } = useTranslation();

    return(
        <header className="masthead text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <h1 className="masthead-heading text-uppercase mb-0 font-face-lato ">Cecilia Garcia</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-headphones"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">{t('Sound Designer')}</p>
            </div>
        </header>
    )
}

export default Header