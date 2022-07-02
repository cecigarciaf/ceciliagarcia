import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer(){
    const { t, i18n } = useTranslation();

    return(

        <footer className="footer text-center">
            <div className="container">
                <div className="row">
            
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">{t('Location')}</h4>
                        <p className="lead mb-0">
                            Buenos Aires, Argentina
                            
                            <br />
                          
                        </p>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">{t('Social Media')}</h4>
                        
                        <a className="btn-outline-light btn-social mx-1" href="https://twitter.com/Ceci11Garcia"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn-outline-light btn-social mx-1" href="http://www.linkedin.com/in/cecilia-i-garcia"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn-outline-light btn-social mx-1" href="https://www.youtube.com/channel/UCXc6J15YOw1HTro4UyIvYFQ"><i className="fab fa-fw fa-youtube"></i></a>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer;