import React from 'react';
import { useTranslation } from 'react-i18next';

function About(){
    const { t, i18n } = useTranslation();

    return(

    <section className="page-section text-white mb-0" id="about">
    <div className="container">
  
        <h2 className="page-section-heading text-center text-uppercase text-white">{t('About')}</h2>
  
        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-cog"></i></div>
            <div className="divider-custom-line"></div>
        </div>

        <div className="row">
            <div className="col-lg-4 ms-auto">
                <p className="lead">
                {t('About1')}<br></br>{t('About2')}

                </p>
            </div>
            <div className="col-lg-4 me-auto">
                <p className="lead">{t('About3')}
                <br></br>{t('About4')}
                </p>
            </div>
        </div>
 
        <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                <i className="fas fa-download me-2"></i>
                {t('CV')}
            </a>
        </div>
    </div>
</section>
    )
}

export default About