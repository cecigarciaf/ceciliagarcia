import React from 'react';

function Portfolio(){
    return(
        <section className="page-section portfolio" id="portfolio">
            <div className="container">    

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-film"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row m-2 justify-content-center text-center">
                    <div className="col">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-play fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="./images/hlb.png" alt="..." />
                        </div>
                    </div>
                </div>

                <div className="row m-2 justify-content-center text-center">
                    <div className="col">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-play fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="./images/bnf.png" alt="..." />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio