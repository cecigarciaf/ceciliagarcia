import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import Modal from 'react-bootstrap/Modal'
import { useTranslation } from 'react-i18next';

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
     {
       return (true)
     }
      
       return (false)
}

function Mailer (props) {
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function SendEmail(e){
        e.preventDefault();
        var email = document.querySelector("#email").value
    
    if(validateEmail(email)){
        emailjs.sendForm("service_ciu1hmh", "template_j9ohkzj", e.target, "sVSo00CIm-Pv41BYQ").then(res=>{  }).catch(err=> console.log(err));
        setName('')
        setEmail('')
        setMessage('')
        setShow(true)
       
    } }



    return(

        <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-7">

        <form id="contactForm" onSubmit= {SendEmail}>
            <div className="form-floating mb-3">
                <input className="form-control textos pt-5 " name="name" id="name" type="text" value={name} onChange={event => setName(event.target.value)}/>
                <label className="labeltext ">{t('Name')}</label>
                <div className="invalid-feedback" >A name is required.</div>
            </div>
     
         <div className="form-floating mb-3">
             <input className="form-control textos pt-5 " id="email" name="user_email" type="email" value={email} onChange={event => setEmail(event.target.value)} />
             <label  >{t('Email')}</label>
             <div className="invalid-feedback" >An email is required.</div>
             <div className="invalid-feedback"  >Email is not valid.</div>
         </div>
       
        
         <div className="form-floating mb-3">
             <textarea name= "message" rows="4" className="form-control textos" id="message" type="text" value={message} onChange={event => setMessage(event.target.value)} ></textarea>
             <label  >{t('Message')}</label>
             <div className="invalid-feedback" >A message is required.</div>
         </div>

         
      
         <button className="btn btn-xl" id="submitButton" type="submit">{t('Send')}</button>
     </form>
     <Modal id="emailmodal" className="modal  fade" show = {show}>   
       <Modal.Body  > 
       <div className="flex-container">
            <div className= "row text-center align-items-center"> <h4 id= "emailsent" className="mt-5 mb-5 ml-2 mr-2 "> {t('Your email was sent.')} </h4> </div>
            <div className="row text-center align-items-center"><div className="col-1"><button onClick= {() => setShow(false)} className="btn btn-sm" id="submitButton" >OK</button></div></div>
        </div>
       </Modal.Body>
 
     </Modal>
 </div>
</div>

    )}

export default Mailer