import React, { useState } from 'react'
import "../Css/hmobile.css"
import loggo from "../../public/images/Dr. Nigar.svg"
import { GiHamburgerMenu } from 'react-icons/gi'
import MenuMobile from './MenuMobile'
function HeaderMobile() {
    const [open, setOpen] = useState(false)
    const [rotating, setRotating] = useState(false);
    function menumove() {
    setOpen(!open);
    setRotating(true);
    setTimeout(() => setRotating(false), 500);
  }
  return (
    <div className='h-mobile'>
        <img src={loggo} alt="logo" />
        <GiHamburgerMenu onClick={menumove} className={`menubar ${rotating ? 'rotate' : ''}`} />
        <MenuMobile open={open} setOpen={setOpen} />
    </div>
  )
}

export default HeaderMobile