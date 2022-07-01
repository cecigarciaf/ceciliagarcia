import React from 'react';
import { useTranslation } from 'react-i18next';


function Portfolio1(){
    const { t, i18n } = useTranslation();

    return(
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content modalnoborder">
                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div className="modal-body text-center ">
                    <div className="container">
                    <div className="row justify-content-center">
                    </div>
                    <div  id="video1container" className=" row justify-content-center">      
                        <iframe id="video1" width="560" height="315" className=" img-fluid rounded " src="https://www.youtube.com/embed/FbnAdqMMQE8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>   
                    <p className="m-1 portfolioitemtitle"><b>{t('tituloport1')}</b></p>
                    <p className="mb-1 portfolioitemdescription"> <b>{t('descport1')} <br></br>{t('descport2')} </b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

export default Portfolio1;