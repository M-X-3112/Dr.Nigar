import React from 'react'
import "../Css/footer.css"
import location from "../../public/images/Location.svg"
import phone from "../../public/images/Phone.svg"
import mail from "../../public/images/mail.svg"
import whatsapp from "../../public/images/WhatsappLogo.svg"
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { RiTwitterXLine } from 'react-icons/ri'


function F2() {
  return (
    <div className='f2'>
        <div className="contact-left">
            <div className="contact">
                <div className="contact-line">
                    <img src={location} alt="location" />
                    <p><b>Ünvan:</b> Bakı şəhəri, Nərimanov rayonu</p>
                </div>
                <div className="contact-line">
                    <img src={phone} alt="phone" />
                    <p><b>Telefon:</b> +994 55 111 22 33</p>
                </div>
                <div className="contact-line">
                    <img src={mail} alt="phone" />
                    <p><b>E-Mail:</b> drnigarmamedova1@gmail.com</p>
                </div>
                <div className="contact-line">
                    <img src={whatsapp} alt="phone" />
                    <p><b>Whatsapp</b></p>
                </div>
            </div>
            <div className="social-media">
                <h4>Sosial Hesablar</h4>
                <div className="social-accounts">
                    <FaInstagram className='icons-s' size={40} color="#fff" />                
                    <CiFacebook className='icons-s' size={40} color="#fff" />
                    <RiTwitterXLine className='icons-s' size={40} color="#fff" />
                    <CiLinkedin className='icons-s' size={40} color="#fff" />
                </div>
            </div>
        </div>
        <div className="contact-right">
            <form>
                <div className="inputs">
                    <input type="text" placeholder='Ad Soyad' />
                    <input type="text" placeholder='E-Mail' />
                </div>
                <textarea placeholder='Şəxsi düşüncələrinizi bizimlə bölüşün...'></textarea>
                <button>Göndər</button>
            </form>
        </div>
    </div>
  )
}

export default F2