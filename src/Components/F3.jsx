import React from 'react'
import "../Css/footer.css"
import logoMain from "../../public/images/Dr. Nigar.svg"
import { FaChevronUp } from 'react-icons/fa'
import scrollTop from '../utils/scrollTop'
function F3() {
  return (
    <div className='f3'>
        <div className="logo-tab">
            <img src={logoMain} alt="logo" />
            <p>Sizin sağlamlığınız bizim üçün öncəlikdir</p>
        </div>
        <div onClick={()=> scrollTop(0)} style={{cursor: "pointer"}}>
          <FaChevronUp className='up-button' size={30} color="#fff" style={{border: "3px solid #fff", borderRadius: "20%", padding: "8px" }} />
        </div>

    </div>
  )
}

export default F3