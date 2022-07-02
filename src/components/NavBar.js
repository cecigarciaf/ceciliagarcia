import React from 'react';
import { useTranslation } from 'react-i18next';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import './test.js'

function NavBar(){
    const { t, i18n } = useTranslation();


    const Style = (lenguaje) => {
    
        var style
        if(i18n.resolvedLanguage === lenguaje){
          style= { display : "none"}
        } else {
          style= { display : "unset"}
        }
        return style
      }
    
    
      const lngs = {
        en: { nativeName: 'English' },
        esp: { nativeName: 'Español' }
      };

    return(


<nav className="navbar navbar-expand-lg  text-uppercase fixed-top" id="mainNav">
<div className="container font-face-montserrat">

<a class="navbar-brand" href="#">
    <img href="#header" src="./logo.png" width="45" height="45" alt="Home"></img>
  </a>

        <NavDropdown id="basic-nav-dropdown" title={ lngs[i18n.resolvedLanguage].nativeName} >
            <NavDropdown.Item style= { Style("en")} id= "English" className= "select languaje" onClick={() => i18n.changeLanguage("en")} ><tx className="topBarText">{lngs["en"].nativeName}</tx></NavDropdown.Item>
            <NavDropdown.Item style= { Style("esp")} id= "Español" className= "select languaje" onClick={() => i18n.changeLanguage("esp")} ><tx className="topBarText">{lngs["esp"].nativeName}</tx></NavDropdown.Item>
        </NavDropdown>  


    <button id="burger" className="navbar-toggler text-uppercase font-weight-bold  text-white rounded " type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded "  href="#portfolio">Portfolio</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">{t('About')}</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">{t('Contact')}</a></li>
        </ul>
    </div>
    
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>


</nav>
    )
}


export default NavBar