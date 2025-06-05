import { TbActivityHeartbeat } from "react-icons/tb"
import "../Css/anim1.css"
import { useEffect, useState } from "react"
function Animation1() {
    const [show, setShow] = useState(true)
    
    useEffect(() => {
        document.body.style.overflow = "hidden";
        const timer = setTimeout(() => {
            setShow(false);
            document.body.style.overflow = "auto";
        }, 3000);
        return () => {
          clearTimeout(timer);
          document.body.style.overflow = "auto"
        }
    },[])
    if(!show) return null;
  return (
    <div className='anim1'>
        <TbActivityHeartbeat  className="anim-icon" />
    </div>
  )
}

export default Animation1