import "../Css/desktophead.css"
import loggo from "../../public/images/Dr. Nigar.svg"
import scrollname from "../utils/scrollname";
function HeaderMobile() {
  const handleScroll = (e,id) => {
    e.preventDefault();
    scrollname(id)
  }
  return (
    <div className='desktop-above'>
        <img src={loggo} alt="logo" />
        <ul className='navbar'>
            <li className='first-link' onClick={(e)=> handleScroll(e,"kart1")}><a href="#">Haqqımda</a></li>
            <li><a href="#" onClick={(e)=> handleScroll(e,"xidmet1")}>Xidmətlər</a></li>
            <li><a href="#" onClick={(e)=> handleScroll(e,"meq1")}>Məqalələr</a></li>
            <li><a href="#" onClick={(e)=> handleScroll(e,"elaqe1")}>Əlaqə</a></li>
        </ul>
    </div>
  )
}

export default HeaderMobile
