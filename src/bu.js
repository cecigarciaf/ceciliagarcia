import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Mailer from './Mailer'


function App() {
  return (

   <div>
    <nav className="navbar navbar-expand-lg  text-uppercase fixed-top" id="mainNav">
        <div className="container font-face-montserrat">
            <a className="navbar-brand " href="#page-top">Cecilia García</a>
            <button id="burger" className="navbar-toggler text-uppercase font-weight-bold  text-white rounded " type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </nav>
    
    <header className="masthead text-white text-center">
        <div className="container d-flex align-items-center flex-column">

            <img className="masthead-avatar mb-5" src="logo.jpg" alt="..." />
       
            <h1 className="masthead-heading text-uppercase mb-0 font-face-lato ">Cecilia Garcia</h1>
 
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-headphones"></i></div>
                <div className="divider-custom-line"></div>
            </div>
       
            <p className="masthead-subheading font-weight-light mb-0">Sound Designer</p>
        </div>
    </header>

    <section className="page-section portfolio" id="portfolio">
        <div className="container">
          
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
 
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-film"></i></div>
                <div className="divider-custom-line"></div>
            </div>
        
            <div className="row justify-content-center text-center">
             
                <div className="col">


                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="./images/hlb.png" alt="..." />
                        </div>


                    </div>
            

            </div>
        </div>
    </section>


    <section className="page-section text-white mb-0" id="about">
        <div className="container">
      
            <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
      
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-cog"></i></div>
                <div className="divider-custom-line"></div>
            </div>
  
            <div className="row">
                <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
            </div>
     
            <div className="text-center mt-4">
                <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                    <i className="fas fa-download me-2"></i>
                    Free Download!
                </a>
            </div>
        </div>
    </section>

    <section className="page-section" id="contact">
            <div className="container">
           
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
          
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-envelope-open"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
             
                <Mailer/>

            </div>

           







        </section>





    <footer className="footer text-center">
        <div className="container">
            <div className="row">
        
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Location</h4>
                    <p className="lead mb-0">
                        Buenos Aires, Argentina
                        
                        <br />
                        Open to travel
                    </p>
                </div>
 
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Social Media</h4>
                    
                    <a className="btn-outline-light btn-social mx-1" href="https://twitter.com/Ceci11Garcia"><i className="fab fa-fw fa-twitter"></i></a>
                    <a className="btn-outline-light btn-social mx-1" href="http://www.linkedin.com/in/cecilia-i-garcia"><i className="fab fa-fw fa-linkedin-in"></i></a>
                    <a className="btn-outline-light btn-social mx-1" href="https://www.youtube.com/channel/UCXc6J15YOw1HTro4UyIvYFQ"><i className="fab fa-fw fa-youtube"></i></a>
                </div>
   

            </div>
        </div>
    </footer>

    <div className="copyright py-4 text-center text-white">
        <div className="container"><small> &copy; Cecilia García 2022</small></div>
    </div>

    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div className="modal-body text-center ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                          
                                <h2 className="portfolio-modal-title   mb-0">Hyper Light Breaker Teaser</h2>
                              
                                <div className="divider-custom">
                                    <div className="divider-custom-line"></div>
                                </div>
                            
                              
                                <iframe className="img-fluid rounded " src="https://www.youtube.com/embed/FbnAdqMMQE8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                
                                
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                    <i className="fas fa-xmark fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                        
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                      
                                <div className="divider-custom">
                                    <div className="divider-custom-line"></div>
                                    <div className="divider-custom-icon"><i className="fas fa-headphones"></i></div>
                                    <div className="divider-custom-line"></div>
                                </div>
                             
                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="..." />
                        
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                    <i className="fas fa-xmark fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                           
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
              
                                <div className="divider-custom">
                                    <div className="divider-custom-line"></div>
                                    <div className="divider-custom-icon"><i className="fas fa-headphones"></i></div>
                                    <div className="divider-custom-line"></div>
                                </div>
                           
                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="..." />
                    
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                    <i className="fas fa-xmark fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
               
                                <div className="divider-custom">
                                    <div className="divider-custom-line"></div>
                                    <div className="divider-custom-icon"><i className="fas fa-headphones"></i></div>
                                    <div className="divider-custom-line"></div>
                                </div>
                     
                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="..." />
                 
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                    <i className="fas fa-xmark fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">

                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>

                                <div className="divider-custom">
                                    <div className="divider-custom-line"></div>
                                    <div className="divider-custom-icon"><i className="fas fa-headphones"></i></div>
                                    <div className="divider-custom-line"></div>
                                </div>

                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="..." />

                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                    <i className="fas fa-xmark fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
   
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
               
                                <div className="divider-custom">
                                    <div className="divider-custom-line"></div>
                                    <div className="divider-custom-icon"><i className="fas fa-headphones"></i></div>
                                    <div className="divider-custom-line"></div>
                                </div>
                                
                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="..." />
                   
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                    <i className="fas fa-xmark fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
 



 


  );
}
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
  
    };
  
    // Shrink the navbar 
    navbarShrink();
  
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
  
   
  
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
  
  });
export default App;
